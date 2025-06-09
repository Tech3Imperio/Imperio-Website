/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import ProductSelection from "../../components/Product_Selection/product-selection";
import UserForm from "../../components/User-Form/user-form";
import QuotationViewer from "../../components/Quotation/quotation-viewer";

// Google Apps Script Web App URLs
// const POST_URL =
//   "https://script.google.com/macros/s/AKfycbym6AMQRI6Xo8Lm9anfhDIJJiFaqwz54xhDb4El-aX_mDBshgWbb-rTVBNklWSde6xU/exec";
const GET_QUOTATION_URL =
  "https://script.google.com/macros/s/AKfycbyBueVSS9dggQIBBTm5TecMHoyviL5lLXHoYYUy55OavWIbfehVo5HzDF2IwiKkqzMx/exec";

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

// Placeholder URLs for image APIs - replace with actual Google Sheets APIs
// const GLASS_TYPE_IMAGES_URL = "YOUR_GLASS_TYPE_IMAGES_API_URL";
// const FINAL_IMAGES_URL = "YOUR_FINAL_IMAGES_API_URL";

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
  installation: string;
  projectName: string;
}

interface UserData {
  name: string;
  phone: string;
  email: string;
  size: number;
}

interface QuotationData {
  orderId: string;
  timestamp: string;
  customerDetails: {
    name: string;
    phone: string;
    email: string;
    pincode: string;
    projectName: string;
  };
  productSelection: {
    base: string;
    handrail: string;
    finish: string;
    glassType: string;
    height: number;
    size: number;
  };
  pricing: {
    diy: number;
    standard: number;
    premium: number;
  };
  images: {
    baseImage: string;
    handrailImage: string;
    glassTypeImage: string;
    finalImage: string;
  };
  validTill: string;
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
  const [currentPage, setCurrentPage] = useState<
    "product" | "user" | "quotation"
  >("product");

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
    installation: "No", // Default to "No" as string
    projectName: "",
  };

  // Product selection state
  const [productData, setProductData] = useState<ProductData>({
    ...defaultProductData,
  });

  // User form state
  const [userData, setUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    size: 0,
  });

  // Quotation state
  const [quotationData, setQuotationData] = useState<QuotationData | null>(
    null
  );
  // Removed unused submissionResponse state

  // Data from Google Sheets
  const [baseData, setBaseData] = useState<BaseDataItem[]>([]);
  const [handrailData, setHandrailData] = useState<HandrailDataItem[]>([]);
  const [glassData, setGlassData] = useState<SheetRow[]>([]);
  const [locationData, setLocationData] = useState<SheetRow[]>([]);
  const [timelineData, setTimelineData] = useState<SheetRow[]>([]);
  const [userTypeData, setUserTypeData] = useState<SheetRow[]>([]);

  // App state
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
          const typedRow: BaseDataItem = {
            Base: row.Base as string,
            ...row,
          };
          return typedRow;
        });
        const typedHandrailData: HandrailDataItem[] = handrailResponse.data.map(
          (row) => {
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
  }, [userData]);

  // Handle Calculate button click
  const handleCalculate = async () => {
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

    if (!/^\d{6}$/.test(productData.location)) {
      setMessage("❌ Please enter a valid 6-digit pincode");
      return;
    }

    try {
      setIsLoading(true);
      setMessage("Fetching location data...");

      const state = await getPincodeState(productData.location);
      console.log("State from pincode:", state);

      if (!state) {
        setMessage(
          "❌ Could not find location for this pincode. Please try another."
        );
        setIsLoading(false);
        return;
      }

      setProductData((prev) => ({
        ...prev,
        state,
      }));

      setMessage(`✅ Product options saved successfully!`);
      setCurrentPage("user");
    } catch (error: any) {
      console.error("Error in handleCalculate:", error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch quotation data from Google Sheets
  // const fetchQuotationData = async (
  //   timestamp: string,
  //   orderId: string
  // ): Promise<QuotationData | null> => {
  //   try {
  //     const response = await axios.get(GET_QUOTATION_URL);

  //     console.log("Quotation fetch response:", response.data);
  //     console.log("Looking for Order ID:", orderId);

  //     if (
  //       response.data &&
  //       response.status === 200 &&
  //       Array.isArray(response.data)
  //     ) {
  //       const matchingRecord = response.data.find((record: any) => {
  //         const recordOrderId = String(
  //           record["Order ID"] || record.orderId || record.order_id || ""
  //         );
  //         const targetOrderId = String(orderId);
  //         console.log(
  //           `Comparing record Order ID: ${recordOrderId} with target: ${targetOrderId}`
  //         );
  //         return recordOrderId === targetOrderId;
  //       });

  //       if (!matchingRecord) {
  //         console.log("No matching record found for Order ID:", orderId);
  //         console.log(
  //           "Available Order IDs:",
  //           response.data.map((r: any) => r["Order ID"])
  //         );
  //         return null;
  //       }

  //       console.log("Found matching record:", matchingRecord);

  //       const images = await fetchProductImages(matchingRecord);

  //       const extractPrice = (priceStr: string | number): number => {
  //         if (typeof priceStr === "number")
  //           return Math.round(priceStr * 100) / 100;
  //         if (typeof priceStr === "string") {
  //           const cleanPrice = priceStr.replace(/[₹,]/g, "").trim();
  //           const parsed = Number.parseFloat(cleanPrice);
  //           return isNaN(parsed) ? 0 : Math.round(parsed * 100) / 100;
  //         }
  //         return 0;
  //       };

  //       return {
  //         orderId: String(matchingRecord["Order ID"]),
  //         timestamp:
  //           matchingRecord.Timestamp ||
  //           matchingRecord.timestamp ||
  //           matchingRecord.Date ||
  //           timestamp,
  //         customerDetails: {
  //           name: matchingRecord.Name || userData.name,
  //           phone: String(matchingRecord["Phone Number"] || userData.phone),
  //           email: matchingRecord["Email id"] || userData.email,
  //           pincode: String(matchingRecord.Location || productData.location),
  //           projectName:
  //             matchingRecord["Project Name"] || productData.projectName,
  //         },
  //         productSelection: {
  //           base: matchingRecord.Base || productData.base,
  //           handrail: matchingRecord.Handrail || productData.handrail,
  //           finish: matchingRecord.Finish || productData.finish,
  //           glassType: matchingRecord.Glass || productData.glass,
  //           height: matchingRecord.Height || productData.height,
  //           size: matchingRecord.Quantity || userData.size,
  //         },
  //         pricing: {
  //           diy: extractPrice(matchingRecord["DIY Price"]),
  //           standard: extractPrice(matchingRecord.Standard),
  //           premium: extractPrice(matchingRecord.Premium),
  //         },
  //         images,
  //         validTill:
  //           matchingRecord["Valid Till"] ||
  //           new Date(
  //             Date.now() + 15 * 24 * 60 * 60 * 1000
  //           ).toLocaleDateString(),
  //       };
  //     }
  //     return null;
  //   } catch (error) {
  //     console.error("Error fetching quotation data:", error);
  //     return null;
  //   }
  // };

  // Fetch quotation data by phone number
  const fetchQuotationByPhone = async (
    phoneNumber: string
  ): Promise<QuotationData | null> => {
    try {
      console.log("Fetching quotation for phone number:", phoneNumber);

      const response = await axios.get(GET_QUOTATION_URL);

      console.log("Quotation fetch response:", response.data);

      if (
        response.data &&
        response.status === 200 &&
        Array.isArray(response.data)
      ) {
        const matchingRecords = response.data.filter((record: any) => {
          const recordPhone = String(
            record["Phone Number"] || record.phone || record.Phone || ""
          ).replace(/\D/g, "");
          const targetPhone = String(phoneNumber).replace(/\D/g, "");
          console.log(
            `Comparing record phone: ${recordPhone} with target: ${targetPhone}`
          );
          return recordPhone === targetPhone;
        });

        if (matchingRecords.length === 0) {
          console.log(
            "No matching records found for phone number:",
            phoneNumber
          );
          console.log(
            "Available phone numbers:",
            response.data.map((r: any) => r["Phone Number"])
          );
          return null;
        }

        const latestRecord = matchingRecords.sort((a: any, b: any) => {
          const dateA = new Date(
            a.Timestamp || a.timestamp || a.Date || a.date || 0
          );
          const dateB = new Date(
            b.Timestamp || b.timestamp || b.Date || b.date || 0
          );
          return dateB.getTime() - dateA.getTime();
        })[0];

        console.log("Found latest record:", latestRecord);

        const images = await fetchProductImages(latestRecord);

        const extractPrice = (priceStr: string | number): number => {
          if (typeof priceStr === "number")
            return Math.round(priceStr * 100) / 100;
          if (typeof priceStr === "string") {
            const cleanPrice = priceStr.replace(/[₹,]/g, "").trim();
            const parsed = Number.parseFloat(cleanPrice);
            return isNaN(parsed) ? 0 : Math.round(parsed * 100) / 100;
          }
          return 0;
        };

        return {
          orderId: String(
            latestRecord["Order ID"] ||
              latestRecord.orderId ||
              `PHONE_${Date.now()}`
          ),
          timestamp:
            latestRecord.Timestamp ||
            latestRecord.timestamp ||
            latestRecord.Date ||
            new Date().toISOString(),
          customerDetails: {
            name: latestRecord.Name || latestRecord.name || "Unknown",
            phone: String(
              latestRecord["Phone Number"] || latestRecord.phone || phoneNumber
            ),
            email: latestRecord["Email id"] || latestRecord.email || "Unknown",
            pincode: String(
              latestRecord.Location || latestRecord.location || "Unknown"
            ),
            projectName:
              latestRecord["Project Name"] ||
              latestRecord.projectName ||
              "Unknown",
          },
          productSelection: {
            base: latestRecord.Base || latestRecord.base || "Unknown",
            handrail:
              latestRecord.Handrail || latestRecord.handrail || "Unknown",
            finish: latestRecord.Finish || latestRecord.finish || "Unknown",
            glassType: latestRecord.Glass || latestRecord.glass || "Unknown",
            height: Number(latestRecord.Height || latestRecord.height) || 3.5,
            size:
              Number(
                latestRecord.Quantity ||
                  latestRecord.quantity ||
                  latestRecord.size
              ) || 0,
          },
          pricing: {
            diy: extractPrice(
              latestRecord["DIY Price"] || latestRecord.diyPrice || 0
            ),
            standard: extractPrice(
              latestRecord.Standard || latestRecord.standard || 0
            ),
            premium: extractPrice(
              latestRecord.Premium || latestRecord.premium || 0
            ),
          },
          images,
          validTill:
            latestRecord["Valid Till"] ||
            latestRecord.validTill ||
            new Date(
              Date.now() + 15 * 24 * 60 * 60 * 1000
            ).toLocaleDateString(),
        };
      }
      return null;
    } catch (error) {
      console.error("Error fetching quotation by phone:", error);
      return null;
    }
  };

  // Convert Google Drive link to direct image URL
  // const convertGoogleDriveLink = (url: string): string => {
  //   try {
  //     // Extract the file ID from various Google Drive URL formats
  //     const match = url.match(
  //       /(?:https?:\/\/)?(?:www\.)?(?:drive\.google\.com\/(?:file\/d\/|open\?id=)|docs\.google\.com\/file\/d\/)([a-zA-Z0-9_-]+)/
  //     );
  //     if (match && match[1]) {
  //       const fileId = match[1];
  //       // Return direct image URL
  //       return `https://drive.google.com/uc?export=view&id=${fileId}`;
  //     }
  //     console.warn("Invalid Google Drive URL:", url);
  //     return "/placeholder.svg?height=400&width=600";
  //   } catch (error) {
  //     console.error("Error converting Google Drive link:", error);
  //     return "/placeholder.svg?height=400&width=600";
  //   }
  // };

  // Fetch product images based on selections
  const fetchProductImages = async (recordData?: any) => {
    try {
      const baseToUse = recordData?.Base || productData.base;
      const handrailToUse = recordData?.Handrail || productData.handrail;
      const finishToUse = recordData?.Finish || productData.finish;
      const glassToUse = recordData?.Glass || productData.glass;

      const baseImage = getBaseImage(baseToUse, finishToUse);
      const handrailImage = getHandrailImage(handrailToUse, finishToUse);
      const glassTypeImage = getGlassImage(glassToUse);

      // Handle final image from Google Sheet
      let finalImage = "/placeholder.svg?height=400&width=600";
      if (baseToUse && handrailToUse) {
        finalImage = `/images/Renders/${baseToUse}+${handrailToUse}.jpg`;
        console.log("Using final image from Renders folder:", finalImage);
      }

      return {
        baseImage,
        handrailImage,
        glassTypeImage,
        finalImage,
      };
    } catch (error) {
      console.error("Error fetching product images:", error);
      return {
        baseImage: "/placeholder.svg?height=200&width=300",
        handrailImage: "/placeholder.svg?height=200&width=300",
        glassTypeImage: "/placeholder.svg?height=200&width=300",
        finalImage: "/placeholder.svg?height=400&width=600",
      };
    }
  };

  // Get base image based on selection
  const getBaseImage = (base: string, finish: string): string => {
    return base
      ? `/images/bases/${base}/${finish}.jpg`
      : "/placeholder.svg?height=200&width=300";
  };

  // Get handrail image based on selection
  const getHandrailImage = (handrail: string, finish?: string): string => {
    const finishToUse = finish || productData.finish;
    return handrail
      ? `/images/handrail/${handrail}/${finishToUse}.jpg`
      : "/placeholder.svg?height=200&width=300";
  };

  // Get glass type image based on selection
  const getGlassImage = (glassType: string): string => {
    // Map glass types to their corresponding image files in /glassInfo/
    const glassImageMap: { [key: string]: string } = {
      "12mm Clear Toughened Glass":
        "/images/glasses/12mm Clear Toughened Glass.png",
      "6+6 PVB Laminated Toughened glass":
        "/images/glasses/6+6 PVB Laminated Toughened glass.png",
      "8+8 PVB Laminated Toughened glass":
        "/images/glasses/8+8 PVB Laminated Toughened glass.png",
      "6+6 SGP Laminated Toughened glass":
        "/images/glasses/6+6 SGP Laminated Toughened glass.png",
      "8+8 SGP Laminated Toughened glass":
        "/images/glasses/8+8 SGP Laminated Toughened glass.png",
    };

    // Return the mapped image or fallback to placeholder
    return glassImageMap[glassType] || "/placeholder.svg?height=200&width=300";
  };

  // const getFinalImage = (base: string, handrail: string): string => {
  //   return base && handrail
  //     ? `/images/final/${base}+${handrail}.jpg`
  //     : "/placeholder.svg?height=200&width=300";
  // };

  // Handle form submission
  const handleSubmit = async (userFormData: UserData) => {
    try {
      setIsSubmitting(true);
      setMessage("Submitting your quotation...");

      const formData = {
        ...productData,
        ...userFormData,
      };

      console.log("Submitting form data:", formData);

      const response = await axios.post(
        "https://backendimperio-5uku.onrender.com/submit-form",
        formData,
        {
          timeout: 100000,
        }
      );

      console.log("Form submission response:", response.data);
      console.log(
        "Full response data structure:",
        JSON.stringify(response.data, null, 2)
      );
      console.log("Available keys in response:", Object.keys(response.data));

      if (response.status === 200 && response.data) {
        const responseData = response.data;
        const isSuccess = responseData.success !== false;

        if (isSuccess) {
          const extractOrderId = (data: any): string => {
            const possibleOrderIds = [
              data["Order ID"],
              data.orderId,
              data.order_id,
              data.orderNumber,
              data.order_number,
              data.id,
            ];

            for (const id of possibleOrderIds) {
              if (id !== undefined && id !== null) {
                const idStr = String(id).trim();
                if (idStr && !isNaN(Number(idStr))) {
                  return idStr;
                }
              }
            }

            // const timestamp = Date.now();
            const randomNum = Math.floor(Math.random() * 100000);
            return `25${String(randomNum).padStart(5, "0")}`;
          };

          const submissionData = {
            success: true,
            orderId: extractOrderId(responseData),
            timestamp:
              responseData.Timestamp ||
              responseData.timestamp ||
              responseData.created_at ||
              responseData.createdAt ||
              responseData.Date ||
              responseData.date ||
              new Date().toISOString(),
            message: responseData.message || "Quotation submitted successfully",
            ...responseData,
          };

          // setSubmissionResponse(submissionData); // Removed unused state update
          setUserData(userFormData);
          setMessage("✅ Your quotation has been submitted successfully!");
          setIsSuccess(true);

          console.log("Submission successful with data:", submissionData);
          console.log("Extracted Order ID:", submissionData.orderId);
        } else {
          const errorMessage =
            responseData.message || responseData.error || "Submission failed";
          throw new Error(errorMessage);
        }
      } else {
        throw new Error(`Server responded with status ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      console.error("Error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });

      let errorMessage = "Error submitting form";
      if (error.response?.data?.message) {
        errorMessage += `: ${error.response.data.message}`;
      } else if (error.message) {
        errorMessage += `: ${error.message}`;
      }

      setMessage(`❌ ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle show quotation
  const handleShowQuotation = async () => {
    const phoneNumber = prompt(
      "Please enter your phone number to fetch your latest quotation: include +91"
    );

    if (!phoneNumber) {
      setMessage("❌ Phone number is required to fetch quotation");
      return;
    }

    const cleanPhone = phoneNumber.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setMessage("❌ Please enter a valid phone number");
      return;
    }

    try {
      setIsLoading(true);
      setMessage("Fetching your latest quotation...");

      const quotation = await fetchQuotationByPhone(cleanPhone);

      if (quotation) {
        if (
          quotation.orderId &&
          quotation.customerDetails &&
          quotation.productSelection &&
          quotation.pricing
        ) {
          setQuotationData(quotation);
          setCurrentPage("quotation");
          setMessage("");
        } else {
          console.error("Invalid quotation data structure:", quotation);
          throw new Error("Invalid quotation data received");
        }
      } else {
        setMessage(
          "❌ No quotation found for this phone number. Please check the number and try again."
        );
      }
    } catch (error) {
      console.error("Error loading quotation:", error);
      setMessage("❌ Error loading quotation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewQuote = async () => {
    const [glassResponse, timelineResponse, userTypeResponse] =
      await Promise.all([
        axios.get<SheetRow[]>(GLASS_THICKNESS_URL),
        axios.get<SheetRow[]>(TIMELINE_SHEET_URL),
        axios.get<SheetRow[]>(USER_TYPE_SHEET_URL),
      ]);
    if (initialDataLoaded && baseData.length > 0) {
      const firstFinish = Object.keys(baseData[0]).filter(
        (key) => key !== "Base"
      )[0];

      const firstGlass = glassResponse.data[0]?.["Glass Thickness"] as string;
      const firstTimeline = timelineResponse.data[0]?.Timeline as string;
      const firstUserType = userTypeResponse.data[0]?.["User Type"] as string;
      setProductData((prev) => ({
        ...prev,
        finish: firstFinish,
        glass: firstGlass || "",
        timeline: firstTimeline || "",
        userType: firstUserType || "",
        installation: "No",
      }));
    }

    setMessage("");
    setIsSuccess(false);
    setQuotationData(null);
    // setSubmissionResponse(null); // Removed unused state update
    setCurrentPage("product");

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

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
            Loading Products...
          </p>
        </div>
      </div>
    );
  }

  if (currentPage === "quotation" && quotationData && quotationData.orderId) {
    return (
      <QuotationViewer
        quotationData={quotationData}
        onBack={() => setCurrentPage("user")}
        onNewQuote={handleNewQuote}
      />
    );
  }

  if (currentPage === "quotation" && !quotationData) {
    setCurrentPage("user");
    setMessage("❌ Unable to load quotation data. Please try again.");
  }

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

          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <div
              style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}
            >
              Already have a quotation?
            </div>
            <button
              onClick={handleShowQuotation}
              style={{
                padding: "10px 20px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              View Existing Quotation
            </button>
          </div>

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

            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={handleShowQuotation}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                View My Quotation
              </button>

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

            <div style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
              You'll be asked to enter your phone number to fetch your latest
              quotation
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
