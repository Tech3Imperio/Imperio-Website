import React, { useRef } from "react";
import { Hero, ProductPanel, Quote } from "../../components";
import { productImage } from "../../assets/Images";
import { useProduct } from "../../hooks";
import { useEffect, useState, useCallback } from "react";
import { ProductProps, ProductSection } from "../../types";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils";
import { Product } from "./Product/Product";
import "./style.css";
import Metadata from "../../components/Metatag/Metatag";
import ShimmerCard from "../../components/Shimmer/ShimmerCard";
import { SlArrowDown } from "react-icons/sl";
import { LuFilter } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";

export type ProductDescription = {
  heading: string;
  subheading: string;
  description: string;
};

const ProductDescription: React.FC<ProductDescription> = ({
  heading,
  subheading,
  description,
}) => {
  return (
    <>
      <div className="max-w-6xl flex flex-col md:flex-row mx-auto mt-2 md:mt-8 gap-6 px-4 md:px-8 py-4">
        <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
          <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
            {heading}
          </h2>
          <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
            {subheading}
          </h3>
        </div>
        <div className="md:w-[40%]">
          <p className="text-justify italic text-[--grey]">{description}</p>
        </div>
      </div>
      <ShimmerCard />
    </>
  );
};

const MemoProducts: React.FC = () => {
  const { data, error, loading } = useProduct(
    "https://script.google.com/macros/s/AKfycbwE-1Stl8t8_XrB5MuRPQ1hROKpo3mYynDPnI1vNX6U5vakITchmA6nfmzQt8sYpqFIjw/exec"
  );
  // old Api link if current link is not working then use below Api link
  // https://script.googleusercontent.com/a/macros/imperiorailing.com/echo?user_content_key=Ay_XW6emxmiwQ7Lncs10OYWdnFeTW0upS6uckktFqOCWvYse7Um3IucncElvDr3F6e1U0oIbcefbm_KsKRb7lGfzRJKfhSKKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKC1zka5stJV6CJ8rbxa1V-UsEmAp_psx4LPWV2VVapqoanwc9S-o8wsibsbmz75VIWJ6s0UnHNjn57l_O834N2gmbbRpWFxXoNaVLQCjst0OCroO14vipAt9G3wLhldpT5hqak0MdSxiw&lib=McNTorF1LzcGC_6h_0B7S9zQVEnUvMwCs
  const [productSections, setProductSections] = useState<ProductSection[]>([]);

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [openSections, setOpenSections] = useState<string[]>([]);

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
  };

  const toggleSection = (section: string) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(section)
        ? prevOpenSections.filter((s) => s !== section)
        : [...prevOpenSections, section]
    );
  };

  const [problem, setProblem] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredProductSections = selectedTypes.length
    ? productSections
        .map((section) => ({
          ...section,
          products: section.products.filter((product) =>
            selectedTypes.every((type) => product.Types?.includes(type))
          ),
        }))
        .filter((section) => section.products.length > 0)
    : productSections;

  useEffect(() => {
    if (selectedSection && sectionRefs.current[selectedSection]) {
      sectionRefs.current[selectedSection]?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedSection]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dataBuilder = useCallback((data: ProductProps[]): ProductSection[] => {
    const headers = [...new Set(data.map((item) => item["Product Category"]))];
    return headers.map((header) => ({
      header,
      products: data.filter((item) => item["Product Category"] === header),
    }));
  }, []);

  // countdown show after data feaching start
  const [countdown, setCountdown] = useState(7);
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [countdown]);

  // countdown show after data feaching end

  useEffect(() => {
    const localData = getLocalStorageItem<ProductProps[]>("ProductData");
    if (localData) {
      const sections = dataBuilder(localData);
      setProductSections(sections);
    } else if (data) {
      const sections = dataBuilder(data);
      setProductSections(sections);

      if (loading || error) {
        setProblem(true);
      } else {
        setProblem(false);
      }
    }
    if (JSON.stringify(localData) !== JSON.stringify(data) && data.length > 0) {
      setLocalStorageItem<ProductProps[]>("ProductData", data);
    }
  }, [data, error, loading, dataBuilder]);

  const filterCategories = [
    {
      name: "Applications",
      options: [
        "Balcony Railing",
        "Staircase Railing",
        "Terrace Railing",
        "Fixed Glass Railing",
      ],
    },
    {
      name: "Mounting Type",
      options: [
        "Top Mounted",
        "In Floor Mounted",
        "Side Mounted",
        "Heavy Duty",
      ],
    },
    {
      name: "Glass Thick",
      options: ["12mm", "13.52mm", "16mm", "17.52mm", "20mm", "21.52mm"],
    },
    {
      name: "Glass Height",
      options: ["Upto 900mm", "Upto 1050mm", "Upto 1200mm", "Upto 1500mm"],
    },
    {
      name: "Handrail Type",
      options: ["With LED", "Without LED"],
    },
    {
      name: "Handrail Shape",
      options: [
        "Oval Shape",
        "Round Shape",
        "Square Shape",
        "Rectangel Shape",
        "Sleek Shape",
      ],
    },
  ];

  if (problem) {
    return (
      <>
        <Metadata
          title={
            "Glass Railing Systems Products | Aluminium Glass railing Base |  Aluminium Glass railing Handrail"
          }
          description={
            "Imperio’s glass railing systems in india offer durable balcony glass railings, staircase glass railings, and aluminum glass railings, merging modern aesthetics with lasting safety. We offer glass railings all over India, with a strong presence in states like Maharashtra, Goa, Gujarat, etc and cities including Mumbai, Pune, Alibaug, Bangluru, etc"
          }
          keywords={
            "glass railings, aluminum railings, frameless glass, durable railings, modern railing systems, corrosion-resistant railings, UV-resistant glass railings, residential glass railings, commercial aluminum railings, stylish railing solutions, high-quality glass railings, elegant railing designs, safety and functionality, innovative railing systems, custom glass railings, architectural railing solutions, aluminium glass railing"
          }
          ogImage={productImage}
          ogUrl={"https://www.imperiorailing.com/products"}
        />
        <Hero
          img={productImage}
          altText="Hero image for product"
          header="Glass Railing Systems"
          subHeader="Imperio’s Glass Railing Systems in India deliver high-durability balcony, staircase, and aluminum glass railings, blending modern style with lasting safety for any space."
          curve
        />
        <main className="flex flex-col md:flex-row max-w-[85rem] mx-auto">
          <aside className="hidden md:flex flex-col text-center md:sticky md:top-32 md:mt-10 self-start gap-4 p-4 xl:p-0 w-[80%] md:w-auto mx-auto ">
            <ul className="flex flex-col md:gap-4 border p-2 rounded-xl w-full overflow-y-visible">
              {["Base", "Handrail", "Glass Type", "Height"].map((section) => (
                <li
                  key={section}
                  className={`list-none md:whitespace-nowrap cursor-pointer p-2 rounded-lg ${
                    selectedSection === section ? "bg-[#f5ce02]" : ""
                  }`}
                  onClick={() => setSelectedSection(isMobile ? null : section)}
                >
                  {section === "Height"
                    ? "Glass Railing Heights"
                    : `Glass Railing ${section}`}
                  {section === "Height" && <sup>RFT</sup>}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedSection(null)}
              className=" py-3 mb-3 tablet:py-4 px-5 laptop:px-6 text-sm text-white bg-[--black] font-normal rounded-4xl transition-700 hover:text-[--black] hover:bg-[--secound]"
            >
              Reset Filters
            </button>
          </aside>

          <section>
            <ProductDescription
              heading={"Aluminium Glass Railing Base"}
              subheading={
                "High Quality & Premium Aluminium Glass Railing Base variants."
              }
              description={
                "Discover our premium aluminum glass railing bases, customizable in matte and glossy finishes to suit any style. Crafted for durability and elegance, our weather-resistant bases combine safety with innovation. With quick service and fast quotations, we proudly deliver across India, including cities like Mumbai, Pune, Hyderabad, and Kolkata."
              }
            />
            <ProductDescription
              heading={"Aluminium Glass Railing Handrail"}
              subheading={
                " High Quality & Premium Aluminium Glass Railing Handrail variants."
              }
              description={
                "Explore our premium aluminum glass railing handrail options, featuring customizable finishes to suit any style. Choose from matte and glossy color finishes, plus a brighter handrail LED strip to elegantly illuminate your space. Available in major cities like Mumbai, Pune, Hyderabad, Kolkata, we deliver all over India, enhancing glass railing systems nationwide with style and safety."
              }
            />
            <ProductDescription
              heading={"Aluminium Glass Railing Height"}
              subheading={
                "High Quality & Premium Aluminium Glass Railing Height variants."
              }
              description={
                "Explore our premium glass railing height options, designed to meet diverse safety and style requirements. Choose from  heights ranging from 900mm to 1200mm, each crafted for durability and sophistication. Available in major cities like Mumbai, Pune, Hyderabad, and Kolkata, we deliver across India, enhancing glass railing systems nationwide with style, safety, and functionality."
              }
            />
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <Metadata
        title={
          "Glass Railing System | Aluminium Glass Railing Base |  Aluminium Glass Railing Handrail"
        }
        description={
          "Imperio’s glass railing systems in india offer durable balcony glass railings, staircase glass railings, and aluminum glass railings, merging modern aesthetics with lasting safety. We offer glass railings all over India, with a strong presence in states like Maharashtra, Goa, Gujarat, etc and cities including Mumbai, Pune, Alibaug, Bangluru, etc"
        }
        keywords={
          "glass railings, aluminum railings, frameless glass, durable railings, modern railing systems, corrosion-resistant railings, UV-resistant glass railings, residential glass railings, commercial aluminum railings, stylish railing solutions, high-quality glass railings, elegant railing designs, safety and functionality, innovative railing systems, custom glass railings, architectural railing solutions"
        }
        ogImage={productImage}
        ogUrl={"https://imperiorailing.com/products"}
      />
      <div className="lg:hidden flex top-[0%] fixed right-0 z-40 h-screen ">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <LuFilter
            className=" bg-yellow-500 text-black z-40 p-2 rounded-l-md"
            size={45}
          />
        </button>
      </div>
      <div
        className={`fixed right-0 top-0 h-screen w-[300px] bg-[--black] rounded-l-2xl shadow-md transition-transform duration-700 z-50 overflow-y-scroll sidebar-container ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center m-4 ">
          <h2 className="text-2xl YellowText whitespace-nowrap">
            Filter Products
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="flex -text--grey"
          >
            <IoIosClose size={36} />
          </button>
        </div>
        <div className="p-4">
          {filterCategories.map((category) => (
            <div key={category.name} className="p-2 mb-4">
              <div
                onClick={() => toggleSection(category.name)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="-text--grey font-semibold">{category.name}</h3>
                <span>
                  <SlArrowDown
                    className={`-text--grey ${
                      openSections.includes(category.name)
                        ? "rotate-180 transition-all duration-500"
                        : " transition-all duration-500"
                    }`}
                  />
                </span>
              </div>
              {openSections.includes(category.name) && (
                <ul className="flex flex-col">
                  {category.options.map((option) => (
                    <li
                      key={option}
                      className="list-none flex items-center gap-3 p-2"
                    >
                      <input
                        type="checkbox"
                        id={option}
                        checked={selectedTypes.includes(option)}
                        onChange={() => handleTypeChange(option)}
                        className="cursor-pointer"
                      />
                      <label
                        htmlFor={option}
                        className="cursor-pointer rounded-lg whitespace-nowrap -text--grey"
                      >
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <button
            onClick={() => setSelectedTypes([])}
            className="py-3 mb-3 tablet:py-4 px-5 laptop:px-6 text-sm text-white bg-[--black] font-normal rounded-4xl transition-700 hover:text-[--black] hover:bg-[--secound]"
          >
            Reset Filters
          </button>
        </div>
      </div>
      <Hero
        img={productImage}
        altText="Hero image for product"
        header="Glass Railing Systems"
        subHeader="Imperio’s Glass Railing Systems in India deliver high-durability balcony, staircase, and aluminum glass railings, blending modern style with lasting safety for any space."
        curve
      />
      <main className="flex flex-col md:flex-row max-w-[85rem] mx-auto">
        <aside className="hidden lg:flex flex-col text-center md:top-32 md:mt-10 self-start p-4 w-[80%] md:w-[18%] mx-auto border rounded-xl mb-6">
          {filterCategories.map((category) => (
            <div key={category.name} className="p-2  mb-4">
              <div
                onClick={() => toggleSection(category.name)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="-text--third font-semibold">{category.name}</h3>
                <span>
                  <SlArrowDown
                    className={`${
                      openSections.includes(category.name)
                        ? "rotate-180 transition-all duration-500"
                        : " transition-all duration-500"
                    }`}
                  />
                </span>
              </div>
              {openSections.includes(category.name) && (
                <ul className="flex flex-col">
                  {category.options.map((option) => (
                    <li
                      key={option}
                      className="list-none flex items-center gap-3 p-2"
                    >
                      <input
                        type="checkbox"
                        id={option}
                        checked={selectedTypes.includes(option)}
                        onChange={() => handleTypeChange(option)}
                        className="cursor-pointer"
                      />
                      <label
                        htmlFor={option}
                        className="cursor-pointer rounded-lg whitespace-nowrap"
                      >
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <button
            onClick={() => setSelectedTypes([])}
            className="py-3 mb-3 tablet:py-4 px-5 laptop:px-6 text-sm text-white bg-[--black] font-normal rounded-4xl transition-700 hover:text-[--black] hover:bg-[--secound]"
          >
            Reset Filters
          </button>
        </aside>
        <section className="pb-24">
          {filteredProductSections &&
            filteredProductSections.map((section, index) => (
              <div
                key={index}
                ref={
                  isMobile
                    ? (el) => (sectionRefs.current[section.header] = el)
                    : null
                }
                className={`${selectedSection && isMobile ? "pt-24" : ""}`}
              >
                <ProductPanel
                  header={section.header}
                  productDetail={section.products}
                />
              </div>
            ))}
        </section>

        {/* <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div> */}
      </main>
      <Quote />
    </>
  );
};
export const Products = React.memo(MemoProducts);
export { Product };
