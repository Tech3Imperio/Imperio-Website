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

function App() {
  // State for page control
  const [currentPage, setCurrentPage] = useState<"product" | "user">("product");

  // Product selection state
  const [productData, setProductData] = useState<ProductData>({
    base: "",
    handrail: "",
    finish: "",
    glass: "",
    height: 2.5,
    location: "",
    userType: "",
    timeline: "",
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

        // Set default values
        if (baseResponse.data.length > 0 && handrailResponse.data.length > 0) {
          // Get the first finish option
          const firstFinish = Object.keys(baseResponse.data[0]).filter(
            (key) => key !== "Base"
          )[0];

          setProductData((prev) => ({
            ...prev,
            base: baseResponse.data[0].Base as string,
            handrail: handrailResponse.data[0]["Handrail Type"] as string,
            finish: firstFinish,
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
  const calculatePerFtPrice = (): number | string => {
    try {
      const baseRow = baseData.find((row) => row.Base === productData.base);
      const basePrice = baseRow ? baseRow[productData.finish] : 0;

      const handrailRow = handrailData.find(
        (row) => row["Handrail Type"] === productData.handrail
      );
      const handrailPrice = handrailRow ? handrailRow[productData.finish] : 0;

      const glassRow = glassData.find(
        (row) => row["Glass Thickness"] === productData.glass
      );
      const glassPrice = glassRow ? glassRow.Price : 0;

      const locationRow = locationData.find(
        (row) => row.Location === productData.location
      );
      const locationMultiplier = locationRow
        ? 1 + (locationRow["Parameter (in %)"] as number) / 100
        : 1;

      const timelineRow = timelineData.find(
        (row) => row.Timeline === productData.timeline
      );
      const timelineMultiplier = timelineRow
        ? 1 + (timelineRow["Parameter (in %)"] as number) / 100
        : 1;

      const userTypeRow = userTypeData.find(
        (row) => row["User Type"] === productData.userType
      );
      const userDiscount = userTypeRow
        ? 1 - (userTypeRow["Parameter (in %)"] as number) / 100
        : 1;

      const totalGlassPrice =
        Number.parseFloat(glassPrice as string) *
        Number.parseFloat(productData.height.toString());
      const baseTotal =
        Number.parseFloat(basePrice as string) +
        Number.parseFloat(handrailPrice as string) +
        totalGlassPrice;
      const perFtPrice =
        baseTotal * locationMultiplier * userDiscount * timelineMultiplier;

      return Number.parseFloat(perFtPrice.toFixed(2));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return `❌ Error: ${error.message}`;
    }
  };

  // Handle Calculate button click
  const handleCalculate = () => {
    // Validate required fields
    if (
      !productData.base ||
      !productData.handrail ||
      !productData.glass ||
      !productData.location ||
      !productData.userType ||
      !productData.timeline
    ) {
      setMessage("❌ Please fill in all required fields");
      return;
    }

    const price = calculatePerFtPrice();
    if (typeof price === "number") {
      setPricePerFt(price);
      setMessage(`✅ Product options saved successfully!`);

      // Move to user details page
      setCurrentPage("user");
    } else {
      setMessage(price);
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

      // Submit to Google Apps Script
      await axios.post(
        "https://backendimperio.onrender.com/submit-form",
        formData
      );

      setMessage(
        "✅ Your quotation has been submitted successfully! You will receive the total price on WhatsApp."
      );
      setIsSuccess(true);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setMessage(`❌ Error submitting form: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewQuote = () => {
    // Reset all data and go back to first page
    setProductData({
      base: "",
      handrail: "",
      finish: "",
      glass: "",
      height: 2.5,
      location: "",
      userType: "",
      timeline: "",
    });
    setUserData({
      name: "",
      phone: "",
      email: "",
      size: 0,
    });
    setPricePerFt(null);
    setMessage("");
    setIsSuccess(false);
    setCurrentPage("product");
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
            Calculate & Continue
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

        {!isSuccess && message && (
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
        )}
      </div>
    </div>
  );
}

export default App;
