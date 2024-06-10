import React, { useEffect, useRef, useCallback } from "react";
import { useFetch } from "../../hooks";
import { useParams } from "react-router-dom";
import { ProductProps } from "../../types";
import { iconsFeature } from "./iconsMaping";

type prop = {
  icon: () => JSX.Element;
  feature: string;
};

const MemoProduct: React.FC = () => {
  const { data, error, loading } = useFetch(
    "https://sheetdb.io/api/v1/7kytl3y2afe0p"
  );
  const productData = useRef<ProductProps>();
  const imageData = useRef<string[]>();
  const featureData = useRef<prop[]>();
  const { productID } = useParams();

  const processData = useCallback(() => {
    if (data) {
      productData.current = data.find(
        (item) => item["Random Code to link the product"] === productID
      );
      if (productData.current) {
        imageData.current = productData.current["Min 3 Extra images"]
          .split(",")
          .map((item) => item.trim());
        imageData.current.unshift(productData.current["Main Image"]);

        featureData.current = productData.current.Features.split(",").map(
          (item) => {
            const trimmedItem = item.trim() as keyof typeof iconsFeature; // Ensure type safety
            return { icon: iconsFeature[trimmedItem], feature: trimmedItem };
          }
        );
      }
    }
  }, [data, productID]);

  useEffect(() => {
    processData();
  }, [processData]);
  if (!productData.current || !featureData.current || !imageData.current) {
    return <main>Data Not Found</main>;
  }

  return (
    <main>
      <header>
        <h3>{productData.current["Product Category"]}</h3>
        <h1>
          {productData.current["Product Name"] +
            " " +
            productData.current["Product Code"]}
        </h1>
      </header>
      <section>
        <aside>
          {featureData.current.map((item) => (
            <>
              <item.icon />
              <p className="text-base mt-1 font-normal">{item.feature}</p>
            </>
          ))}
        </aside>
        <center></center>
        <aside></aside>
      </section>
    </main>
  );
};

export const Product = React.memo(MemoProduct);
