// import React, { useEffect, useRef, useCallback, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { ProductProps } from "../../../types";
// import { BlackButton } from "../../../components";
// import { iconsFeature } from "../../../assets/Data";

// type ImageData = {
//   img: string;
//   alt: string;
// };

// type FeatureData = {
//   icon: ({ size, color }: { size?: number; color?: string }) => JSX.Element;
//   feature: string;
// };

// interface ExpandableTextProps {
//   className?: string;
//   maxLength: number;
//   children: string;
// }

// const ExpandableText: React.FC<ExpandableTextProps> = ({
//   className = "",
//   children,
//   maxLength,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const displayedText = isExpanded
//     ? children + " "
//     : children.slice(0, maxLength) + "... ";

//   return (
//     <div className={className}>
//       <p>{displayedText}</p>
//       {children.length > maxLength && (
//         <div
//           onClick={toggleExpansion}
//           className="text-[--third] underline font-bold cursor-pointer"
//         >
//           {isExpanded ? "Show Less" : "Show More"}
//         </div>
//       )}
//     </div>
//   );
// };

// const MemoProduct: React.FC = () => {
//   const location = useLocation();
//   const [productData, setProductData] = useState<ProductProps | null>(null);
//   const [imageData, setImageData] = useState<ImageData[]>([]);
//   const featureData = useRef<FeatureData[]>([]);

//   const processData = useCallback(() => {
//     if (productData) {
//       const altTextArray = productData["Alternative text for other image"]
//         .split(",")
//         .map((text) => text.trim());

//       const images = productData["Min 3 Extra images"]
//         .split(",")
//         .map((img, index) => ({ img: img.trim(), alt: altTextArray[index] }));

//       images.unshift({
//         img: productData["Main Image"],
//         alt: productData["Alternative text"],
//       });

//       setImageData(images);

//       featureData.current = productData["Features (Min 3)"]
//         .split(",")
//         .map((feature) => {
//           const trimmedFeature = feature.trim() as keyof typeof iconsFeature;
//           return {
//             icon: iconsFeature[trimmedFeature],
//             feature: trimmedFeature,
//           };
//         });
//     }
//   }, [productData]);

//   useEffect(() => {
//     if (location.state) {
//       setProductData(location.state as ProductProps);
//     }
//   }, [location.state]);

//   useEffect(() => {
//     processData();
//   }, [processData]);

//   if (!productData || !imageData.length) {
//     return <div>Loading...</div>;
//   }

//   const handleLeftClick = () => {
//     setImageData((prev) => {
//       const temp = [...prev];
//       const lastImage = temp.pop();
//       if (lastImage) {
//         temp.unshift(lastImage);
//       }
//       return temp;
//     });
//   };

//   const handleRightClick = () => {
//     setImageData((prev) => {
//       const temp = [...prev];
//       const firstImage = temp.shift();
//       if (firstImage) {
//         temp.push(firstImage);
//       }
//       return temp;
//     });
//   };

//   return (
//     <main className="py-4 px-12 pb-28 tablet:px-32 xl:px-44">
//       <header className="pb-8">
//         <h3 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
//           {productData["Product Category"]}
//         </h3>
//         <h1 className="Raleway text-[--third] text-4xl tablet:text-[2.8rem] xl:text-5xl">
//           {productData["Product Name"] + " " + productData["Product Code"]}
//         </h1>
//       </header>
//       <section className="xl:h-[75vh]  flex justify-between max-xl:flex-col max-xl:gap-6">
//         <aside className="flex flex-col justify-between gap-4 w-full xl:w-[18%] overflow-hidden max-xl:order-3">
//           <div className="flex flex-col text-base gap-2 justify-center">
//             {featureData.current.map((item, index) => (
//               <div key={index} className="flex flex-col gap-3">
//                 <item.icon
//                   size={window.innerWidth < 700 ? 24 : 36}
//                   color="#03247b"
//                 />
//                 <p className="text-base font-semibold">
//                   {item.feature.toUpperCase()}
//                 </p>
//               </div>
//             ))}
//             <div className="border-t-2 border-t-[--third] max-xl:space-y-8 max-xl:w-1/2">
//               <p className="text-base font-semibold mt-2">
//                 SUITABLE FOR GLASS UP TO
//               </p>
//               <h5 className="text-5xl text-[--third]">
//                 {productData["Glass Thickness"]}
//               </h5>
//             </div>
//           </div>
//           <div>
//             <img
//               className="rounded-4xl cursor-pointer hidden xl:block"
//               onClick={handleLeftClick}
//               src={imageData[imageData.length - 1].img}
//               alt={imageData[imageData.length - 1].alt}
//               title={imageData[imageData.length - 1].alt}
//             />
//           </div>
//         </aside>
//         <center className="flex w-screen  max-tablet:-mx-12 max-laptop:-mx-32 max-xl:mb-6 xl:w-[47.5rem] justify-between items-center text-2xl max-xl:order-1">
//           <GoChevronLeft
//             className="cursor-pointer text-8xl tablet:text-5xl laptop:text-3xl"
//             onClick={handleLeftClick}
//           />
//           {/* <div className="max-h-[70vh] max-w-[70vw] rounded-4xl xl:max-h-[40.5rem] xl:max-w-[40.5rem] overflow-hidden">
//             <img
//               className="w-full h-full object-cover object-center"
//               src={imageData[0].img}
//               alt={imageData[0].alt}
//               title={imageData[0].alt}
//             />
//           </div> */}
//           <div className="max-h-[70vh] max-w-[100vw] xl:h-[40.5rem] xl:w-[40.5rem] rounded-4xl overflow-hidden">
//             <img
//               className=" min-w-full min-h-full object-cover object-center"
//               src={imageData[0].img}
//               alt={imageData[0].alt}
//               title={imageData[0].alt}
//             />
//           </div>
//           <GoChevronRight
//             className="cursor-pointer text-8xl tablet:text-5xl laptop:text-3xl"
//             onClick={handleRightClick}
//           />
//         </center>
//         <aside className="flex flex-col gap-4 w-full xl:w-[20%] overflow-hidden justify-between max-xl:order-2">
//           <div className="flex flex-col gap-6 xl:gap-8">
//             <h1 className="text-[--third] Raleway text-2xl block xl:hidden">
//               Detailed Description.
//             </h1>
//             <ExpandableText maxLength={100} className="text-[--third]">
//               {productData["Short Description"]}
//             </ExpandableText>
//             <BlackButton className="hidden xl:block" path="/products">
//               View other products
//             </BlackButton>
//           </div>
//           <div>
//             <img
//               className="rounded-4xl cursor-pointer hidden xl:block"
//               onClick={handleRightClick}
//               src={imageData[1].img}
//               alt={imageData[1].alt}
//               title={imageData[1].alt}
//             />
//           </div>
//         </aside>
//       </section>
//     </main>
//   );
// };
// export const Product = React.memo(MemoProduct);

// IS PERFECT CODE ALREDY DEPLOY ON PRODUCTION
// import React, { useEffect, useRef, useCallback, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { ProductProps } from "../../../types";
// import { BlackButton } from "../../../components";
// import { iconsFeature } from "../../../assets/Data";

// type ImageData = {
//   img: string;
//   alt: string;
// };

// type FeatureData = {
//   icon: ({ size, color }: { size?: number; color?: string }) => JSX.Element;
//   feature: string;
// };

// interface ExpandableTextProps {
//   className?: string;
//   maxLength: number;
//   children: string;
// }

// const ExpandableText: React.FC<ExpandableTextProps> = ({
//   className = "",
//   children,
//   maxLength,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const displayedText = isExpanded
//     ? children + " "
//     : children.slice(0, maxLength) + "... ";

//   return (
//     <div className={className}>
//       <p>{displayedText}</p>
//       {children.length > maxLength && (
//         <div
//           onClick={toggleExpansion}
//           className="text-[--third] underline font-bold cursor-pointer"
//         >
//           {isExpanded ? "Show Less" : "Show More"}
//         </div>
//       )}
//     </div>
//   );
// };

// const MemoProduct: React.FC = () => {
//   const location = useLocation();
//   const [productData, setProductData] = useState<ProductProps | null>(null);
//   const [imageData, setImageData] = useState<ImageData[]>([]);
//   const featureData = useRef<FeatureData[]>([]);

//   const swipeRef = useRef<HTMLDivElement>(null);
//   const startXRef = useRef<number | null>(null);

//   const processData = useCallback(() => {
//     if (productData) {
//       const altTextArray = productData["Alternative text for other image"]
//         .split(",")
//         .map((text) => text.trim());

//       const images = productData["Min 3 Extra images"]
//         .split(",")
//         .map((img, index) => ({ img: img.trim(), alt: altTextArray[index] }));

//       images.unshift({
//         img: productData["Main Image"],
//         alt: productData["Alternative text"],
//       });

//       setImageData(images);

//       featureData.current = productData["Features (Min 3)"]
//         .split(",")
//         .map((feature) => {
//           const trimmedFeature = feature.trim() as keyof typeof iconsFeature;
//           return {
//             icon: iconsFeature[trimmedFeature],
//             feature: trimmedFeature,
//           };
//         });
//     }
//   }, [productData]);

//   useEffect(() => {
//     if (location.state) {
//       setProductData(location.state as ProductProps);
//     }
//   }, [location.state]);

//   useEffect(() => {
//     processData();
//   }, [processData]);

//   const handleSwipeStart = (e: React.TouchEvent<HTMLDivElement>) => {
//     startXRef.current = e.touches[0].clientX;
//   };

//   const handleSwipeEnd = (e: React.TouchEvent<HTMLDivElement>) => {
//     if (startXRef.current && swipeRef.current) {
//       const endX = e.changedTouches[0].clientX;
//       const deltaX = endX - startXRef.current;

//       if (deltaX > 50) {
//         handleLeftClick();
//       } else if (deltaX < -50) {
//         handleRightClick();
//       }

//       startXRef.current = null;
//     }
//   };

//   const handleLeftClick = () => {
//     setImageData((prev) => {
//       const temp = [...prev];
//       const lastImage = temp.pop();
//       if (lastImage) {
//         temp.unshift(lastImage);
//       }
//       return temp;
//     });
//   };

//   const handleRightClick = () => {
//     setImageData((prev) => {
//       const temp = [...prev];
//       const firstImage = temp.shift();
//       if (firstImage) {
//         temp.push(firstImage);
//       }
//       return temp;
//     });
//   };

//   if (!productData || !imageData.length) {
//     return <div>Loading...</div>;
//   }

//   // Determine if current device is mobile
//   const isMobile = window.innerWidth < 768;

//   return (
//     <main className="py-4 px-12 pb-28 tablet:px-32 xl:px-44">
//       <header className="pb-8">
//         <h3 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
//           {productData["Product Category"]}
//         </h3>
//         <h1 className="Raleway text-[--third] text-xl tablet:text-[2.8rem] xl:text-xl">
//           {productData["Product Name"] + " " + productData["Product Code"]}
//         </h1>
//       </header>
//       <section className="xl:h-[80vh] flex justify-between max-xl:flex-col max-xl:gap-6">
//         <aside className="flex flex-col justify-between gap-4 w-full xl:w-[18%] overflow-hidden max-xl:order-3">
//           <div className="flex flex-col text-sm gap-2 justify-center">
//             {featureData.current.map((item, index) => (
//               <div key={index} className="flex flex-col gap-3">
//                 <item.icon size={isMobile ? 24 : 36} color="#03247b" />
//                 <p className="text-sm font-semibold lg:text-[13px]">
//                   {item.feature.toUpperCase()}
//                 </p>
//               </div>
//             ))}
//             <div className="border-t-2 border-t-[--third] max-xl:space-y-8 max-xl:w-1/2">
//               <p className="text-sm font-semibold mt-2 lg:text-sm">
//                 SUITABLE FOR GLASS UP TO
//               </p>
//               <h5 className="text-5xl text-[--third] lg:text-3xl">
//                 {productData["Glass Thickness"]}
//               </h5>
//             </div>
//           </div>
//           <div>
//             <img
//               className="rounded-4xl laptop:h-full cursor-pointer hidden xl:block"
//               onClick={handleLeftClick}
//               src={imageData[imageData.length - 1].img}
//               alt={imageData[imageData.length - 1].alt}
//               title={imageData[imageData.length - 1].alt}
//             />
//           </div>
//         </aside>
//         <div
//           ref={swipeRef}
//           onTouchStart={handleSwipeStart}
//           onTouchEnd={handleSwipeEnd}
//           className="center flex w-screen max-tablet:-mx-12 max-laptop:-mx-32 max-xl:mb-6 xl:w-[47.5rem] justify-between items-center text-2xl max-xl:order-1"
//         >
//           {!isMobile && (
//             <GoChevronLeft
//               className="cursor-pointer lg:ml-3 text-8xl tablet:text-3xl laptop:text-3xl"
//               onClick={handleLeftClick}
//             />
//           )}
//           <div className="middle-image-container xl:max-h-[75vh] xl:max-w-[33vw] xl:h-[40.5rem] xl:w-[40.5rem] rounded-4xl overflow-hidden">
//             <img
//               className="middle-image rounded-4xl"
//               src={imageData[0].img}
//               alt={imageData[0].alt}
//               title={imageData[0].alt}
//             />
//           </div>
//           {!isMobile && (
//             <GoChevronRight
//               className="cursor-pointer text-8xl tablet:text-3xl laptop:text-3xl"
//               onClick={handleRightClick}
//             />
//           )}
//         </div>
//         <aside className="flex flex-col gap-4 w-full xl:w-[20%] overflow-hidden justify-between max-xl:order-2">
//           <div className="flex flex-col gap-6 xl:gap-8">
//             <h1 className="text-[--third] Raleway text-2xl block xl:hidden">
//               Detailed Description.
//             </h1>
//             <ExpandableText maxLength={100} className="text-[--third]">
//               {productData["Short Description"]}
//             </ExpandableText>
//             <BlackButton className="hidden xl:block" path="/products">
//               View other products
//             </BlackButton>
//           </div>
//           <div>
//             <img
//               className="rounded-4xl cursor-pointer hidden xl:block"
//               onClick={handleRightClick}
//               src={imageData[1].img}
//               alt={imageData[1].alt}
//               title={imageData[1].alt}
//             />
//           </div>
//         </aside>
//       </section>
//     </main>
//   );
// };

// export const Product = React.memo(MemoProduct);

// THIS CODE IS NEVEGATING GESSURE FOR MOBILE USER

import React, { useEffect, useRef, useCallback, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { ProductProps } from "../../../types";
import { BlackButton } from "../../../components";
import { iconsFeature } from "../../../assets/Data";
import "./Product.css";
// import Metadata from "../../../components/Metatag/Metatag";

type ImageData = {
  img: string;
  alt: string;
};

type FeatureData = {
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
  const location = useLocation();
  const params = useParams();
  const [productData, setProductData] = useState<ProductProps | null>(null);
  const [imageData, setImageData] = useState<ImageData[]>([]);
  const featureData = useRef<FeatureData[]>([]);

  const swipeRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(true);

  const processData = useCallback(() => {
    if (productData) {
      const altTextArray = productData["Alternative text for other image"]
        .split(",")
        .map((text) => text.trim());

      const images = productData["Min 3 Extra images"]
        .split(",")
        .map((img, index) => ({ img: img.trim(), alt: altTextArray[index] }));

      images.unshift({
        img: productData["Main Image"],
        alt: productData["Alternative text"],
      });

      setImageData(images);

      featureData.current = productData["Features (Min 3)"]
        .split(",")
        .map((feature) => {
          const trimmedFeature = feature.trim() as keyof typeof iconsFeature;
          return {
            icon: iconsFeature[trimmedFeature],
            feature: trimmedFeature,
          };
        });
    }
  }, [productData]);

  useEffect(() => {
    if (location.state) {
      setProductData(location.state as ProductProps);
    }
  }, [location.state]);

  useEffect(() => {
    processData();
  }, [processData]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSwipeIndicator(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSwipeStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleSwipeEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startXRef.current && swipeRef.current) {
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startXRef.current;

      if (deltaX > 50) {
        handleLeftClick();
      } else if (deltaX < -50) {
        handleRightClick();
      }

      startXRef.current = null;
    }
  };

  const handleLeftClick = () => {
    setImageData((prev) => {
      const temp = [...prev];
      const lastImage = temp.pop();
      if (lastImage) {
        temp.unshift(lastImage);
      }
      return temp;
    });
  };

  const handleRightClick = () => {
    setImageData((prev) => {
      const temp = [...prev];
      const firstImage = temp.shift();
      if (firstImage) {
        temp.push(firstImage);
      }
      return temp;
    });
  };

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwE-1Stl8t8_XrB5MuRPQ1hROKpo3mYynDPnI1vNX6U5vakITchmA6nfmzQt8sYpqFIjw/exec"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Find the blog that matches the readableTitle
        const foundProduct = data.find(
          (product: ProductProps) =>
            product["Random Code to link the product"] === params.productID
        );
        if (foundProduct) {
          setProductData(foundProduct);
        }
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [params.productID]);

  if (!productData || !imageData.length) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Determine if current device is mobile
  const isMobile = window.innerWidth < 768;

  return (
    <>
      {/* <Metadata
        title={`${
          productData["Product Name"] +
          " " +
          productData["Product Code"] +
          " - " +
          productData["Random Code to link the product"]
        }`}
        description={""}
        keywords={""}
        ogImage={""}
        ogUrl={`https://www.imperiorailing.com/products/${params.productID}`}
      /> */}
      <main className="py-4 px-12 pb-28 tablet:px-32 xl:px-44">
        <header className="pb-8">
          <h2 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
            {productData["Product Category"]}
          </h2>
          <h1 className="Raleway text-[--third] text-xl tablet:text-[2.8rem] xl:text-xl">
            {productData["Product Name"] + " " + productData["Product Code"]}
          </h1>
        </header>
        <section className="xl:h-[80vh] flex justify-between max-xl:flex-col max-xl:gap-6">
          <aside className="flex flex-col justify-between gap-4 w-full xl:w-[18%] overflow-hidden max-xl:order-3">
            <div className="flex flex-col text-sm gap-2 justify-center">
              {featureData.current.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <item.icon size={isMobile ? 24 : 36} color="#03247b" />
                  <p className="text-sm font-semibold lg:text-[13px]">
                    {item.feature.toUpperCase()}
                  </p>
                </div>
              ))}
              <div className="border-t-2 border-t-[--third] max-xl:space-y-8 max-xl:w-1/2">
                <p className="text-sm font-semibold mt-2 lg:text-sm">
                  SUITABLE FOR GLASS UP TO
                </p>
                <h2 className="text-5xl text-[--third] lg:text-3xl">
                  {productData["Glass Thickness"]}
                </h2>
              </div>
            </div>
            <div>
              <img
                className="rounded-4xl laptop:h-full cursor-pointer hidden xl:block"
                onClick={handleLeftClick}
                src={imageData[imageData.length - 1].img}
                alt={imageData[imageData.length - 1].alt}
                title={imageData[imageData.length - 1].alt}
              />
            </div>
          </aside>
          <div
            ref={swipeRef}
            onTouchStart={handleSwipeStart}
            onTouchEnd={handleSwipeEnd}
            className="center flex w-screen max-tablet:-mx-12 max-laptop:-mx-32 max-xl:mb-6 xl:w-[47.5rem] justify-between items-center text-2xl max-xl:order-1"
          >
            {!isMobile && (
              <GoChevronLeft
                className="cursor-pointer lg:ml-3 text-8xl tablet:text-3xl laptop:text-3xl"
                onClick={handleLeftClick}
              />
            )}
            <div className="middle-image-container xl:max-h-[75vh] xl:max-w-[33vw] xl:h-[40.5rem] xl:w-[40.5rem] rounded-4xl overflow-hidden relative">
              {isMobile && showSwipeIndicator && (
                <div className="swipe-indicator absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold animate-fade-in">
                  Swipe to navigate
                </div>
              )}
              <img
                className="middle-image rounded-4xl"
                src={imageData[0].img}
                alt={imageData[0].alt}
                title={imageData[0].alt}
              />
            </div>
            {!isMobile && (
              <GoChevronRight
                className="cursor-pointer text-8xl tablet:text-3xl laptop:text-3xl"
                onClick={handleRightClick}
              />
            )}
          </div>
          <aside className="flex flex-col gap-4 w-full xl:w-[20%] overflow-hidden justify-between max-xl:order-2">
            <div className="flex flex-col gap-6 xl:gap-8">
              <h1 className="text-[--third] Raleway text-2xl block xl:hidden">
                Detailed Description.
              </h1>
              <ExpandableText maxLength={100} className="text-[--third]">
                {productData["Short Description"]}
              </ExpandableText>
              <div className="flex flex-col gap-4 max-w-48">
                <BlackButton
                  className="hidden xl:block max-w-48"
                  path="/products"
                >
                  View other products
                </BlackButton>
                <BlackButton className="w-full" path="/projects">
                  View Projects
                </BlackButton>
              </div>
            </div>
            <div>
              <img
                className="rounded-4xl cursor-pointer hidden xl:block"
                onClick={handleRightClick}
                src={imageData[1].img}
                alt={imageData[1].alt}
                title={imageData[1].alt}
              />
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export const Product = React.memo(MemoProduct);
