import React from "react";
import { ProductPanelProps } from "../../../types";
import { ProductCard } from "../Card";

// ProductPanel component definition
export const ProductPanel: React.FC<ProductPanelProps> = ({
  header, // Prop: Header text for the panel
  productDetail, // Prop: Array of product details
}) => {
  return (
    <>
      <div className="max-w-6xl flex flex-col md:flex-row mx-auto mt-2 md:mt-8 gap-6 px-2 md:px-8 py-4">
        <div className="flex flex-col md:w-[55%] gap-4">
          {header ? (
            <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
              Glass Railing {header}
            </h2>
          ) : (
            <></>
          )}
          <h3 className="text-[--third] flex flex-wrap Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
            Aluminium Glass Railing {header} variants.
          </h3>
        </div>
        <div className="md:w-[45%]">
          {header === "Base" ? (
            <p className="text-justify italic text-[--grey]">
              "Discover our premium aluminum glass railing bases, customizable
              in matte and glossy finishes to suit any style. With quick service
              and fast quotations, we proudly deliver across India, including
              cities like Mumbai, Pune, Hyderabad, and Kolkata."
            </p>
          ) : header === "Handrail" ? (
            <p className="text-justify italic text-[--grey]">
              "Explore our premium aluminum glass railing handrail options,
              featuring customizable finishes to suit any style. Choose from
              matte and glossy color finishes, plus a brighter handrail LED
              strip to elegantly illuminate your space. Available in major
              cities like Mumbai, Pune, Hyderabad, Kolkata, we deliver all over
              India, enhancing glass railing systems nationwide with style and
              safety."
            </p>
          ) : (
            <p className="text-justify italic text-[--grey]">
              "Explore our premium glass railing height options, designed to
              meet diverse safety and style requirements. Choose from heights
              ranging from 900mm to 1200mm, each crafted for durability and
              sophistication. Available in major cities like Mumbai, Pune,
              Hyderabad, and Kolkata, we deliver across India, enhancing glass
              railing systems nationwide with style, safety, and functionality."
            </p>
          )}
        </div>
      </div>
      <div className="pt-5 px-2 md:px-8">
        {/* Header */}
        {/* <h2 className="text-[2.25rem] phone:text-[2.5rem] tablet:text-[2.75rem] laptop:text-5xl text-[--third] font-normal">
      Glass Railing {header}
    </h2> */}

        {/* Product Grid */}
        <div className="grid gap-6 py-2 phone:py-4 grid-cols-2 xl:grid-cols-4 justify-items-center">
          {/* Mapping through each product detail */}
          {productDetail.map((product) => (
            <ProductCard
              key={product["Random Code to link the product"]} // Unique key for each product card
              img={product["Main Image"]} // Image source
              path={product["Random Code to link the product"]} // Link path for the product
              alt={product["Alternative text"]} // Alternative text for image
              productName={product["Product Name"]} // Product name
              data={product} // Additional product data (full product object)
            />
          ))}
        </div>
      </div>
    </>
  );
};
