/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import ProductSelection from "../../components/Product_Selection/product-selection";
import UserForm from "../../components/User-Form/user-form";
import QuotationViewer from "../../components/Quotation/quotation-viewer";

// Google Apps Script Web App URLs
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

const CACHE_DURATION = 5 * 60 * 1000;
const cache = new Map();

const getCachedData = (key: string) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key: string, data: any) => {
  cache.set(key, { data, timestamp: Date.now() });
};

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

const fetchWithRetry = async (
  url: string,
  retries = 2,
  timeout = 10000
): Promise<any> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await axios.get(url, {
      signal: controller.signal,
      timeout: timeout,
    });
    clearTimeout(timeoutId);
    return response.data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (retries > 0 && !controller.signal.aborted) {
      console.warn(`Retrying API call to ${url}, attempts left: ${retries}`);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second before retry
      return fetchWithRetry(url, retries - 1, timeout);
    }
    throw error;
  }
};

// Optimized data fetching with caching
const fetchSheetData = async (url: string, cacheKey: string) => {
  const cached = getCachedData(cacheKey);
  if (cached) {
    console.log(`Using cached data for ${cacheKey}`);
    return cached;
  }

  try {
    const data = await fetchWithRetry(url);
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    console.error(`Error fetching ${cacheKey}:`, error);
    // Return empty array as fallback
    return [];
  }
};

// Conversion functions (keeping your existing ones but optimized)
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

// Optimized pincode API with caching
async function getPincodeState(pincode: string): Promise<string | null> {
  const cacheKey = `pincode_${pincode}`;
  const cached = getCachedData(cacheKey);
  if (cached) {
    return cached;
  }

  try {
    console.log("Fetching state for pincode:", pincode);
    const response = await axios.get(
      `https://api.postalpincode.in/pincode/${pincode}`,
      { timeout: 5000 }
    );

    if (
      response.data &&
      Array.isArray(response.data) &&
      response.data.length > 0 &&
      response.data[0].Status === "Success" &&
      response.data[0].PostOffice &&
      response.data[0].PostOffice.length > 0
    ) {
      const state = response.data[0].PostOffice[0].State;
      setCachedData(cacheKey, state);
      return state;
    }

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
    installation: "No",
    projectName: "",
  };

  // State
  const [productData, setProductData] = useState<ProductData>({
    ...defaultProductData,
  });
  const [, setUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    size: 0,
  });
  const [quotationData, setQuotationData] = useState<QuotationData | null>(
    null
  );

  // Data from Google Sheets
  const [baseData, setBaseData] = useState<BaseDataItem[]>([]);
  const [handrailData, setHandrailData] = useState<HandrailDataItem[]>([]);
  const [glassData, setGlassData] = useState<SheetRow[]>([]);
  const [locationData, setLocationData] = useState<SheetRow[]>([]);
  const [timelineData, setTimelineData] = useState<SheetRow[]>([]);
  const [userTypeData, setUserTypeData] = useState<SheetRow[]>([]);

  // App state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [loadingMessage, setLoadingMessage] =
    useState<string>("Initializing...");
  const [message, setMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [initialDataLoaded, setInitialDataLoaded] = useState<boolean>(false);

  const heightOptions: number[] = [2.5, 3, 3.25, 3.5, 4];

  // Memoized converted data to prevent unnecessary recalculations
  const convertedGlassData = useMemo(
    () => convertToGlassData(glassData),
    [glassData]
  );
  const convertedLocationData = useMemo(
    () => convertToLocationData(locationData),
    [locationData]
  );
  const convertedTimelineData = useMemo(
    () => convertToTimelineData(timelineData),
    [timelineData]
  );
  const convertedUserTypeData = useMemo(
    () => convertToUserTypeData(userTypeData),
    [userTypeData]
  );

  // Optimized data fetching with progress tracking
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setLoadingProgress(0);
        setLoadingMessage("Loading product data...");

        const urls = [
          { url: BASE_SHEET_URL, key: "base", name: "Base data" },
          { url: HANDRAIL_SHEET_URL, key: "handrail", name: "Handrail data" },
          { url: GLASS_THICKNESS_URL, key: "glass", name: "Glass data" },
          { url: LOCATION_SHEET_URL, key: "location", name: "Location data" },
          { url: TIMELINE_SHEET_URL, key: "timeline", name: "Timeline data" },
          { url: USER_TYPE_SHEET_URL, key: "userType", name: "User type data" },
        ];

        const results = await Promise.allSettled(
          urls.map(async ({ url, key, name }, index) => {
            setLoadingMessage(`Loading ${name}...`);
            setLoadingProgress((index / urls.length) * 100);

            const data = await fetchSheetData(url, key);

            // Update progress
            setLoadingProgress(((index + 1) / urls.length) * 100);

            return { key, data };
          })
        );

        // Process results
        results.forEach((result, index) => {
          if (result.status === "fulfilled") {
            const { key, data } = result.value;

            switch (key) {
              case "base": {
                const typedBaseData: BaseDataItem[] = data.map((row: any) => ({
                  Base: row.Base as string,
                  ...row,
                }));
                setBaseData(typedBaseData);
                break;
              }
              case "handrail": {
                const typedHandrailData: HandrailDataItem[] = data.map(
                  (row: any) => ({
                    "Handrail Type": row["Handrail Type"] as string,
                    ...row,
                  })
                );
                setHandrailData(typedHandrailData);
                break;
              }
              case "glass": {
                setGlassData(data);
                break;
              }
              case "location": {
                setLocationData(data);
                break;
              }
              case "timeline": {
                setTimelineData(data);
                break;
              }
              case "userType": {
                setUserTypeData(data);
                break;
              }
            }
          } else {
            console.error(`Failed to load ${urls[index].name}:`, result.reason);
          }
        });

        setLoadingMessage("Setting up defaults...");

        // Set default values only after data is loaded
        const baseResult = results[0];
        const handrailResult = results[1];
        const glassResult = results[2];
        const timelineResult = results[4];
        const userTypeResult = results[5];

        if (
          baseResult.status === "fulfilled" &&
          handrailResult.status === "fulfilled" &&
          baseResult.value.data.length > 0 &&
          handrailResult.value.data.length > 0
        ) {
          const firstFinish = Object.keys(baseResult.value.data[0]).filter(
            (key) => key !== "Base"
          )[0];

          const firstGlass =
            glassResult.status === "fulfilled"
              ? (glassResult.value.data[0]?.["Glass Thickness"] as string)
              : "";
          const firstTimeline =
            timelineResult.status === "fulfilled"
              ? (timelineResult.value.data[0]?.Timeline as string)
              : "";
          const firstUserType =
            userTypeResult.status === "fulfilled"
              ? (userTypeResult.value.data[0]?.["User Type"] as string)
              : "";

          setProductData((prev) => ({
            ...prev,
            base: baseResult.value.data[0].Base as string,
            handrail: handrailResult.value.data[0]["Handrail Type"] as string,
            finish: firstFinish,
            glass: firstGlass || "",
            timeline: firstTimeline || "",
            userType: firstUserType || "",
          }));
        }

        setInitialDataLoaded(true);
        setLoadingMessage("Ready!");
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("❌ Error loading product data. Please try again.");
      } finally {
        setIsLoading(false);
        setLoadingProgress(100);
      }
    };

    fetchData();
  }, []); // Remove userData dependency to prevent unnecessary re-fetches

  // Memoized handlers to prevent unnecessary re-renders
  const handleCalculate = useCallback(async () => {
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
  }, [productData]);

  // Optimized quotation fetching
  const fetchQuotationByPhone = useCallback(
    async (phoneNumber: string): Promise<QuotationData | null> => {
      try {
        console.log("Fetching quotation for phone number:", phoneNumber);

        const response = await fetchWithRetry(GET_QUOTATION_URL);

        if (response && Array.isArray(response)) {
          const matchingRecords = response.filter((record: any) => {
            const recordPhone = String(
              record["Phone Number"] || record.phone || record.Phone || ""
            ).replace(/\D/g, "");
            const targetPhone = String(phoneNumber).replace(/\D/g, "");
            return recordPhone === targetPhone;
          });

          if (matchingRecords.length === 0) {
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
                latestRecord["Phone Number"] ||
                  latestRecord.phone ||
                  phoneNumber
              ),
              email:
                latestRecord["Email id"] || latestRecord.email || "Unknown",
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
    },
    []
  );

  // Optimized image fetching
  const fetchProductImages = useCallback(async (recordData?: any) => {
    try {
      const baseToUse = recordData?.Base || productData.base;
      const handrailToUse = recordData?.Handrail || productData.handrail;
      const finishToUse = recordData?.Finish || productData.finish;
      const glassToUse = recordData?.Glass || productData.glass;

      const baseImage = getBaseImage(baseToUse, finishToUse);
      const handrailImage = getHandrailImage(handrailToUse, finishToUse);
      const glassTypeImage = getGlassImage(glassToUse);

      let finalImage = "/placeholder.svg?height=400&width=600";
      if (baseToUse && handrailToUse) {
        finalImage = `/images/Renders/${baseToUse}+${handrailToUse}.jpg`;
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
  }, []);

  // Image helper functions (keeping your existing ones)
  const getBaseImage = (base: string, finish: string): string => {
    return base
      ? `/images/bases/${base}/${finish}.jpg`
      : "/placeholder.svg?height=200&width=300";
  };

  const getHandrailImage = (handrail: string, finish?: string): string => {
    const finishToUse = finish || productData.finish;
    return handrail
      ? `/images/handrail/${handrail}/${finishToUse}.jpg`
      : "/placeholder.svg?height=200&width=300";
  };

  const getGlassImage = (glassType: string): string => {
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
    return glassImageMap[glassType] || "/placeholder.svg?height=200&width=300";
  };

  // Optimized form submission
  const handleSubmit = useCallback(
    async (userFormData: UserData) => {
      try {
        setIsSubmitting(true);
        setMessage("Submitting your quotation...");

        const formData = {
          ...productData,
          ...userFormData,
        };

        const response = await axios.post(
          "https://backendimperio-5uku.onrender.com/submit-form",
          formData,
          {
            timeout: 100000,
          }
        );

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

              const randomNum = Math.floor(Math.random() * 100000);
              return `25${String(randomNum).padStart(5, "0")}`;
            };
            console.log(extractOrderId(responseData));
            setUserData(userFormData);
            setMessage("✅ Your quotation has been submitted successfully!");
            setIsSuccess(true);
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
    },
    [productData]
  );

  const handleShowQuotation = useCallback(async () => {
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
  }, [fetchQuotationByPhone]);

  const handleNewQuote = useCallback(async () => {
    try {
      const [glassResponse, timelineResponse, userTypeResponse] =
        await Promise.all([
          fetchSheetData(GLASS_THICKNESS_URL, "glass"),
          fetchSheetData(TIMELINE_SHEET_URL, "timeline"),
          fetchSheetData(USER_TYPE_SHEET_URL, "userType"),
        ]);

      if (initialDataLoaded && baseData.length > 0) {
        const firstFinish = Object.keys(baseData[0]).filter(
          (key) => key !== "Base"
        )[0];
        const firstGlass = glassResponse[0]?.["Glass Thickness"] as string;
        const firstTimeline = timelineResponse[0]?.Timeline as string;
        const firstUserType = userTypeResponse[0]?.["User Type"] as string;

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
      setCurrentPage("product");

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
    } catch (error) {
      console.error("Error creating new quote:", error);
    }
  }, [initialDataLoaded, baseData]);

  // Optimized loading component
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div>

          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              {Math.round(loadingProgress)}% Complete
            </p>
          </div>

          <p className="text-lg font-medium text-gray-800 mb-2">
            {loadingMessage}
          </p>
          <p className="text-sm text-gray-500">
            {loadingProgress < 50
              ? "Loading product configurations..."
              : loadingProgress < 80
              ? "Almost ready..."
              : "Finalizing setup..."}
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
      <div className="flex flex-col p-5 bg-gray-50 min-h-screen">
        <h1 className="text-center mb-5 text-3xl font-bold text-gray-800">
          Product Selection
        </h1>

        <div className="p-5 bg-white rounded-lg shadow-lg max-w-6xl mx-auto w-full">
          <div className="flex justify-end items-center mb-4">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">
              Beta Version
            </span>
          </div>

          <ProductSelection
            productData={productData}
            setProductData={setProductData}
            baseData={baseData}
            handrailData={handrailData}
            glassData={convertedGlassData}
            locationData={convertedLocationData}
            timelineData={convertedTimelineData}
            userTypeData={convertedUserTypeData}
            heightOptions={heightOptions}
          />

          <button
            onClick={handleCalculate}
            disabled={isLoading}
            className="w-full p-3 bg-blue-500 text-white border-none rounded-md cursor-pointer font-medium mt-5 text-base hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "Continue"}
          </button>

          <div className="text-center my-5">
            <div className="text-sm text-gray-600 mb-2">
              Already have a quotation?
            </div>
            <button
              onClick={handleShowQuotation}
              disabled={isLoading}
              className="px-5 py-2 bg-gray-500 text-white border-none rounded-md cursor-pointer font-medium text-sm hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              View Existing Quotation
            </button>
          </div>

          {message && (
            <div
              className={`mt-4 p-3 rounded-md ${
                message.startsWith("✅")
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-5">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-center mb-5 text-2xl font-bold text-gray-800">
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
          <div className="text-center">
            <div className="bg-green-50 text-green-700 p-4 rounded-md mb-5 border border-green-200">
              {message}
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={handleShowQuotation}
                className="px-6 py-3 bg-green-500 text-white border-none rounded-md cursor-pointer font-medium hover:bg-green-600 transition-colors"
              >
                View My Quotation
              </button>

              <button
                onClick={handleNewQuote}
                className="px-6 py-3 bg-yellow-500 text-white border-none rounded-md cursor-pointer font-medium hover:bg-yellow-600 transition-colors"
              >
                Get Another Quote
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-600">
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
