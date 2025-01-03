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
              <h2 className=" text-[#fad000] text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
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
                "Explore our premium{" "}
                <strong>aluminium glass railing bases</strong> and
                <strong> balcony glass railings</strong>, designed for
                durability and style. Customizable in matte or glossy finishes,
                our <strong>aluminum railings</strong> are perfect for both
                residential and commercial spaces. Proudly serving{" "}
                <strong>Mumbai</strong>, <strong>Pune</strong>,
                <strong>Hyderabad</strong>, <strong>Kolkata</strong>, and
                beyond, we offer fast service and quick quotes. Get in touch for
                a free consultation on <strong>glass railing systems</strong>{" "}
                and <strong>custom railing designs</strong> today!"
              </p>
            ) : header === "Handrail" ? (
              <p className="text-justify italic text-[--grey]">
                "Discover our premium{" "}
                <strong>aluminum glass railing handrails</strong>, available in
                a variety of customizable finishes to suit any aesthetic. Choose
                from sleek matte or glossy color finishes, and add a modern
                touch with our <strong>handrail LED strip</strong> to
                beautifully illuminate your space. Whether you are in{" "}
                <strong>Mumbai</strong>, <strong>Pune</strong>,
                <strong>Hyderabad</strong>, or <strong>Kolkata</strong>, we
                offer fast delivery across <strong>India</strong>, elevating
                your <strong>glass railing systems</strong> with both style and
                unmatched safety. Contact us today for a free consultation and
                transform your space with our premium
                <strong>aluminium railing solutions</strong>."
              </p>
            ) : header === "Glass Height" ? (
              <p className="text-justify italic text-[--grey]">
                "Discover our premium{" "}
                <strong>glass railing height options</strong>, expertly designed
                to meet various <strong>style</strong> and{" "}
                <strong>safety requirements</strong>. Select from{" "}
                <strong>custom heights</strong> ranging from 900mm to 1200mm,
                tailored for durability and sophistication. Whether you're in{" "}
                <strong>Mumbai</strong>, <strong>Pune</strong>,{" "}
                <strong>Hyderabad</strong>, or <strong>Kolkata</strong>, we
                proudly serve all over <strong>India</strong>, offering
                customized <strong>glass railing systems</strong> that elevate
                your space. Perfect for residential and commercial projects, our
                railings combine <strong>strength, functionality,</strong> and
                <strong>elegance</strong>.{" "}
                <strong>Contact us today to find your perfect fit</strong> and
                enhance your property with our premium solutions."
              </p>
            ) : (
              <p className="text-justify italic text-[--grey]">
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
                <strong>modern style</strong>, <strong>durability</strong>, and{" "}
                <strong>maximum safety</strong>. Contact us today to elevate
                your space with our custom solutions!"
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
