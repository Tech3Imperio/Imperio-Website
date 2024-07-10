import React from "react";
import { Hero, ProductPanel, Quote } from "../../components";
import { productImage } from "../../assets/Images";
import { useProduct } from "../../hooks";
import { useEffect, useState, useCallback } from "react";
import { ProductProps, ProductSection } from "../../types";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils";
import { Product } from "./Product/Product";

const MemoProducts: React.FC = () => {
  const { data, error, loading } = useProduct(
    "https://script.googleusercontent.com/a/macros/imperiorailing.com/echo?user_content_key=Ay_XW6emxmiwQ7Lncs10OYWdnFeTW0upS6uckktFqOCWvYse7Um3IucncElvDr3F6e1U0oIbcefbm_KsKRb7lGfzRJKfhSKKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKC1zka5stJV6CJ8rbxa1V-UsEmAp_psx4LPWV2VVapqoanwc9S-o8wsibsbmz75VIWJ6s0UnHNjn57l_O834N2gmbbRpWFxXoNaVLQCjst0OCroO14vipAt9G3wLhldpT5hqak0MdSxiw&lib=McNTorF1LzcGC_6h_0B7S9zQVEnUvMwCs"
  );
  const [productSections, setProductSections] = useState<ProductSection[]>([]);
  const [problem, setProblem] = useState<boolean>(false);

  const dataBuilder = useCallback((data: ProductProps[]): ProductSection[] => {
    const headers = [...new Set(data.map((item) => item["Product Category"]))];
    return headers.map((header) => ({
      header,
      products: data.filter((item) => item["Product Category"] === header),
    }));
  }, []);

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
        <div className=" flex tablet:flex-col laptop:flex-row xl:flex-row py-10">
          <div className=" h-[150px] w-[150px] rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2dcXOTB1AuIDs16YLNb0SpYRkcu6efui-A&s"
              alt="A50"
              height={100}
              width={100}
            />
          </div>
          <div className=" h-[150px] w-[150px] rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2dcXOTB1AuIDs16YLNb0SpYRkcu6efui-A&s"
              alt="L50"
              height={100}
              width={100}
            />
          </div>
          <div className=" h-[150px] w-[150px] rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2dcXOTB1AuIDs16YLNb0SpYRkcu6efui-A&s"
              alt="D55"
              height={100}
              width={100}
            />
          </div>
          <div className=" h-[150px] w-[150px] rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2dcXOTB1AuIDs16YLNb0SpYRkcu6efui-A&s"
              alt="A50"
              height={100}
              width={100}
            />
          </div>
          <div className=" h-[150px] w-[150px] rounded-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2dcXOTB1AuIDs16YLNb0SpYRkcu6efui-A&s"
              alt="A50"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <title>Products - Imperio Railing Systems</title>
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
    </main>
  );
};
export const Products = React.memo(MemoProducts);
export { Product };
