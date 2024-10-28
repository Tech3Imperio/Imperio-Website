import React from "react";
import { Hero, ProductPanel, Quote } from "../../components";
import { productImage } from "../../assets/Images";
import { useProduct } from "../../hooks";
import { useEffect, useState, useCallback } from "react";
import { ProductProps, ProductSection } from "../../types";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils";
import { Product } from "./Product/Product";
import "./style.css";
// import Metadata from "../../components/Metatag/Metatag";

const MemoProducts: React.FC = () => {
  const { data, error, loading } = useProduct(
    "https://script.google.com/macros/s/AKfycbwE-1Stl8t8_XrB5MuRPQ1hROKpo3mYynDPnI1vNX6U5vakITchmA6nfmzQt8sYpqFIjw/exec"
  );
  // old Api link if current link is not working then use below Api link
  // https://script.googleusercontent.com/a/macros/imperiorailing.com/echo?user_content_key=Ay_XW6emxmiwQ7Lncs10OYWdnFeTW0upS6uckktFqOCWvYse7Um3IucncElvDr3F6e1U0oIbcefbm_KsKRb7lGfzRJKfhSKKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKC1zka5stJV6CJ8rbxa1V-UsEmAp_psx4LPWV2VVapqoanwc9S-o8wsibsbmz75VIWJ6s0UnHNjn57l_O834N2gmbbRpWFxXoNaVLQCjst0OCroO14vipAt9G3wLhldpT5hqak0MdSxiw&lib=McNTorF1LzcGC_6h_0B7S9zQVEnUvMwCs
  const [productSections, setProductSections] = useState<ProductSection[]>([]);
  const [problem, setProblem] = useState<boolean>(false);

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

  if (problem) {
    return (
      <div>
        <Hero
          img={productImage}
          altText="Hero image for product"
          header="Our Products"
          subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
          curve
        />
        <div className="flex flex-col items-center justify-center min-h-screen -mt-[10rem]">
          {/* <div className="w-[8rem] h-[8rem] border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div> */}
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          <div className="mt-4 text-2xl">Loading...</div>
          {countdown > 0 && <div className="mt-2 text-xl">{countdown}</div>}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <Metadata
        title={"Products - Imperio Railing Systems"}
        description={
          "Revitalize your space with Imperio Railing Systems, your go-to source for stunning glass and aluminum railings. Our expertly crafted, frameless glass railings enhance balconies and staircases, while our durable aluminum options withstand the elements. Built from premium materials, our railings offer exceptional corrosion and UV resistance, making them ideal for both residential and commercial use. Discover the perfect blend of style, safety, and innovation with Imperio Railing Systems—where elegance meets durability!"
        }
        keywords={
          "glass, railing, aluminum, glass railing, aluminum railing, frameless glass, durable railings, modern railing systems, corrosion resistant railings, UV resistant glass railings, residential glass railings, commercial aluminum railings, stylish railing solutions, high-quality glass railings, elegant railing designs, safety and functionality, innovative railing systems, custom glass railings, architectural railing solutions"
        }
        ogImage={productImage}
        ogUrl={"https://www.imperiorailing.com/products"}
      /> */}
      <main>
        <Hero
          img={productImage}
          altText="Hero image for product"
          header="Our Products"
          subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
          curve
        />
        <section className="pb-24">
          {productSections.map((section, index) => (
            <ProductPanel
              key={index}
              header={section.header}
              productDetail={section.products}
            />
          ))}
        </section>
        <Quote />
        {/* <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div> */}
      </main>
    </>
  );
};
export const Products = React.memo(MemoProducts);
export { Product };
