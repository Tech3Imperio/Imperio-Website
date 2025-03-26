"use client";

import type React from "react";
import { getLocationFromPincode } from "../../utils/pincode-service";

// Define TypeScript interfaces for props and data structures
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
}

interface TimelineDataItem {
  Timeline: string;
  "Parameter (in %)": number;
}

interface UserTypeDataItem {
  "User Type": string;
  "Parameter (in %)": number;
}

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

interface ProductSelectionProps {
  productData: ProductData;
  setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
  baseData: BaseDataItem[];
  handrailData: HandrailDataItem[];
  glassData: GlassDataItem[];
  locationData: LocationDataItem[];
  timelineData: TimelineDataItem[];
  userTypeData: UserTypeDataItem[];
  heightOptions: number[];
}

const ProductSelection: React.FC<ProductSelectionProps> = ({
  productData,
  setProductData,
  baseData,
  handrailData,
  glassData,
  // locationData,
  timelineData,
  userTypeData,
  heightOptions,
}) => {
  // Get image URL for a specific base and finish
  const getBaseImageUrl = (base: string, finish: string): string | null => {
    return base ? `/images/bases/${base}/${finish}.jpg` : null;
  };

  // Get image URL for a specific handrail and finish
  const getHandrailImageUrl = (
    handrail: string,
    finish: string
  ): string | null => {
    return handrail ? `/images/handrail/${handrail}/${finish}.jpg` : null;
  };

  const heightMap: Record<number, number> = heightOptions.reduce(
    (acc, height, index) => {
      acc[index] = height;
      return acc;
    },
    {} as Record<number, number>
  );

  const getSliderValue = (height: number): string => {
    return (
      Object.keys(heightMap).find(
        (key) => heightMap[Number.parseInt(key)] === height
      ) || "0"
    );
  };

  const finishColors: Record<string, string> = {
    Silver: "#e3e2dd",
    Black: "#000000",
    Champagne: "#958061",
    Wood: "#a15a3e",
  };

  const heightImages: Record<string, string> = {
    "2.5": "/images/GlassHeight/2.5full.png",
    "3": "/images/GlassHeight/3full.png",
    "3.25": "/images/GlassHeight/3.25full.png",
    "3.5 (Standard)": "/images/GlassHeight/3.5full.png",
    "4": "/images/GlassHeight/4full.png",
  };

  return (
    <div className="max-w-[1200px] mx-auto p-5 sm:p-10 font-sans text-gray-800 bg-gray-50 rounded-xl">
      {/* Preload images */}
      {baseData.map((base) =>
        Object.keys(finishColors).map((finish) => (
          <link
            key={`${base.Base}-${finish}`}
            rel="preload"
            href={`/images/bases/${base.Base}/${finish}.jpg`}
            as="image"
          />
        ))
      )}

      {handrailData.map((handrail) =>
        Object.keys(finishColors).map((finish) => (
          <link
            key={`${handrail["Handrail Type"]}-${finish}`}
            rel="preload"
            href={`/images/handrail/${handrail["Handrail Type"]}/${finish}.jpg`}
            as="image"
          />
        ))
      )}

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Design Your Custom Railing
        </h1>
        <p className="text-base text-gray-500 max-w-[600px] mx-auto">
          Customize every aspect of your railing system to match your space
          perfectly
        </p>
      </div>

      {/* Finish Selection */}
      <div className="mb-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4">Select Finish</h2>
        <div className="flex flex-wrap gap-3">
          {baseData.length > 0 &&
            Object.keys(baseData[0])
              .filter((key) => key !== "Base")
              .map((finish) => {
                const color = finishColors[finish]; // Check if the finish has a mapped color

                return color ? (
                  // If the finish has a mapped color, display a color swatch
                  <button
                    key={finish}
                    onClick={() => setProductData({ ...productData, finish })}
                    className={`w-12 h-12 rounded-full relative outline-none cursor-pointer ${
                      productData.finish === finish
                        ? "border-[3px] border-blue-500"
                        : "border-2 border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {productData.finish === finish && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
                    )}
                  </button>
                ) : (
                  // If the finish does NOT have a mapped color, show it as text
                  <button
                    key={finish}
                    onClick={() => setProductData({ ...productData, finish })}
                    className={`px-4 py-2 border border-gray-300 rounded-md cursor-pointer ${
                      productData.finish === finish
                        ? "bg-blue-500 text-white font-semibold"
                        : "bg-gray-50 text-black font-normal"
                    }`}
                  >
                    {finish}
                  </button>
                );
              })}
        </div>
      </div>

      {/* Base Selection */}
      <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-6 pb-2.5 relative text-center">
            Select Base
            <div className="absolute bottom-0 w-[60px] h-[3px] bg-blue-500 rounded-sm left-1/2 translate-x-[-50%]"></div>
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => {
              const baseScroll = document.getElementById("baseScroll");
              if (baseScroll) {
                baseScroll.scrollBy({ left: -250, behavior: "smooth" });
              }
            }}
            className="absolute top-1/2 -left-5 z-10 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer text-lg text-gray-700 transition-all hover:shadow-lg"
          >
            &#10094;
          </button>

          <div
            id="baseScroll"
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {baseData.map((row) => {
              const imageUrl = getBaseImageUrl(row.Base, productData.finish);
              const isSelected = productData.base === row.Base;

              return (
                <div
                  key={row.Base}
                  onClick={() =>
                    setProductData({ ...productData, base: row.Base })
                  }
                  className={`rounded-xl overflow-hidden min-w-[220px] flex-none snap-start cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "shadow-lg shadow-blue-200 -translate-y-1"
                      : "shadow-md hover:shadow-lg"
                  }`}
                >
                  <div
                    className="h-[200px] bg-cover bg-center relative"
                    style={{
                      backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    }}
                  >
                    {!imageUrl && (
                      <div className="h-full flex items-center justify-center text-gray-500">
                        No image available
                      </div>
                    )}
                    {isSelected && (
                      <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Selected
                      </div>
                    )}
                  </div>
                  <div
                    className={`p-4 text-center font-medium text-base ${
                      isSelected ? "bg-blue-50 text-blue-500" : ""
                    }`}
                  >
                    {row.Base}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => {
              const baseScroll = document.getElementById("baseScroll");
              if (baseScroll) {
                baseScroll.scrollBy({ left: 250, behavior: "smooth" });
              }
            }}
            className="absolute top-1/2 -right-5 z-10 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer text-lg text-gray-700 transition-all hover:shadow-lg"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Handrail Selection */}
      <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-6 pb-2.5 relative text-center">
            Select Handrail
            <div className="absolute bottom-0 w-[60px] h-[3px] bg-blue-500 rounded-sm left-1/2 translate-x-[-50%]"></div>
          </h2>
        </div>
        <div className="relative">
          <button
            onClick={() => {
              const handrailScroll = document.getElementById("handrailScroll");
              if (handrailScroll) {
                handrailScroll.scrollBy({ left: -250, behavior: "smooth" });
              }
            }}
            className="absolute top-1/2 -left-5 z-10 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer text-lg text-gray-700 transition-all hover:shadow-lg"
          >
            &#10094;
          </button>

          <div
            id="handrailScroll"
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {handrailData.map((row) => {
              const imageUrl = getHandrailImageUrl(
                row["Handrail Type"],
                productData.finish
              );
              const isSelected = productData.handrail === row["Handrail Type"];

              return (
                <div
                  key={row["Handrail Type"]}
                  onClick={() =>
                    setProductData({
                      ...productData,
                      handrail: row["Handrail Type"],
                    })
                  }
                  className={`rounded-xl overflow-hidden min-w-[220px] flex-none snap-start cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "shadow-lg shadow-blue-200 -translate-y-1"
                      : "shadow-md hover:shadow-lg"
                  }`}
                >
                  <div
                    className="h-[200px] bg-cover bg-center relative"
                    style={{
                      backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    }}
                  >
                    {!imageUrl && (
                      <div className="h-full flex items-center justify-center text-gray-500">
                        No image available
                      </div>
                    )}
                    {isSelected && (
                      <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Selected
                      </div>
                    )}
                  </div>
                  <div
                    className={`p-4 text-center font-medium text-base ${
                      isSelected ? "bg-blue-50 text-blue-500" : ""
                    }`}
                  >
                    {row["Handrail Type"]}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => {
              const handrailScroll = document.getElementById("handrailScroll");
              if (handrailScroll) {
                handrailScroll.scrollBy({ left: 250, behavior: "smooth" });
              }
            }}
            className="absolute top-1/2 -right-5 z-10 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer text-lg text-gray-700 transition-all hover:shadow-lg"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Additional Options */}
      <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-6 pb-2.5 relative text-center">
            Additional Options
            <div className="absolute bottom-0 w-[60px] h-[3px] bg-blue-500 rounded-sm left-1/2 translate-x-[-50%]"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Glass Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Glass Type:
            </label>
            <select
              value={productData.glass}
              onChange={(e) =>
                setProductData({ ...productData, glass: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              {/* <option value="">Select Glass</option> */}
              {glassData.map((row) => (
                <option
                  key={row["Glass Thickness"]}
                  value={row["Glass Thickness"]}
                >
                  {row["Glass Thickness"]}
                </option>
              ))}
            </select>
          </div>

          {/* Pincode Input with City/State Display */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Installation Pincode:
            </label>
            <input
              type="text"
              value={productData.location}
              onChange={(e) => {
                // Only allow numeric input
                if (/^\d*$/.test(e.target.value)) {
                  const pincode = e.target.value;
                  setProductData({ ...productData, location: pincode });

                  // Fetch city and state when pincode is 6 digits
                  if (pincode.length === 6) {
                    getLocationFromPincode(pincode).then((locationData) => {
                      if (locationData) {
                        console.log("City and state fetched:", locationData);
                        setProductData((prev) => ({
                          ...prev,
                          city: locationData.city,
                          state: locationData.state,
                        }));
                      } else {
                        setProductData((prev) => ({
                          ...prev,
                          city: "",
                          state: "",
                        }));
                      }
                    });
                  } else if (pincode.length < 6) {
                    // Clear city and state if pincode is incomplete
                    setProductData((prev) => ({
                      ...prev,
                      city: "",
                      state: "",
                    }));
                  }
                }
              }}
              placeholder="Enter your pincode"
              className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              maxLength={6}
            />

            {/* Display city and state when available */}
            {productData.state && (
              <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-xs text-gray-500">City:</span>
                    <p className="font-medium text-gray-800">
                      {productData.city}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">State:</span>
                    <p className="font-medium text-gray-800">
                      {productData.state}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              I am:
            </label>
            <select
              value={productData.userType}
              onChange={(e) =>
                setProductData({ ...productData, userType: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              {/* <option value="">Select User Type</option> */}
              {userTypeData.map((row) => (
                <option key={row["User Type"]} value={row["User Type"]}>
                  {row["User Type"]}
                </option>
              ))}
            </select>
          </div>

          {/* Timeline Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Project Timeline:
            </label>

            <select
              value={productData.timeline}
              onChange={(e) =>
                setProductData({ ...productData, timeline: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              {/* <option value="">Select Timeline</option> */}
              {timelineData.map((row) => (
                <option key={row.Timeline} value={row.Timeline}>
                  {row.Timeline}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Height Selection */}
        <div className="mb-6 w-full">
          <label className="block mb-3 font-medium text-gray-600">
            Glass Height from (Finish Floor Level):
          </label>
          <div className="flex flex-col md:flex-row w-full justify-evenly md:items-start gap-4 md:gap-10">
            {/* Height Selection & Labels */}
            <div className="flex flex-col items-start md:items-start w-max md:w-max">
              <div className="relative flex w-max items-start my-12">
                {/* Range Input */}
                <input
                  type="range"
                  min={0}
                  max={heightOptions.length - 1}
                  step={1}
                  value={getSliderValue(productData.height)}
                  onChange={(e) => {
                    const height = heightMap[Number.parseInt(e.target.value)];
                    setProductData({ ...productData, height });
                  }}
                  className="appearance-none w-[10px] h-[200px] bg-gray-200 rounded-full outline-none [writing-mode:vertical-rl] [direction:ltr] rotate-180"
                />

                {/* Labels for the scale */}
                <div className="absolute left-8 top-0 flex flex-col justify-center !w-max h-full">
                  {heightOptions.map((height, index) => (
                    <button
                      key={index}
                      onClick={() => setProductData({ ...productData, height })}
                      className={`text-sm px-3 w-max rounded-md transition-all ${
                        productData.height === height
                      }`}
                      style={{
                        position: "absolute",
                        bottom: `${
                          (index / (heightOptions.length - 1)) * 100
                        }%`,
                        transform: "translateY(50%)",
                      }}
                    >
                      {height} {height === 3.5 ? "(Standard)" : ""} Feet
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Height Text */}
              <div
                className="mt-2 text-lg font-semibold flex justify-center text-blue-500 px-4 py-2 bg-blue-50 rounded-full shadow-sm"
                style={{ minWidth: "120px" }}
              >
                {productData.height} Feet
              </div>
            </div>

            {/* Dynamic Image Based on Height Selection */}
            <div className="relative mt-4 md:mt-0 w-full md:w-auto flex justify-center">
              <img
                src={
                  heightImages[productData.height] ||
                  "/images/GlassHeight/3.5full.png" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt="Height visualization"
                className="h-[300px] md:h-[350px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 mt-10 border border-blue-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-500">
          Your Selection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {productData.finish && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Finish</div>
              <div className="font-semibold text-gray-800">
                {productData.finish}
              </div>
            </div>
          )}
          {productData.base && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Base</div>
              <div className="font-semibold text-gray-800">
                {productData.base}
              </div>
            </div>
          )}
          {productData.handrail && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Handrail</div>
              <div className="font-semibold text-gray-800">
                {productData.handrail}
              </div>
            </div>
          )}
          {productData.glass && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Glass</div>
              <div className="font-semibold text-gray-800">
                {productData.glass}
              </div>
            </div>
          )}
          {productData.location && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Pincode</div>
              <div className="font-semibold text-gray-800">
                {productData.location}
              </div>
            </div>
          )}
          {productData.city && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">City</div>
              <div className="font-semibold text-gray-800">
                {productData.city}
              </div>
            </div>
          )}
          {productData.state && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">State</div>
              <div className="font-semibold text-gray-800">
                {productData.state}
              </div>
            </div>
          )}
          {productData.height && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Height</div>
              <div className="font-semibold text-gray-800">
                {productData.height}ft
              </div>
            </div>
          )}
          {productData.timeline && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Timeline</div>
              <div className="font-semibold text-gray-800">
                {productData.timeline}
              </div>
            </div>
          )}
          {productData.userType && (
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Looking For</div>
              <div className="font-semibold text-gray-800">
                {productData.userType}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;
