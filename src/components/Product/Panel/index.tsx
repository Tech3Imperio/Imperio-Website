import React from "react";
import { ProductPanelProps } from "../../../types";
import { ProductCard } from "../Card";

export const ProductPanel: React.FC<ProductPanelProps> = ({
  header,
  productDetail,
}) => {
  return (
    <div className="px-44 pt-24">
      <h1 className="text-5xl text-[--third] font-normal">{header}</h1>
      <div className="flex pt-16 px-16 flex-wrap justify-center gap-9">
        {productDetail.map((product) => (
          <ProductCard
            key={product["Random Code to link the product"]}
            img={product["Main Image"]}
            path={product["Random Code to link the product"]}
            alt={product["Alternative text"]}
            productName={product["Product Name"]}
            productDetail={product["Short Description"]}
            data={product}
          />
        ))}
      </div>
    </div>
  );
};
