"use client";

import type React from "react";
import { getLocationFromPincode } from "../../utils/pincode-service";
import { Info } from "lucide-react";
import { useState } from "react";

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
  installation: string;
  projectName: string;
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
    "3.5": "/images/GlassHeight/3.5full.png",
    "4": "/images/GlassHeight/4full.png",
  };

  const getBaseTypeImageUrl = (baseType: string | undefined) => {
    if (!baseType) return "/placeholder.svg";
    const formattedName = baseType.replace(/\s+/g, "").toLowerCase();
    return `/images/baseInfo/${formattedName}_info.jpeg`;
  };

  const getHandrailTypeImageUrl = (baseType: string | undefined) => {
    if (!baseType) return "/placeholder.svg";
    const formattedName = baseType.replace(/\s+/g, "").toLowerCase();
    return `/images/handrailInfo/${formattedName}_info.jpeg`;
  };

  const [showInfo, setShowInfo] = useState(false);
  const [showPincodeInfo, setShowPincodeInfo] = useState(false);
  const [showTimelineInfo, setShowTimelineInfo] = useState(false);
  const [showBaseInfo, setShowBaseInfo] = useState<string | null>(null);
  const [showHandrailInfo, setShowHandrailInfo] = useState<string | null>(null);
  return (
    <div className="max-w-[1200px] mx-auto p-5 sm:p-10 font-sans text-gray-800 bg-gray-50 rounded-none">
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
                    className={`w-12 h-12 rounded-none relative outline-none cursor-pointer ${
                      productData.finish === finish
                        ? "border-[3px] border-blue-500"
                        : "border-2 border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {productData.finish === finish && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-none" />
                    )}
                  </button>
                ) : (
                  // If the finish does NOT have a mapped color, show it as text
                  <button
                    key={finish}
                    onClick={() => setProductData({ ...productData, finish })}
                    className={`px-4 py-2 border border-gray-300 rounded-none cursor-pointer ${
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
      <div className="mb-10 bg-white rounded-none p-6 sm:p-8 shadow-md">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-6 pb-2.5 relative text-center">
            Select Base
            <div className="absolute bottom-0 w-[60px] h-[3px] bg-blue-500 rounded-none left-1/2 translate-x-[-50%]"></div>
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
            className="absolute top-1/2 -left-5 z-10 transform -translate-y-1/2 bg-white rounded-none w-10 h-10 flex items-center justify-center shadow-md cursor-pointer text-lg text-gray-700 transition-all hover:shadow-lg"
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
                  className={`rounded-none overflow-hidden min-w-[220px] flex-none snap-start cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "shadow-lg shadow-blue-200 -translate-y-1"
                      : "shadow-md hover:shadow-lg"
                  }`}
                >
                  <div
                    className="h-[200px] bg-cover bg-center relative"
                    // style={{
                    //   backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    // }}
                  >
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt="Base"
                      loading="lazy"
                      className="h-[200px] w-[220px] object-cover"
                    />
                    {!imageUrl && (
                      <div className="h-full flex items-center justify-center text-gray-500">
                        No image available
                      </div>
                    )}
                    {isSelected && (
                      <div className="absolute bottom-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Selected
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowBaseInfo(
                          showBaseInfo === row.Base ? null : row.Base
                        );
                        setShowHandrailInfo(null);
                      }}
                      className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-blue-500 hover:bg-blue-50 transition-all"
                    >
                      <Info className="w-4 h-4" />
                    </button>
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
            className="absolute top-1/2 -right-5 z-10 transform -translate-y-1/2 bg-white rounded-none w-10 h-10 flex items-center justify-center shadow-md cursor-pointer text-lg text-gray-700 transition-all hover:shadow-lg"
          >
            &#10095;
          </button>
        </div>
      </div>
      {showBaseInfo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowBaseInfo(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={getBaseTypeImageUrl(showBaseInfo) || "/placeholder.svg"}
                alt={showBaseInfo}
                className="w-full h-100 object-cover"
              />
              <button
                onClick={() => setShowBaseInfo(null)}
                className="absolute pb-2 top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-700 hover:bg-gray-100 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{showBaseInfo} Base</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  {showBaseInfo === "Dot"
                    ? "Hole Adjustment Feature, Ultra Strong and Modern Aesthetics, High Grade Anti Corrosion"
                    : showBaseInfo === "Ace"
                    ? "Heavy duty Railing Systems, Ultra Strong and Modern Aesthetics, High Grade Anti Corrosion"
                    : showBaseInfo === "Pro"
                    ? "Heavy duty Railing Systems, Ultra Strong and Modern Aesthetics, High Grade Anti Corrosion"
                    : showBaseInfo === "Smart"
                    ? "Heavy duty Railing Systems, Ultra Strong and Modern Aesthetics, High Grade Anti Corrosion"
                    : showBaseInfo === "Mini"
                    ? "Minimal Railing System, High Grade Anti Corrosion, Ultra Strong and Modern Aesthetics"
                    : showBaseInfo === "Micro"
                    ? "Minimal Railing System, High Grade Anti Corrosion, Ultra Strong and Modern Aesthetics"
                    : showBaseInfo === "SemiPro"
                    ? "Heavy duty Railing Systems, Ultra Strong and Modern Aesthetics, High Grade Anti Corrosion"
                    : showBaseInfo === "SemiSmart"
                    ? "Heavy duty Railing Systems, Ultra Strong and Modern Aesthetics, High Grade Anti Corrosion"
                    : showBaseInfo === "SemiMini"
                    ? "Heavy duty Railing Systems, Ultra Strong and Modern Aesthetics, High Grade Anti Corrosion"
                    : showBaseInfo === "Spigot"
                    ? "Premium floor-mounted spigot system with sleek design and high load capacity. Ideal for frameless installations."
                    : "Custom installations requiring specialized mounting solutions"}
                </p>
                <p>
                  <strong>Suitable for:</strong>{" "}
                  {showBaseInfo === "Dot"
                    ? "Staircase Railing, Side Mounted, supports 12mm, 13.52mm, 15mm, 17.52mm, 19mm, 21.52mm glass thicknesses with height options of up to 900mm, 1050mm, and 1200mm. Designed for both indoor and outdoor applications."
                    : showBaseInfo === "Ace"
                    ? "High-end residential and commercial projects. Perfect for main entrances, feature staircases, and premium balustrades."
                    : showBaseInfo === "Pro"
                    ? "Heavy-duty commercial applications and public spaces. Designed for high-traffic areas and maximum safety compliance."
                    : showBaseInfo === "Smart"
                    ? "Modern architectural designs requiring precision installation. Features built-in adjustment mechanisms for perfect alignment."
                    : showBaseInfo === "Mini"
                    ? "Residential applications with standard glass thickness. Works well for interior railings and low-traffic balconies."
                    : showBaseInfo === "Micro"
                    ? "Small balconies, compact staircases, and tight spaces. Ideal for urban apartments and small footprint renovations."
                    : showBaseInfo === "SemiPro"
                    ? "Mixed-use buildings and mid-range commercial projects. Offers professional performance at a more accessible price point."
                    : showBaseInfo === "SemiSmart"
                    ? "Installations on uneven surfaces or where fine adjustments are needed. Good for retrofit projects and renovations."
                    : showBaseInfo === "SemiMini"
                    ? "Residential and light commercial use. Suitable for standard balconies and medium-sized staircases with space constraints."
                    : showBaseInfo === "Spigot"
                    ? "Versatile for balconies, pool fencing, and decks. Supports frameless installations with a clean aesthetic."
                    : "Commercial spaces and unique architectural designs requiring specific mounting configurations."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Handrail Selection */}
      <div className="mb-10 bg-white rounded-none p-6 sm:p-8 shadow-md">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-6 pb-2.5 relative text-center">
            Select Handrail
            <div className="absolute bottom-0 w-[60px] h-[3px] bg-blue-500 rounded-none left-1/2 translate-x-[-50%]"></div>
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
            className="absolute top-1/2 -left-5 z-10 transform -translate-y-1/2 bg-white rounded-none w-10 h-10 flex items-center justify-center shadow-md cursor-pointer text-lg text-gray-700 transition-all hover:shadow-lg"
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
                  className={`rounded-none overflow-hidden min-w-[220px] flex-none snap-start cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "shadow-lg shadow-blue-200 -translate-y-1"
                      : "shadow-md hover:shadow-lg"
                  }`}
                >
                  <div
                    className="h-[200px] bg-cover bg-center relative"
                    // style={{
                    //   backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                    // }}
                  >
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt="Handrail"
                      loading="lazy"
                      className="h-[200px] w-[220px] object-cover"
                    />
                    {!imageUrl && (
                      <div className="h-full flex items-center justify-center text-gray-500">
                        No image available
                      </div>
                    )}
                    {isSelected && (
                      <div className="absolute bottom-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Selected
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowHandrailInfo(
                          showHandrailInfo === row["Handrail Type"]
                            ? null
                            : row["Handrail Type"]
                        );
                        setShowBaseInfo(null);
                      }}
                      className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-blue-500 hover:bg-blue-50 transition-all"
                    >
                      <Info className="w-4 h-4" />
                    </button>
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
            className="absolute top-1/2 -right-5 z-10 transform -translate-y-1/2 bg-white rounded-none w-10 h-10 flex items-center justify-center shadow-md cursor-pointer text-lg text-gray-700 transition-all hover:shadow-lg"
          >
            &#10095;
          </button>
        </div>
      </div>
      {showHandrailInfo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowHandrailInfo(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={
                  getHandrailTypeImageUrl(showHandrailInfo) ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt={showHandrailInfo}
                className="w-full h-100 object-cover"
              />
              <button
                onClick={() => setShowHandrailInfo(null)}
                className="absolute pb-2 top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md text-gray-700 hover:bg-gray-100 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">
                {showHandrailInfo} Handrail
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Usage:</strong> The {showHandrailInfo} handrail is
                  designed for{" "}
                  {showHandrailInfo === "LED20"
                    ? "commercial spaces and public areas needing powerful illumination and maximum stability with its robust 80mm profile"
                    : showHandrailInfo === "LED40"
                    ? "medium-sized staircases and walkways requiring both illumination and sturdy support with its 40mm profile"
                    : showHandrailInfo === "LED80"
                    ? "commercial spaces and public areas needing powerful illumination and maximum stability with its robust 80mm profile"
                    : showHandrailInfo === "Oval60"
                    ? "ergonomic applications where a comfortable, easy-to-grip oval shape with 60mm width is preferred"
                    : showHandrailInfo === "Round50"
                    ? "traditional settings requiring a classic 50mm round profile that offers excellent grip and timeless appeal"
                    : showHandrailInfo === "Sleek"
                    ? "contemporary designs where a refined, low-profile handrail creates a sophisticated, unobtrusive appearance"
                    : showHandrailInfo === "Slim"
                    ? "space-constrained installations where a minimal footprint is required without compromising on functionality"
                    : showHandrailInfo === "Square40"
                    ? "modern architectural designs featuring clean lines and geometric elements with its substantial 40mm square profile"
                    : showHandrailInfo === "Square50"
                    ? "contemporary spaces requiring a medium-sized square profile of 50mm that balances aesthetics with practicality"
                    : "specialized applications requiring unique profiles and ergonomic considerations"}
                  .
                </p>
                <p>
                  <strong>Suitable for:</strong>{" "}
                  {showHandrailInfo === "LED20"
                    ? "Hotels, theaters, and public buildings. Provides powerful pathway lighting and robust support suitable for high-traffic areas and emergency egress routes."
                    : showHandrailInfo === "LED40"
                    ? "Mixed-use buildings and upscale residential projects. Combines practical illumination with substantial support, ideal for primary circulation routes."
                    : showHandrailInfo === "LED80"
                    ? "Hotels, theaters, and public buildings. Provides powerful pathway lighting and robust support suitable for high-traffic areas and emergency egress routes."
                    : showHandrailInfo === "Oval60"
                    ? "Healthcare facilities, senior living communities, and universal design applications. The ergonomic oval shape is easy to grip for users with limited hand strength."
                    : showHandrailInfo === "Round50"
                    ? "Traditional homes, historic renovations, and classic architectural styles. The standard 50mm diameter provides optimal grip for users of all ages."
                    : showHandrailInfo === "Sleek"
                    ? "Luxury residences and high-end commercial spaces. Creates a refined aesthetic while maintaining functional support, perfect for design-focused projects."
                    : showHandrailInfo === "Slim"
                    ? "Narrow staircases, tight corridors, and space-efficient designs. Provides necessary support with minimal visual and physical footprint."
                    : showHandrailInfo === "Square40"
                    ? "Urban residences and trendy commercial spaces. Offers a modern geometric profile that's substantial without overwhelming smaller spaces."
                    : showHandrailInfo === "Square50"
                    ? "Contemporary commercial spaces and modern homes. The substantial 50mm square profile makes a bold design statement while providing maximum stability."
                    : "Custom installations where standard profiles don't meet specific design or functional requirements."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Additional Options */}
      <div className="mb-10 bg-white rounded-none p-6 sm:p-8 shadow-md">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-6 pb-2.5 relative text-center">
            Additional Options
            <div className="absolute bottom-0 w-[60px] h-[3px] bg-blue-500 rounded-none left-1/2 translate-x-[-50%]"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Glass Selection */}
          <div className="mb-6">
            <div className="mb-2 font-medium text-gray-600 flex items-center gap-2 relative">
              Glass Type:
              <div
                className="relative flex items-center"
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
              >
                <button
                  type="button"
                  onClick={() => setShowInfo(!showInfo)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Info className="w-4 h-4" />
                </button>

                {showInfo && (
                  <div className="absolute top-6 left-0 w-64 p-3 bg-white border border-gray-300 shadow-lg rounded-md text-sm text-gray-700 z-50">
                    <strong>Glass Type Info:</strong>
                    <br />
                    Choose the thickness of the glass based on safety,
                    aesthetics, and structural requirements. Thicker glass is
                    usually used for frameless or heavy-duty applications.
                  </div>
                )}
              </div>
            </div>

            <select
              value={productData.glass}
              onChange={(e) =>
                setProductData({ ...productData, glass: e.target.value })
              }
              className="w-full p-3 rounded-none border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
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
            <div className=" mb-2 font-medium text-gray-600 flex items-center gap-2 relative">
              Installation Pincode:
              <div
                className="relative flex items-center"
                onMouseEnter={() => setShowPincodeInfo(true)}
                onMouseLeave={() => setShowPincodeInfo(false)}
              >
                <button
                  type="button"
                  onClick={() => setShowPincodeInfo(!showPincodeInfo)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Info className="w-4 h-4" />
                </button>

                {showPincodeInfo && (
                  <div className="absolute top-6 left-0 w-64 p-3 bg-white border border-gray-300 shadow-lg rounded-md text-sm text-gray-700 z-50">
                    <strong>Why we ask for your pincode:</strong>
                    <br />
                    We use your pincode to fetch the city and state
                    automatically for accurate delivery estimates.
                  </div>
                )}
              </div>
            </div>

            <input
              type="text"
              value={productData.location}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  const pincode = e.target.value;
                  setProductData({ ...productData, location: pincode });

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
                  } else {
                    setProductData((prev) => ({
                      ...prev,
                      city: "",
                      state: "",
                    }));
                  }
                }
              }}
              placeholder="Enter your pincode"
              className="w-full p-3 rounded-none border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              maxLength={6}
            />

            {productData.state && (
              <div className="mt-2 p-3 bg-blue-50 rounded-none border border-blue-100">
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
              className="w-full p-3 rounded-none border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
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
            <div className=" mb-2 font-medium text-gray-600 flex items-center gap-2 relative">
              Project Timeline:
              <div
                className="relative flex items-center"
                onMouseEnter={() => setShowTimelineInfo(true)}
                onMouseLeave={() => setShowTimelineInfo(false)}
              >
                <button
                  type="button"
                  onClick={() => setShowTimelineInfo(!showTimelineInfo)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Info className="w-4 h-4" />
                </button>

                {showTimelineInfo && (
                  <div className="absolute top-6 left-0 w-64 p-3 bg-white border border-gray-300 shadow-lg rounded-md text-sm text-gray-700 z-50">
                    <strong>Why we ask:</strong>
                    <br />
                    Your project timeline helps us prioritize your order and
                    suggest available materials or installation slots
                    accordingly.
                  </div>
                )}
              </div>
            </div>

            <select
              value={productData.timeline}
              onChange={(e) =>
                setProductData({ ...productData, timeline: e.target.value })
              }
              className="w-full p-3 rounded-none border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            >
              {timelineData.map((row) => (
                <option key={row.Timeline} value={row.Timeline}>
                  {row.Timeline}
                </option>
              ))}
            </select>
          </div>

          {/* Installation Option */}
          <div className="mb-6">
            <div className=" mb-2 font-medium text-gray-600 flex items-center gap-2 relative">
              Installation Required:
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="installation"
                  checked={productData.installation === "Yes"}
                  onChange={() =>
                    setProductData({ ...productData, installation: "Yes" })
                  }
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="installation"
                  checked={productData.installation === "No"}
                  onChange={() =>
                    setProductData({ ...productData, installation: "No" })
                  }
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Project name */}
          <div className="mb-6">
            <div className=" mb-2 font-medium text-gray-600 flex items-center gap-2 relative">
              Project name:
              <div
                className="relative flex items-center"
                onMouseEnter={() => setShowPincodeInfo(true)}
                onMouseLeave={() => setShowPincodeInfo(false)}
              >
                <button
                  type="button"
                  onClick={() => setShowPincodeInfo(!showPincodeInfo)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Info className="w-4 h-4" />
                </button>

                {showPincodeInfo && (
                  <div className="absolute top-6 left-0 w-64 p-3 bg-white border border-gray-300 shadow-lg rounded-md text-sm text-gray-700 z-50">
                    <strong>Why we ask for your project name:</strong>
                    <br />
                    To segregate your order and provide personalized service.
                  </div>
                )}
              </div>
            </div>

            <input
              type="text"
              value={productData.projectName}
              onChange={(e) => {
                const proName = e.target.value;
                setProductData({ ...productData, projectName: proName });
                if (productData.projectName) {
                  console.log("Project name:", productData.projectName);
                }
              }}
              placeholder="Enter your project name"
              className="w-full p-3 rounded-none border border-gray-200 text-gray-700 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>
        </div>

        {/* Height Selection */}
        <div className="mb-6 w-full">
          <label className="block mb-3 font-medium text-gray-600">
            Glass Height from finish floor level:
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
                  className="appearance-none w-[10px] h-[200px] bg-gray-200 rounded-none outline-none [writing-mode:vertical-rl] [direction:ltr] rotate-180"
                />

                {/* Labels for the scale */}
                <div className="absolute left-8 top-0 flex flex-col justify-center !w-max h-full">
                  {heightOptions.map((height, index) => (
                    <button
                      key={index}
                      onClick={() => setProductData({ ...productData, height })}
                      className={`text-sm px-3 w-max rounded-none transition-all ${
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
                      {height} {height === 3.5 ? "Feet (Standard)" : "Feet"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Height Text */}
              <div
                className="mt-2 text-lg font-semibold flex justify-center text-blue-500 px-4 py-2 bg-blue-50 rounded-none shadow-sm"
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
                  "/placeholder.svg"
                }
                alt="Height visualization"
                className="h-[300px] md:h-[350px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-none p-6 mt-10 border border-blue-200">
        <h2 className="text-lg font-semibold mb-4 text-blue-500">
          Your Selection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {productData.finish && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Finish</div>
              <div className="font-semibold text-gray-800">
                {productData.finish}
              </div>
            </div>
          )}
          {productData.base && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Base</div>
              <div className="font-semibold text-gray-800">
                {productData.base}
              </div>
            </div>
          )}
          {productData.handrail && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Handrail</div>
              <div className="font-semibold text-gray-800">
                {productData.handrail}
              </div>
            </div>
          )}
          {productData.glass && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Glass</div>
              <div className="font-semibold text-gray-800">
                {productData.glass}
              </div>
            </div>
          )}
          {productData.location && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Pincode</div>
              <div className="font-semibold text-gray-800">
                {productData.location}
              </div>
            </div>
          )}
          {productData.city && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">City</div>
              <div className="font-semibold text-gray-800">
                {productData.city}
              </div>
            </div>
          )}
          {productData.state && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">State</div>
              <div className="font-semibold text-gray-800">
                {productData.state}
              </div>
            </div>
          )}
          {productData.height && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Height</div>
              <div className="font-semibold text-gray-800">
                {productData.height}ft
              </div>
            </div>
          )}
          {productData.timeline && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Timeline</div>
              <div className="font-semibold text-gray-800">
                {productData.timeline}
              </div>
            </div>
          )}
          {productData.userType && (
            <div className="bg-white p-3 rounded-none shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Looking For</div>
              <div className="font-semibold text-gray-800">
                {productData.userType}
              </div>
            </div>
          )}
          {/* Installation */}
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Installation</div>
            <div className="font-semibold text-gray-800">
              {productData.installation}
            </div>
          </div>

          {/* Project name */}
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Project name</div>
            <div className="font-semibold text-gray-800">
              {productData.projectName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;
