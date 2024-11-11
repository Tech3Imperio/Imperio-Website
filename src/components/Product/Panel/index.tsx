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
      <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
        <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
          <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
            Glass Railing {header}
          </h2>
          <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
            High Quality & Premium Aluminium Glass Railing {header} variants.
          </h3>
        </div>
        <div className="md:w-[40%]">
          {header === "Base" ? (
            <p className="text-justify italic text-[--grey]">
              "Discover our premium aluminum glass railing bases, customizable
              in matte and glossy finishes to suit any style. Crafted for
              durability and elegance, our weather-resistant bases combine
              safety with innovation. With quick service and fast quotations, we
              proudly deliver across India, including cities like Mumbai, Pune,
              Hyderabad, and Kolkata."
            </p>
          ) : (
            <p className="text-justify italic text-[--grey]">
              "Explore our premium aluminum glass railing handrail options,
              featuring customizable finishes to suit any style. Choose from
              matte and glossy color finishes, plus a brighter handrail LED
              strip to elegantly illuminate your space. Available in major
              cities like Mumbai, Pune, Hyderabad, Kolkata, we deliver all over
              India, enhancing glass railing systems nationwide with style and
              safety."
            </p>
          )}
        </div>
      </div>
      <div className="pt-5 px-4 phone:px-8 tablet:px-16 laptop:px-24 xl:px-32 2xl:px-44">
        {/* Header */}
        {/* <h2 className="text-[2.25rem] phone:text-[2.5rem] tablet:text-[2.75rem] laptop:text-5xl text-[--third] font-normal">
      Glass Railing {header}
    </h2> */}

        {/* Product Grid */}
        <div className="grid gap-10 xl:gap-20 py-2 phone:py-4 tablet:py-8 laptop:py-12 grid-cols-2 xl:grid-cols-4 justify-items-center">
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
