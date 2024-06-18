import React from "react";
import { ProductPanelProps } from "../../../types";
import { ProductCard } from "../Card";

export const ProductPanel: React.FC<ProductPanelProps> = ({
  header,
  productDetail,
}) => {
  return (
    <div className="pt-5 phone:pt-12 laptop:pt-24 px-4 phone:px-8 tablet:px-16 laptop:px-24 xl:px-32 2xl:px-44">
      <h1 className="text-[2.25rem] phone:text-[2.5rem] tablet:text-[2.75rem] laptop:text-5xl text-[--third] font-normal">
        {header}
      </h1>
      <div className="grid gap-10 xl:gap-20 py-2 phone:py-4 tablet:py-8 laptop:py-16 grid-cols-2 xl:grid-cols-4 justify-items-center">
        {productDetail.map((product) => (
          <ProductCard
            key={product["Random Code to link the product"]}
            img={product["Main Image"]}
            path={product["Random Code to link the product"]}
            alt={product["Alternative text"]}
            productName={product["Product Name"]}
            data={product}
          />
        ))}
      </div>
    </div>
  );
};
