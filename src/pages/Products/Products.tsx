import React, { ReactNode } from "react";
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
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CiFilter } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";

// import DealerProductsPage from "./DealerProductsPage";

export type ProductDescription = {
  heading: string;
  subheading: string;
  description: string | ReactNode;
};

const ProductDescription: React.FC<ProductDescription> = ({
  heading,
  subheading,
  description,
}) => {
  return (
    <>
      <div className="max-w-5xl flex flex-col md:flex-row mx-auto mt-2 md:mt-8 gap-6 px-4 md:px-8 py-4">
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

  const [icon, setIcon] = useState("");
  const encodedToken = localStorage.getItem("token");

  useEffect(() => {
    if (encodedToken) {
      const parts = encodedToken.split(".");
      if (parts.length === 3) {
        const TokenData = JSON.parse(atob(parts[1]));
        // console.log(TokenData);
        setIcon(TokenData.username.split("")[0]); // This will run only once when the component mounts
      }
    }
  }, [encodedToken]);

  const [filterSidebar, setFilterSidebar] = useState(false);

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

  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const dataBuilder = useCallback((data: ProductProps[]): ProductSection[] => {
    const AllFiltered = [
      ...data.slice(0, 92).filter((_, index) => index % 4 === 0),
      ...data.slice(92, 102),
    ];
    const headers = [
      ...new Set(AllFiltered.map((item) => item["Product Category"])),
    ];
    return headers.map((header) => ({
      header,
      products: AllFiltered.filter(
        (item) => item["Product Category"] === header
      ),
    }));
  }, []);

  // const StructureData = useCallback(
  //   (data: ProductProps[]): ProductSection[] => {
  //     const headers = [
  //       ...new Set(data.map((item) => item["Product Category"])),
  //     ];
  //     return headers.map((header) => ({
  //       header,
  //       products: data.filter((item) => item["Product Category"] === header),
  //     }));
  //   },
  //   []
  // );

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

  // Optional: Log token for debugging (uncomment if needed)
  // console.log(encodedToken);

  if (problem) {
    return (
      <>
        <Metadata
          title={"Glass Railing: Balcony Glass Railing & Staircase | Aluminum"}
          description={
            "At Imperio, we craft exquisite glass railing systems and aluminum railings that combine sleek design with unmatched durability. Our collection includes balcony glass railings, staircase glass railings, and aluminum handrails and cover panels. We provide elegant, modern railing solutions across India, including key cities like Mumbai, Pune, Bangalore, and Alibaug, offering a perfect blend of safety, style, and functionality."
          }
          keywords={
            "glass railing, aluminum railing, balcony glass railing, staircase glass railing, modern railing designs, aluminum handrails, cover panels, durable railings, frameless glass railings, stylish balcony designs, high-quality railings, corrosion-resistant glass railings, UV-resistant glass, custom glass railings, residential railing systems, commercial aluminum railings, innovative railing solutions, elegant glass railings, architectural railing designs, modern aluminum railings"
          }
          ogImage={productImage}
          ogUrl={"https://imperiorailing.com/products"}
        />
        <div className="lg:hidden flex top-[0%] fixed right-0 z-40 h-screen ">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <LuFilter
              className=" bg-[#fad000] text-black z-40 p-2 rounded-l-md"
              size={45}
            />
          </button>
        </div>
        <div
          className={`fixed right-0 top-0 h-screen w-[280px] bg-[--black] border-l-[3px] hover:border-white rounded-l-[2rem] shadow-2xl transition-transform duration-700 z-50 overflow-y-scroll sidebar-container ${
            sidebarOpen ? "translate-x-0 shadow-[#fad000]" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center m-4 pt-5">
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
              onClick={() => {
                setSelectedTypes([]), setSidebarOpen(false);
              }}
              className=" px-6 py-4 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap "
            >
              Reset Filters
            </button>
          </div>
        </div>
        <Hero
          img={productImage}
          altText="Hero image product page"
          header={
            <>
              Glass Railing Designs,
              <br />
              You’ve Never Seen Before
            </>
          }
          subHeader="Discover Imperio's durable glass railings for balconies and staircases. Serving Mumbai, Pune, Bangalore, and across India, our premium aluminum and custom glass solutions blend style and durability."
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
                  <h3 className="-text--third font-semibold">
                    {category.name}
                  </h3>

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

          <section>
            <ProductDescription
              heading={"Base"}
              subheading={"Aluminium Glass Railing Base Variants"}
              description={
                <>
                  "Explore our premium{" "}
                  <strong>aluminium glass railing bases</strong> and
                  <strong>balcony glass railings</strong>, designed for
                  durability and style. Customizable in matte or glossy
                  finishes, our <strong>aluminum railings</strong> are perfect
                  for both residential and commercial spaces. Proudly serving{" "}
                  <strong>Mumbai</strong>, <strong>Pune</strong>,
                  <strong>Hyderabad</strong>, <strong>Kolkata</strong>, and
                  beyond, we offer fast service and quick quotes. Get in touch
                  for a free consultation on{" "}
                  <strong>glass railing systems</strong> and{" "}
                  <strong>custom railing designs</strong> today!"
                </>
              }
            />

            <ProductDescription
              heading={"Handrail"}
              subheading={"Aluminium Glass Railing Handrail Variants"}
              description={
                <>
                  "Discover our premium{" "}
                  <strong>aluminum glass railing handrails</strong>, available
                  in a variety of customizable finishes to suit any aesthetic.
                  Choose from sleek matte or glossy color finishes, and add a
                  modern touch with our <strong>handrail LED strip</strong> to
                  beautifully illuminate your space. Whether you are in{" "}
                  <strong>Mumbai</strong>, <strong>Pune</strong>,
                  <strong>Hyderabad</strong>, or <strong>Kolkata</strong>, we
                  offer fast delivery across <strong>India</strong>, elevating
                  your <strong>glass railing systems</strong> with both style
                  and unmatched safety. Contact us today for a free consultation
                  and transform your space with our premium
                  <strong>aluminium railing solutions</strong>."
                </>
              }
            />

            <ProductDescription
              heading={"Height"}
              subheading={"Aluminium Glass Railing Height Variants"}
              description={
                <>
                  "Discover our premium{" "}
                  <strong>glass railing height options</strong>, expertly
                  designed to meet various <strong>style</strong> and{" "}
                  <strong>safety requirements</strong>. Select from{" "}
                  <strong>custom heights</strong> ranging from 900mm to 1200mm,
                  tailored for durability and sophistication. Whether you're in{" "}
                  <strong>Mumbai</strong>, <strong>Pune</strong>,{" "}
                  <strong>Hyderabad</strong>, or <strong>Kolkata</strong>, we
                  proudly serve all over <strong>India</strong>, offering
                  customized <strong>glass railing systems</strong> that elevate
                  your space. Perfect for residential and commercial projects,
                  our railings combine <strong>strength, functionality,</strong>{" "}
                  and
                  <strong>elegance</strong>.{" "}
                  <strong>Contact us today to find your perfect fit</strong> and
                  enhance your property with our premium solutions."
                </>
              }
            />

            <ProductDescription
              heading={"Height"}
              subheading={"Aluminium Glass Railing Height Variants"}
              description={
                <>
                  "Discover our versatile{" "}
                  <strong>glass types for railing systems</strong>, designed to
                  meet both <strong>aesthetic</strong> and{" "}
                  <strong>functional needs</strong>. Choose from a variety of
                  options including <strong>clear glass</strong>,
                  <strong>tinted glass</strong>, <strong>frosted glass</strong>,
                  and <strong>tempered glass</strong>, or opt for our enhanced{" "}
                  <strong>PVB</strong> and <strong>SGP laminated glass</strong>,
                  each crafted for <strong>strength</strong>,{" "}
                  <strong>visual appeal</strong>, and superior{" "}
                  <strong>impact resistance</strong>. Available for installation
                  in major cities such as <strong>Delhi</strong>,{" "}
                  <strong>Bangalore</strong>,<strong>Chennai</strong>, and{" "}
                  <strong>Ahmedabad</strong>, we proudly serve customers
                  nationwide. Our <strong>glass railing systems</strong> are
                  designed to enhance your space with{" "}
                  <strong>modern style</strong>, <strong>durability</strong>,
                  and <strong>maximum safety</strong>. Contact us today to
                  elevate your space with our custom solutions!"
                </>
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
        title={"Glass Railing: Balcony Glass Railing & Staircase | Aluminum"}
        description={
          "At Imperio, we craft exquisite glass railing systems and aluminum railings that combine sleek design with unmatched durability. Our collection includes balcony glass railings, staircase glass railings, and aluminum handrails and cover panels. We provide elegant, modern railing solutions across India, including key cities like Mumbai, Pune, Bangalore, and Alibaug, offering a perfect blend of safety, style, and functionality."
        }
        keywords={
          "glass railing, sgp and pvb laminated glass, aluminum railing, balcony glass railing, staircase glass railing, modern railing designs, aluminum handrails, cover panels, durable railings, frameless glass railings, stylish balcony designs, high-quality railings, corrosion-resistant glass railings, UV-resistant glass, custom glass railings, residential railing systems, commercial aluminum railings, innovative railing solutions, elegant glass railings, architectural railing designs, modern aluminum railings"
        }
        ogImage={productImage}
        ogUrl={"https://imperiorailing.com/products"}
      />
      {encodedToken ? (
        <></>
      ) : (
        <div className="flex top-[0%] fixed right-0 z-40 h-screen">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            <LuFilter
              className=" bg-[#fad000] text-black z-40 p-2 rounded-l-md"
              size={45}
            />
          </button>
        </div>
      )}

      <div
        className={`fixed right-0 top-0 h-screen w-[280px] bg-[--black] border-l-[3px] hover:border-white rounded-l-[2rem] shadow-2xl transition-transform duration-700 z-50 overflow-y-scroll sidebar-container ${
          sidebarOpen ? "translate-x-0 shadow-yellow-500" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center m-4 pt-5">
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
            onClick={() => {
              setSelectedTypes([]), setSidebarOpen(false);
            }}
            className=" px-6 py-4 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap "
          >
            Reset Filters
          </button>
        </div>
      </div>
      <Hero
        img={productImage}
        altText="Hero image for product"
        header={
          <>
            Glass Railing Designs,
            <br />
            You’ve Never Seen Before
          </>
        }
        subHeader="Discover Imperio's durable glass railings for balconies and staircases. Serving Mumbai, Pune, Bangalore, and across India, our premium aluminum and custom glass solutions blend style and durability."
        curve
      />
      {encodedToken ? (
        <div
          className={`fixed  left-0 top-0 h-screen w-[280px] bg-[--black] rounded-r-[2rem] border-r-[3px] shadow-2xl transition-transform duration-700 z-50 overflow-y-scroll sidebar-container ${
            filterSidebar
              ? "translate-x-0 shadow-yellow-500 "
              : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center m-4 pt-5">
            <h2 className="text-2xl YellowText whitespace-nowrap">
              Filter Products
            </h2>
            <button
              onClick={() => setFilterSidebar(false)}
              className="flex -text--grey"
            >
              <RxCross2 size={32} />
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
              onClick={() => {
                setSelectedTypes([]), setFilterSidebar(false);
              }}
              className=" px-6 py-4 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap "
            >
              Reset Filters
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}

      <main
        className={`flex ${
          encodedToken ? "flex-col" : "flex-row"
        } max-w-[85rem] mx-auto justify-center`}
      >
        {encodedToken ? (
          <nav className=" flex justify-between items-center py-3 px-2 lg:px-6 shadow-sm rounded-2xl border mx-2">
            <button onClick={() => setFilterSidebar(!filterSidebar)}>
              <CiFilter size={32} />
            </button>

            <div className="flex justify-center items-center gap-4 rounded-3xl shadow-2xl border px-4 focus:border-0">
              <IoSearchOutline size={20} />
              <input
                placeholder="Search..."
                type="text"
                className="h-8 w-[8rem] lg:w-[30rem] focus:outline-none"
              />
            </div>
            <Link
              id="icon"
              className="flex justify-center items-center gap-2 lg:gap-6"
              to="/cart"
            >
              <BsHandbag size={24} />
              <p className="h-8 w-8 rounded-full text-2xl bg-[#fad000] text-[#03237b] uppercase flex justify-center items-center Raleway">
                {icon}
              </p>
            </Link>
          </nav>
        ) : (
          <aside className="hidden lg:flex flex-col text-center md:top-32 md:mt-10 self-start p-4 w-[80%] md:w-[18%] mx-auto border rounded-xl mb-6">
            {filterCategories.map((category) => (
              <div key={category.name} className="p-2  mb-4">
                <div
                  onClick={() => toggleSection(category.name)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3 className="-text--third font-semibold">
                    {category.name}
                  </h3>
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
        )}
        <section className="pb-24 mx-2">
          {filteredProductSections &&
            filteredProductSections.map((section, index) => (
              <div key={index} className="w-full">
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
