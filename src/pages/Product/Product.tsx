import React, { useEffect, useRef, useCallback, useState } from "react";
import { useFetch } from "../../hooks";
import { useParams } from "react-router-dom";
import { ProductProps } from "../../types";
import { iconsFeature } from "./iconsMaping";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BlackButton } from "../../components";

type prop1 = {
  img: string;
  alt: string;
};
type prop2 = {
  icon: ({ size, color }: { size?: number; color?: string }) => JSX.Element;
  feature: string;
};

interface ExpandableTextProps {
  className?: string;
  maxLength: number;
  children: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  className = "",
  children,
  maxLength,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded
    ? children + " "
    : children.slice(0, maxLength) + "... ";

  return (
    <div className={className}>
      <p>{displayedText}</p>
      {children.length > maxLength && (
        <div
          onClick={toggleExpansion}
          className="text-[--third] underline font-bold cursor-pointer"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </div>
      )}
    </div>
  );
};

const MemoProduct: React.FC = () => {
  const { data } = useFetch(
    "https://script.googleusercontent.com/a/macros/imperiorailing.com/echo?user_content_key=Ay_XW6emxmiwQ7Lncs10OYWdnFeTW0upS6uckktFqOCWvYse7Um3IucncElvDr3F6e1U0oIbcefbm_KsKRb7lGfzRJKfhSKKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKC1zka5stJV6CJ8rbxa1V-UsEmAp_psx4LPWV2VVapqoanwc9S-o8wsibsbmz75VIWJ6s0UnHNjn57l_O834N2gmbbRpWFxXoNaVLQCjst0OCroO14vipAt9G3wLhldpT5hqak0MdSxiw&lib=McNTorF1LzcGC_6h_0B7S9zQVEnUvMwCs"
  );
  const productData = useRef<ProductProps>();
  const featureData = useRef<prop2[] | null>(null);
  const [imageData, setImageData] = useState<prop1[]>();
  const { productID } = useParams();

  const processData = useCallback(() => {
    if (data) {
      productData.current = data.find(
        (item) => item["Random Code to link the product"] === productID
      );
      if (productData.current) {
        const alttext = productData.current["Alternative text for other image"]
          .split(",")
          .map((item) => item.trim());
        const arr = productData.current["Min 3 Extra images"]
          .split(",")
          .map((item, index) => ({ img: item.trim(), alt: alttext[index] }));
        arr.unshift({
          img: productData.current["Main Image"],
          alt: productData.current["Alternative text"],
        });

        setImageData(arr);

        featureData.current = productData.current["Features (Min 3)"]
          .split(",")
          .map((item) => {
            const trimmedItem = item.trim() as keyof typeof iconsFeature;
            return { icon: iconsFeature[trimmedItem], feature: trimmedItem };
          });
      }
    }
  }, [data, productID]);

  useEffect(() => {
    processData();
  }, [processData]);

  if (!productData.current || !featureData.current || !imageData) {
    return <div>Loading...</div>;
  }

  const handleLeftClick = () => {
    if (imageData) {
      const temp = [...imageData];
      const value = temp.pop();
      if (value) {
        temp.unshift(value);
      }
      setImageData(temp);
    }
  };

  const handleRightClick = () => {
    if (imageData) {
      const temp = [...imageData];
      const value = temp.shift();
      if (value) {
        temp.push(value);
      }
      setImageData(temp);
    }
  };

  return (
    <main className="py-4 px-12 md:px-32 xl:px-44">
      <header className="pb-8">
        <h3 className="YellowText text-[1.75rem] md:text-4xl xl:text-[2.5rem]">
          {productData.current["Product Category"]}
        </h3>
        <h1 className="Raleway text-[--third] text-4xl md:text-[2.8rem]  xl:text-5xl">
          {productData.current["Product Name"] +
            " " +
            productData.current["Product Code"]}
        </h1>
      </header>
      <section className="md:h-[71vh] flex justify-between max-md:flex-col max-md:gap-6">
        <aside className="flex flex-col justify-between gap-4 w-full md:w-[18%] overflow-hidden max-md:order-3">
          <div className="flex flex-col text-base gap-2 justify-center">
            {featureData.current.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <item.icon
                  size={window.innerWidth < 700 ? 24 : 36}
                  color="#03247b"
                />
                <p className="text-base font-semibold">
                  {item.feature.toUpperCase()}
                </p>
              </div>
            ))}
            <div className="border-t-2 border-t-[--third] max-md:space-y-8 max-md:w-1/2">
              <p className="text-base font-semibold mt-2">
                SUTIABLE FOR GLASS UPTO
              </p>
              <h5 className="text-5xl text-[--third]">
                {productData.current["Glass Thickness"]}
              </h5>
            </div>
          </div>

          <div>
            <img
              className="rounded-4xl cursor-pointer hidden md:block"
              onClick={handleLeftClick}
              src={imageData[imageData.length - 1].img}
              alt={imageData[imageData.length - 1].alt}
            />
          </div>
        </aside>
        <center className="flex w-full max-md:mb-6 md:w-[47.5rem] justify-between items-center text-2xl max-md:order-1">
          <GoChevronLeft className="cursor-pointer" onClick={handleLeftClick} />
          <img
            className="rounded-4xl max-h-[70vh] max-w-[70vw] md:max-h-[40.5rem] md:max-w-[40.5rem] overflow-hidden"
            src={imageData[0].img}
            alt={imageData[0].alt}
          />
          <GoChevronRight
            className="cursor-pointer"
            onClick={handleRightClick}
          />
        </center>
        <aside className="flex flex-col gap-4 w-full md:w-[20%] overflow-hidden justify-between max-md:order-2">
          <div className="flex flex-col gap-6 md:gap-8">
            <header className="text-[--third] Raleway text-2xl block md:hidden">
              Detailed Description.
            </header>
            <ExpandableText maxLength={100} className="text-[--third]">
              {productData.current["Short Description"]}
            </ExpandableText>
            <BlackButton className="hidden md:block">
              View other products
            </BlackButton>
          </div>
          <div>
            <img
              className="rounded-4xl cursor-pointer hidden md:block"
              onClick={handleRightClick}
              src={imageData[1].img}
              alt={imageData[1].alt}
            />
          </div>
        </aside>
      </section>
    </main>
  );
};

export const Product = React.memo(MemoProduct);
