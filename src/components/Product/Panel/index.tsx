import React from "react";
import { ProductPanelProps } from "../../../types";
import { ProductCard } from "../Card";

// ProductPanel component definition
export const ProductPanel: React.FC<ProductPanelProps> = ({
  header, // Prop: Header text for the panel
  productDetail, // Prop: Array of product details
}) => {
  return (
    <div className="pt-5 phone:pt-12 laptop:pt-24 px-4 phone:px-8 tablet:px-16 laptop:px-24 xl:px-32 2xl:px-44">
      {/* Header */}
      <h1 className="text-[2.25rem] phone:text-[2.5rem] tablet:text-[2.75rem] laptop:text-5xl text-[--third] font-normal">
        {header}
      </h1>
      {/* Product Grid */}
      <div className="grid gap-10 xl:gap-20 py-2 phone:py-4 tablet:py-8 laptop:py-16 grid-cols-2 xl:grid-cols-4 justify-items-center">
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
  );
};
