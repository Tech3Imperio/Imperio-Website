/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductSelection from "../../components/Product_Selection/product-selection";
import UserForm from "../../components/User-Form/user-form";

// Google Apps Script Web App URLs
// const POST_URL =
//   "https://script.google.com/macros/s/AKfycbyxkgQzpx1ha9MACPolsGrewDCBCtd-a8N8VsBiGAOicAzhWMEFAvJON-99ZE6RyahFEQ/exec";
const BASE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyGliJ9kC9zhN4ShItCtCatIe-GCB98yVo0z9uVa8k0ToaPfKM7LupxuiBiDkgZJ2Ug/exec?sheet=Base";
const HANDRAIL_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyGliJ9kC9zhN4ShItCtCatIe-GCB98yVo0z9uVa8k0ToaPfKM7LupxuiBiDkgZJ2Ug/exec?sheet=Handrail";
const GLASS_THICKNESS_URL =
  "https://script.google.com/macros/s/AKfycbyGliJ9kC9zhN4ShItCtCatIe-GCB98yVo0z9uVa8k0ToaPfKM7LupxuiBiDkgZJ2Ug/exec?sheet=Glass Thickness";
const LOCATION_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyGliJ9kC9zhN4ShItCtCatIe-GCB98yVo0z9uVa8k0ToaPfKM7LupxuiBiDkgZJ2Ug/exec?sheet=Location";
const TIMELINE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyGliJ9kC9zhN4ShItCtCatIe-GCB98yVo0z9uVa8k0ToaPfKM7LupxuiBiDkgZJ2Ug/exec?sheet=Timeline";
const USER_TYPE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyGliJ9kC9zhN4ShItCtCatIe-GCB98yVo0z9uVa8k0ToaPfKM7LupxuiBiDkgZJ2Ug/exec?sheet=User Type";

interface ProductData {
  base: string;
  handrail: string;
  finish: string;
  glass: string;
  height: number;
  location: string;
  city: string;
  state: string;
  userType: string;
  timeline: string;
}

interface UserData {
  name: string;
  phone: string;
  email: string;
  size: number;
}

// Define the BaseDataItem interface to match what ProductSelection expects
interface BaseDataItem {
  Base: string;
  [key: string]: string | number;
}

interface HandrailDataItem {
  "Handrail Type": string;
  [key: string]: string | number;
}

interface GlassDataItem {
  "Glass Thickness": string;
  Price: string | number;
  [key: string]: string | number;
}

interface LocationDataItem {
  Location: string;
  "Parameter (in %)": number;
  [key: string]: string | number;
}

interface TimelineDataItem {
  Timeline: string;
  "Parameter (in %)": number;
  [key: string]: string | number;
}

interface UserTypeDataItem {
  "User Type": string;
  "Parameter (in %)": number;
  [key: string]: string | number;
}

// Define SheetRow with all possible properties and make them optional
type SheetRow = {
  Base?: string;
  "Handrail Type"?: string;
  "Glass Thickness"?: string;
  Location?: string;
  Timeline?: string;
  "User Type"?: string;
  Price?: string | number;
  "Parameter (in %)"?: number;
  [key: string]: string | number | undefined;
};

// Conversion functions to ensure type safety
function convertToGlassData(data: SheetRow[]): GlassDataItem[] {
  return data.map((row) => ({
    "Glass Thickness": row["Glass Thickness"] || "",
    Price: row.Price || 0,
    ...row,
  }));
}

function convertToLocationData(data: SheetRow[]): LocationDataItem[] {
  return data.map((row) => ({
    Location: row.Location || "",
    "Parameter (in %)":
      typeof row["Parameter (in %)"] === "number" ? row["Parameter (in %)"] : 0,
    ...row,
  }));
}

function convertToTimelineData(data: SheetRow[]): TimelineDataItem[] {
  return data.map((row) => ({
    Timeline: row.Timeline || "",
    "Parameter (in %)":
      typeof row["Parameter (in %)"] === "number" ? row["Parameter (in %)"] : 0,
    ...row,
  }));
}

function convertToUserTypeData(data: SheetRow[]): UserTypeDataItem[] {
  return data.map((row) => ({
    "User Type": row["User Type"] || "",
    "Parameter (in %)":
      typeof row["Parameter (in %)"] === "number" ? row["Parameter (in %)"] : 0,
    ...row,
  }));
}

// Add this function after the convertToUserTypeData function:
async function getPincodeState(pincode: string): Promise<string | null> {
  try {
    console.log("Fetching state for pincode:", pincode);
    const response = await axios.get(
      `https://api.postalpincode.in/pincode/${pincode}`,
      {
        timeout: 5000, // Add timeout to prevent long waits
      }
    );
    console.log("Pincode API response:", response.data);

    if (
      response.data &&
      Array.isArray(response.data) &&
      response.data.length > 0 &&
      response.data[0].Status === "Success" &&
      response.data[0].PostOffice &&
      response.data[0].PostOffice.length > 0
    ) {
      const state = response.data[0].PostOffice[0].State;
      console.log("State found:", state);
      return state;
    }

    console.error("Invalid response format or no data found for pincode");
    return null;
  } catch (error) {
    console.error("Error fetching pincode data:", error);
    return null;
  }
}

function App() {
  // State for page control
  const [currentPage, setCurrentPage] = useState<"product" | "user">("product");

  // Default product data
  const defaultProductData: ProductData = {
    base: "",
    handrail: "",
    finish: "",
    glass: "",
    height: 3.5,
    location: "",
    city: "",
    state: "",
    userType: "",
    timeline: "",
  };

  // Product selection state
  const [productData, setProductData] = useState<ProductData>({
    ...defaultProductData,
  });

  // User form state
  const [, setUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    size: 0,
  });

  // Data from Google Sheets
  const [baseData, setBaseData] = useState<BaseDataItem[]>([]);
  const [handrailData, setHandrailData] = useState<HandrailDataItem[]>([]);
  const [glassData, setGlassData] = useState<SheetRow[]>([]);
  const [locationData, setLocationData] = useState<SheetRow[]>([]);
  const [timelineData, setTimelineData] = useState<SheetRow[]>([]);
  const [userTypeData, setUserTypeData] = useState<SheetRow[]>([]);

  // App state
  const [pricePerFt, setPricePerFt] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [initialDataLoaded, setInitialDataLoaded] = useState<boolean>(false);

  const heightOptions: number[] = [2.5, 3, 3.25, 3.5, 4];

  // Fetch data from Google Sheets
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [
          baseResponse,
          handrailResponse,
          glassResponse,
          locationResponse,
          timelineResponse,
          userTypeResponse,
        ] = await Promise.all([
          axios.get<SheetRow[]>(BASE_SHEET_URL),
          axios.get<SheetRow[]>(HANDRAIL_SHEET_URL),
          axios.get<SheetRow[]>(GLASS_THICKNESS_URL),
          axios.get<SheetRow[]>(LOCATION_SHEET_URL),
          axios.get<SheetRow[]>(TIMELINE_SHEET_URL),
          axios.get<SheetRow[]>(USER_TYPE_SHEET_URL),
        ]);

        // Convert SheetRow[] to BaseDataItem[] for baseData
        const typedBaseData: BaseDataItem[] = baseResponse.data.map((row) => {
          // Create a new object with all properties from row
          const typedRow: BaseDataItem = {
            Base: row.Base as string,
            ...row,
          };
          return typedRow;
        });
        const typedHandrailData: HandrailDataItem[] = handrailResponse.data.map(
          (row) => {
            // Create a new object with all properties from row
            const typedRow: HandrailDataItem = {
              "Handrail Type": row["Handrail Type"] as string,
              ...row,
            };
            return typedRow;
          }
        );

        setBaseData(typedBaseData);
        setHandrailData(typedHandrailData);
        setGlassData(glassResponse.data);
        setLocationData(locationResponse.data);
        setTimelineData(timelineResponse.data);
        setUserTypeData(userTypeResponse.data);
        setInitialDataLoaded(true);

        // Set default values
        if (baseResponse.data.length > 0 && handrailResponse.data.length > 0) {
          // Get the first finish option
          const firstFinish = Object.keys(baseResponse.data[0]).filter(
            (key) => key !== "Base"
          )[0];
          const firstGlass = glassResponse.data[0]?.[
            "Glass Thickness"
          ] as string;
          const firstTimeline = timelineResponse.data[0]?.Timeline as string;
          const firstUserType = userTypeResponse.data[0]?.[
            "User Type"
          ] as string;
          setProductData((prev) => ({
            ...prev,
            base: baseResponse.data[0].Base as string,
            handrail: handrailResponse.data[0]["Handrail Type"] as string,
            finish: firstFinish,
            glass: firstGlass || "",
            timeline: firstTimeline || "",
            userType: firstUserType || "",
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("❌ Error loading product data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate price per foot
  const calculatePerFtPrice = (
    stateForCalculation?: string
  ): number | string => {
    try {
      console.log(
        "Calculating price with state:",
        stateForCalculation || productData.state
      );
      console.log("Product data:", productData);
      console.log("Location data:", locationData);

      // Use either the passed state parameter or the state from productData
      const stateToUse = stateForCalculation || productData.state;

      // Fetch Base price (a) based on Finish
      const baseRow = baseData.find((row) => row.Base === productData.base);
      if (!baseRow) {
        console.error("Base row not found for:", productData.base);
        return "❌ Error: Base option not found";
      }

      const basePrice = baseRow[productData.finish];
      console.log("Base price:", basePrice);

      // Fetch Handrail price (b) based on Finish
      const handrailRow = handrailData.find(
        (row) => row["Handrail Type"] === productData.handrail
      );
      if (!handrailRow) {
        console.error("Handrail row not found for:", productData.handrail);
        return "❌ Error: Handrail option not found";
      }

      const handrailPrice = handrailRow[productData.finish];
      console.log("Handrail price:", handrailPrice);

      // Fetch Glass price (c) based on Glass Thickness
      const glassRow = glassData.find(
        (row) => row["Glass Thickness"] === productData.glass
      );
      if (!glassRow) {
        console.error("Glass row not found for:", productData.glass);
        return "❌ Error: Glass option not found";
      }

      const glassPrice = glassRow.Price;
      console.log("Glass price:", glassPrice);

      // Fetch Height (d)
      const heightValue = productData.height;
      console.log("Height value:", heightValue);

      // Calculate cd = c * d
      const cdValue = Number.parseFloat(glassPrice as string) * heightValue;
      console.log("cd value (glass price * height):", cdValue);

      // Fetch Location multiplier (e)
      let locationMultiplier = 1; // Default value

      if (stateToUse) {
        const locationRow = locationData.find(
          (row) => row.Location === stateToUse
        );

        if (locationRow && locationRow["Parameter (in %)"] !== undefined) {
          // Use the parameter directly, not as a percentage adjustment
          locationMultiplier = locationRow["Parameter (in %)"] as number;
          console.log("Location multiplier for state:", locationMultiplier);
        } else {
          console.log(
            "Location parameter not found for state, using default multiplier"
          );
        }
      }

      // Calculate f = cd * e
      const fValue = cdValue * locationMultiplier;
      console.log("f value (cd * location multiplier):", fValue);

      // Fetch User Discount multiplier (h)
      const userTypeRow = userTypeData.find(
        (row) => row["User Type"] === productData.userType
      );
      if (!userTypeRow) {
        console.error("User type row not found for:", productData.userType);
        return "❌ Error: User type option not found";
      }

      // Note: Adding the parameter (not subtracting as before)
      const userDiscount =
        1 + (userTypeRow["Parameter (in %)"] as number) / 100;
      console.log("User discount:", userDiscount);

      // Calculate Total Price
      // (base_price + handrail_price + cd_value + f_value) * user_discount
      const totalPrice =
        (Number.parseFloat(basePrice as string) +
          Number.parseFloat(handrailPrice as string) +
          cdValue +
          fValue) *
        userDiscount;

      console.log("Total price calculation components:", {
        basePrice: Number.parseFloat(basePrice as string),
        handrailPrice: Number.parseFloat(handrailPrice as string),
        cdValue,
        fValue,
        userDiscount,
      });

      console.log("Final price per ft:", totalPrice);

      // Timeline is fetched but not used in calculation
      const timelineRow = timelineData.find(
        (row) => row.Timeline === productData.timeline
      );
      if (timelineRow) {
        console.log(
          "Timeline value (not used in calculation):",
          timelineRow["Parameter (in %)"]
        );
      }

      return Number.parseFloat(totalPrice.toFixed(2));
    } catch (error: any) {
      console.error("Error in calculatePerFtPrice:", error);
      return `❌ Error: ${error.message}`;
    }
  };

  // Handle Calculate button click
  const handleCalculate = async () => {
    // Validate required fields
    if (
      !productData.base ||
      !productData.handrail ||
      !productData.glass ||
      !productData.location || // This is now the pincode
      !productData.userType ||
      !productData.timeline
    ) {
      setMessage("❌ Please fill in all required fields");
      return;
    }

    // Validate pincode format
    if (!/^\d{6}$/.test(productData.location)) {
      setMessage("❌ Please enter a valid 6-digit pincode");
      return;
    }

    try {
      setIsLoading(true);
      setMessage("Fetching location data...");

      // Convert pincode to state
      const state = await getPincodeState(productData.location);
      console.log("State from pincode:", state);

      if (!state) {
        setMessage(
          "❌ Could not find location for this pincode. Please try another."
        );
        setIsLoading(false);
        return;
      }

      // Find the location parameter for this state
      const locationRow = locationData.find((row) => row.Location === state);
      console.log("Location data for state:", locationRow);

      if (!locationRow) {
        // If exact state match is not found, use default parameter
        console.log("State not found in location data, using default");

        // Calculate price using default location parameter
        const price = calculatePerFtPrice();
        console.log("Calculated price with default parameter:", price);

        if (typeof price === "number") {
          setPricePerFt(price);
          setMessage(
            `✅ Product options saved successfully! (Using default location parameter)`
          );
          // Move to user details page
          setCurrentPage("user");
        } else {
          setMessage(price);
        }
      } else {
        // Calculate price using the state parameter
        const price = calculatePerFtPrice(state);
        console.log("Calculated price with state parameter:", price);

        if (typeof price === "number") {
          setPricePerFt(price);
          setMessage(`✅ Product options saved successfully!`);
          // Move to user details page
          setCurrentPage("user");
        } else {
          setMessage(price);
        }
      }
    } catch (error: any) {
      console.error("Error in handleCalculate:", error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (userData: UserData) => {
    if (!pricePerFt) {
      setMessage("❌ Error: Price calculation failed");
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage("Submitting your quotation...");

      // Calculate total price (not shown to user)
      const totalPrice = pricePerFt * userData.size;

      // Combine product and user data
      const formData = {
        ...productData,
        ...userData,
        totalPrice: Number.parseFloat(totalPrice.toFixed(2)),
      };

      // Submit to Google Apps Script with timeout
      await axios.post(
        "https://backendimperio.onrender.com/submit-form",
        formData,
        {
          timeout: 100000, // 10 second timeout
        }
      );

      setMessage(
        "✅ Your quotation has been submitted successfully! You will receive the total price on WhatsApp."
      );
      setIsSuccess(true);

      // Store user data for potential reuse
      setUserData(userData);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setMessage(`❌ Error submitting form: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewQuote = () => {
    // Reset all data and go back to first page
    if (initialDataLoaded && baseData.length > 0) {
      // Get the first finish option
      const firstFinish = Object.keys(baseData[0]).filter(
        (key) => key !== "Base"
      )[0];

      // Reset with default values from the data
      setProductData({
        base: baseData[0].Base,
        handrail:
          handrailData.length > 0 ? handrailData[0]["Handrail Type"] : "",
        finish: firstFinish,
        glass: "",
        height: 3.5,
        location: "",
        city: "",
        state: "",
        userType: "",
        timeline: "",
      });
    } else {
      // Fallback to empty defaults if data isn't loaded
      setProductData({ ...defaultProductData });
    }

    setPricePerFt(null);
    setMessage("");
    setIsSuccess(false);
    setCurrentPage("product");

    // Force a re-render by setting loading briefly
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  // Render loading state
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              animation: "spin 2s linear infinite",
              margin: "0 auto",
            }}
          ></div>
          <p style={{ marginTop: "20px", fontSize: "18px" }}>
            Loading product data...
          </p>
        </div>
      </div>
    );
  }

  // Render product selection page
  if (currentPage === "product") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "28px",
          }}
        >
          Product Selection
        </h1>

        <div
          style={{
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <ProductSelection
            productData={productData}
            setProductData={setProductData}
            baseData={baseData}
            handrailData={handrailData}
            glassData={convertToGlassData(glassData)}
            locationData={convertToLocationData(locationData)}
            timelineData={convertToTimelineData(timelineData)}
            userTypeData={convertToUserTypeData(userTypeData)}
            heightOptions={heightOptions}
          />

          <button
            onClick={handleCalculate}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "500",
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            Continue
          </button>

          {message && (
            <div
              style={{
                marginTop: "15px",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: message.startsWith("✅")
                  ? "#e6f7e6"
                  : "#ffebeb",
                color: message.startsWith("✅") ? "#2e7d32" : "#d32f2f",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Render user details page
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Complete Your Quotation
        </h1>

        {!isSuccess ? (
          <UserForm
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            onBack={() => {
              setCurrentPage("product");
              setMessage("");
            }}
          />
        ) : (
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "#e6f7e6",
                color: "#2e7d32",
                padding: "15px",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            >
              {message}
            </div>
            <button
              onClick={handleNewQuote}
              style={{
                padding: "12px 24px",
                backgroundColor: "#ffc107",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Get Another Quote
            </button>
          </div>
        )}

        {/* {!isSuccess && message && (
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: message.startsWith("✅") ? "#e6f7e6" : "#ffebeb",
              color: message.startsWith("✅") ? "#2e7d32" : "#d32f2f",
            }}
          >
            {message}
          </div>
        )} */}
      </div>
    </div>
  );
}

export default App;
