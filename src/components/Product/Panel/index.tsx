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
      {localStorage.getItem("token") ? (
        <></>
      ) : (
        <div className="max-w-[85rem] flex flex-col md:flex-row mx-auto mt-2 md:mt-8 gap-6 px-4 md:px-8 py-4">
          <div className="flex flex-col md:w-[55%] gap-4">
            {header ? (
              <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
                {header}
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
                "Discover our premium <strong>glass railing bases</strong> in
                India, made of durable aluminum and customizable in matte or
                glossy finishes to match any style. With quick service and fast
                quotations, we proudly deliver nationwide, including{" "}
                <strong>Mumbai</strong>, <strong>Pune</strong>,{" "}
                <strong>Hyderabad</strong>, and <strong>Kolkata</strong>.
                Contact us for a free quote today!"
              </p>
            ) : header === "Handrail" ? (
              <p className="text-justify italic text-[--grey]">
                "Explore our premium{" "}
                <strong>aluminum glass railing handrail</strong> options,
                featuring customizable finishes to suit any style. Choose from
                matte and glossy color finishes, plus a brighter{" "}
                <strong>handrail LED strip</strong> to elegantly illuminate your
                space. Available in major cities like <strong>Mumbai</strong>,{" "}
                <strong>Pune</strong>, <strong>Hyderabad</strong>, and{" "}
                <strong>Kolkata</strong>, we deliver all over{" "}
                <strong>India</strong>, enhancing{" "}
                <strong>glass railing systems</strong> nationwide with unmatched
                style and safety. Contact us today to transform your space!"
              </p>
            ) : header === "Glass Height" ? (
              <p className="text-justify italic text-[--grey]">
                "Explore our premium{" "}
                <strong>glass railing height options</strong>, designed to meet
                diverse safety and style requirements. Choose from{" "}
                <strong>custom heights</strong> ranging from 900mm to 1200mm,
                each crafted for <strong>durability and sophistication</strong>.
                Available in major cities like <strong>Mumbai</strong>,{" "}
                <strong>Pune</strong>, <strong>Hyderabad</strong>, and{" "}
                <strong>Kolkata</strong>, we deliver across{" "}
                <strong>India</strong>, enhancing{" "}
                <strong>glass railing systems</strong> nationwide with unmatched
                style, safety, and functionality.{" "}
                <strong>Contact us today to find your perfect fit!</strong>"
              </p>
            ) : (
              <p className="text-justify italic text-[--grey]">
                "Discover our versatile{" "}
                <strong>glass types for railing systems</strong>, tailored to
                fit various aesthetic and functional needs. Choose from{" "}
                <strong>clear</strong>, <strong>tinted</strong>,{" "}
                <strong>frosted</strong>, or <strong>tempered glass</strong>{" "}
                options, each crafted for <strong>strength</strong> and{" "}
                <strong>visual appeal</strong>. Available for installation in
                major cities such as <strong>Delhi</strong>,{" "}
                <strong>Bangalore</strong>, <strong>Chennai</strong>, and{" "}
                <strong>Ahmedabad</strong>, we deliver nationwide, enhancing
                spaces with modern style, durability, and safety in every{" "}
                <strong>glass railing system</strong>. Contact us to elevate
                your space today!"
              </p>
            )}
          </div>
        </div>
      )}

      <div className="pt-5">
        {/* Header */}
        {/* <h2 className="text-[2.25rem] phone:text-[2.5rem] tablet:text-[2.75rem] laptop:text-5xl text-[--third] font-normal">
      Glass Railing {header}
    </h2> */}

        {/* Product Grid */}
        <div
          className={`grid py-2 gap-2 phone:py-4 grid-cols-2  ${
            localStorage.getItem("token")
              ? "xl:grid-cols-4 lg:gap-20"
              : "xl:grid-cols-3 gap-6"
          } justify-items-center`}
        >
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
