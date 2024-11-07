import React from "react";
import { Hero, ProductPanel, Quote } from "../../components";
import { productImage } from "../../assets/Images";
import { useProduct } from "../../hooks";
import { useEffect, useState, useCallback } from "react";
import { ProductProps, ProductSection } from "../../types";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils";
import { Product } from "./Product/Product";
import "./style.css";
import Metadata from "../../components/Metatag/Metatag";

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
      <>
        <Metadata
          title={
            "Glass Railing Systems Products | Aluminium Glass railing Base |  Aluminium Glass railing Handrail"
          }
          description={
            "Imperio’s glass railing systems in india offer durable balcony glass railings, staircase glass railings, and aluminum glass railings, merging modern aesthetics with lasting safety. We offer glass railings all over India, with a strong presence in states like Maharashtra, Goa, Gujarat, etc and cities including Mumbai, Pune, Alibaug, Bangluru, etc"
          }
          keywords={
            "glass railings, aluminum railings, frameless glass, durable railings, modern railing systems, corrosion-resistant railings, UV-resistant glass railings, residential glass railings, commercial aluminum railings, stylish railing solutions, high-quality glass railings, elegant railing designs, safety and functionality, innovative railing systems, custom glass railings, architectural railing solutions, aluminium glass railing"
          }
          ogImage={productImage}
          ogUrl={"https://www.imperiorailing.com/products"}
        />
        <Hero
          img={productImage}
          altText="Hero image for product"
          header="Glass Railing Systems"
          subHeader="Imperio’s Glass Railing Systems in India deliver high-durability balcony, staircase, and aluminum glass railings, blending modern style with lasting safety for any space."
          curve
        />
        <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
          <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
            <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
              Aluminium Glass Railing Base
            </h2>
            <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
              High Quality & Premium Aluminium Glass Railing Base variants.
            </h3>
          </div>
          <div className="md:w-[40%]">
            <p className="text-justify italic text-[--grey]">
              "Discover our premium aluminum glass railing bases, customizable
              in matte and glossy finishes to suit any style. Crafted for
              durability and elegance, our weather-resistant bases combine
              safety with innovation. With quick service and fast quotations, we
              proudly deliver across India, including cities like Mumbai, Pune,
              Hyderabad, and Kolkata."
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          {/* <div className="w-[8rem] h-[8rem] border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div> */}
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          <div className="mt-4 text-2xl">Loading...</div>
          {countdown > 0 && <div className="mt-2 text-xl">{countdown}</div>}
        </div>
        <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-8 p-4">
          <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
            <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
              Aluminium Glass Railing Handrail
            </h2>
            <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
              High Quality & Premium Aluminium Glass Railing Handrail variants.
            </h3>
          </div>
          <div className="md:w-[40%]">
            <p className="text-justify italic text-[--grey]">
              "Explore our premium aluminum glass railing handrail options,
              featuring customizable finishes to suit any style. Choose from
              matte and glossy color finishes, plus a brighter handrail LED
              strip to elegantly illuminate your space. Available in major
              cities like Mumbai, Pune, Hyderabad, Kolkata, we deliver all over
              India, enhancing glass railing systems nationwide with style and
              safety."
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          {/* <div className="w-[8rem] h-[8rem] border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div> */}
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
          <div className="mt-4 text-2xl">Loading...</div>
          {countdown > 0 && <div className="mt-2 text-xl">{countdown}</div>}
        </div>
      </>
    );
  }

  return (
    <>
      <Metadata
        title={
          "Glass Railing Systems Products | Aluminium Glass railing Base |  Aluminium Glass railing Handrail"
        }
        description={
          "Imperio’s glass railing systems in india offer durable balcony glass railings, staircase glass railings, and aluminum glass railings, merging modern aesthetics with lasting safety. We offer glass railings all over India, with a strong presence in states like Maharashtra, Goa, Gujarat, etc and cities including Mumbai, Pune, Alibaug, Bangluru, etc"
        }
        keywords={
          "glass railings, aluminum railings, frameless glass, durable railings, modern railing systems, corrosion-resistant railings, UV-resistant glass railings, residential glass railings, commercial aluminum railings, stylish railing solutions, high-quality glass railings, elegant railing designs, safety and functionality, innovative railing systems, custom glass railings, architectural railing solutions"
        }
        ogImage={productImage}
        ogUrl={"https://www.imperiorailing.com/products"}
      />
      <main>
        <Hero
          img={productImage}
          altText="Hero image for product"
          header="Glass Railings Systems"
          subHeader="Imperio’s Glass Railing Systems in India deliver high-durability balcony, staircase, and aluminum glass railings, blending modern style with lasting safety for any space."
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
