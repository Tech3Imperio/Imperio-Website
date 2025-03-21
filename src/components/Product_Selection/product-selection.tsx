"use client";

import type React from "react";

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
  locationData,
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
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-4">Select Finish</h2>
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
                    className={`w-10 h-10 rounded-full relative outline-none cursor-pointer ${
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
        <h2 className="text-xl font-semibold mb-6 pb-2.5 relative">
          Select Base
          <div className="absolute bottom-0 left-0 w-[60px] h-[3px] bg-blue-500 rounded-sm"></div>
        </h2>
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
        <h2 className="text-xl font-semibold mb-6 pb-2.5 relative">
          Select Handrail
          <div className="absolute bottom-0 left-0 w-[60px] h-[3px] bg-blue-500 rounded-sm"></div>
        </h2>
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
        <h2 className="text-xl font-semibold mb-6 pb-2.5 relative">
          Additional Options
          <div className="absolute bottom-0 left-0 w-[60px] h-[3px] bg-blue-500 rounded-sm"></div>
        </h2>

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
              <option value="">Select Glass</option>
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

          {/* Location Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Installation Location:
            </label>
            <select
              value={productData.location}
              onChange={(e) =>
                setProductData({ ...productData, location: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              <option value="">Select Location</option>
              {locationData.map((row) => (
                <option key={row.Location} value={row.Location}>
                  {row.Location}
                </option>
              ))}
            </select>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Looking For:
            </label>
            <select
              value={productData.userType}
              onChange={(e) =>
                setProductData({ ...productData, userType: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              <option value="">Select User Type</option>
              {userTypeData.map((row) => (
                <option key={row["User Type"]} value={row["User Type"]}>
                  {row["User Type"]}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6"></div>

          {/* Timeline Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Project Timeline:
            </label>
            <img
              src="/images/30 days.png"
              alt="Timeline"
              className="h-[200px] object-contain mx-auto mb-4 block"
            />
            <select
              value={productData.timeline}
              onChange={(e) =>
                setProductData({ ...productData, timeline: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              <option value="">Select Timeline</option>
              {timelineData.map((row) => (
                <option key={row.Timeline} value={row.Timeline}>
                  {row.Timeline}
                </option>
              ))}
            </select>
          </div>
          {/* Height Selection */}
          <div className="mb-6 ">
            <label className="block mb-2 font-medium text-gray-600">
              Railing Height:
            </label>
            <div className="flex justify-center items-center gap-10">
              <div className="flex flex-col items-center h-[250px] relative">
                <div className="absolute -left-10 h-[200px] flex flex-col-reverse justify-between pl-5">
                  {heightOptions.map((option) => (
                    <span key={option} className="text-sm text-gray-500">
                      {option}ft
                    </span>
                  ))}
                </div>
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
                  className="appearance-none w-[10px] h-[200px] bg-gray-200 rounded-md outline-none mx-[30px] [writing-mode:vertical-rl] [direction:ltr] rotate-180"
                />
                <div className="mt-5 text-lg font-semibold text-blue-500">
                  {productData.height}ft
                </div>
              </div>
              <img
                src="/images/6ftman.png"
                alt="Human"
                className="h-[400px] object-contain"
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
              <div className="text-xs text-gray-500 mb-1">Location</div>
              <div className="font-semibold text-gray-800">
                {productData.location}
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
