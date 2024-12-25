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

// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { ProductProps } from "../../../types";
// import { BlackButton } from "../../../components";
// import { iconsFeature } from "../../../assets/Data";

// import "./Product.css";

// type ImageData = {
//   img: string;
//   alt: string;
// };

// type FeatureData = {
//   icon: ({ size, color }: { size?: number; color?: string }) => JSX.Element;
//   feature: string;
// };

// type DecodedToken = {
//   username: string;
// };

// type ExpandableTextProps = {
//   className?: string;
//   maxLength: number;
//   children: string;
// };

// export const ExpandableText: React.FC<ExpandableTextProps> = ({
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
//   const params = useParams();
//   const navigate = useNavigate();

//   const [selectedImage, setSelectedImage] = useState(0);
//   const [productData, setProductData] = useState<ProductProps | null>(null);
//   const [imageData, setImageData] = useState<ImageData[]>([]);

//   const [allProductData, setAllProductData] = useState<ProductProps[]>([]);

//   const [selectedColor, setSelectedColor] = useState<string | null>(null);

//   const featureData = useRef<FeatureData[]>([]);

//   const swipeRef = useRef<HTMLDivElement>(null);
//   const startXRef = useRef<number | null>(null);
//   const [showSwipeIndicator, setShowSwipeIndicator] = useState(true);

//   const encodedToken = localStorage.getItem("token");

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

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowSwipeIndicator(false);
//     }, 2000);

//     return () => clearTimeout(timeout);
//   }, []);

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

//   useEffect(() => {
//     fetch(
//       "https://script.google.com/macros/s/AKfycbwE-1Stl8t8_XrB5MuRPQ1hROKpo3mYynDPnI1vNX6U5vakITchmA6nfmzQt8sYpqFIjw/exec"
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setAllProductData(data);
//         // Find the blog that matches the readableTitle
//         if (selectedColor) {
//           const findProduct = allProductData.find(
//             (product) =>
//               product["Product Finish"] === selectedColor &&
//               product["Product Code"] === productData?.["Product Code"]
//           ) as ProductProps; // Type assertion (use with caution)
//           if (findProduct) {
//             setProductData(findProduct);
//             navigate(
//               `/products/${findProduct["Random Code to link the product"]}`,
//               { state: findProduct }
//             );
//           }
//         } else {
//           const foundProduct = data.find(
//             (product: ProductProps) =>
//               product["Random Code to link the product"] === params.productID
//           );
//           if (foundProduct) {
//             setProductData(foundProduct);
//           }
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching blog data:", error);
//       });
//   }, [allProductData, navigate, params.productID, productData, selectedColor]);

//   const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

//   useEffect(() => {
//     const parts = encodedToken?.split(".");

//     if (parts?.length === 3) {
//       setDecodedToken(JSON.parse(atob(parts[1])));
//     }
//   }, [encodedToken]);

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);

//     const newCartData: Record<string, string> = {};
//     formData.forEach((value, key) => {
//       newCartData[key] = value.toString();
//     });
//     newCartData["color"] = `${location.state["Product Finish"]}`;
//     newCartData[
//       "productname"
//     ] = `${location.state["Product Name"]}${location.state["Product Code"]}`;
//     newCartData["description"] = `${location.state["Short Description"]}`;
//     newCartData["img"] = `${location.state["Main Image"]}`;
//     newCartData["price"] = `${location.state["Price"]}`;
//     newCartData["blocks"] = `${location.state["Blocks"]}`;
//     newCartData["cover"] = `${location.state["Cover"]}`;

//     const cartItems = localStorage.getItem(
//       `${decodedToken?.username}_CartItems`
//     );

//     let updatedCartItems = cartItems ? JSON.parse(cartItems) : [];

//     updatedCartItems = [...updatedCartItems, newCartData];

//     localStorage.setItem(
//       `${decodedToken?.username}_CartItems`,
//       JSON.stringify(updatedCartItems)
//     );
//     navigate("/cart");
//   };

//   const renderStars = (rating: number) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < 5; i++) {
//       if (i < fullStars) {
//         stars.push(<FaStar key={i} className="text-yellow-400" />);
//       } else if (i === fullStars && hasHalfStar) {
//         stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//       } else {
//         stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//       }
//     }
//     return stars;
//   };

//   const colorOptions = [
//     { name: "Silver", code: "#E3E2DD" },
//     { name: "Black", code: "#4A4A4A" },
//     { name: "Champagne", code: "#958061" },
//     { name: "Wood", code: "#A15A3E" },
//   ];
//   // Determine if current device is mobile
//   const isMobile = window.innerWidth < 768;

//   if (!productData || !imageData.length) {
//     return (
//       <div className="w-screen h-screen flex justify-center items-center">
//         <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return !encodedToken ? (
//     <main className="py-4 px-12 pb-28 tablet:px-32 xl:px-44">
//       <header className="pb-8">
//         <h2 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
//           {productData["Product Category"]}
//         </h2>
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
//               <h2 className="text-5xl text-[--third] lg:text-3xl">
//                 {productData["Glass Thickness"]}
//               </h2>
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
//           <div className="middle-image-container xl:max-h-[75vh] xl:max-w-[33vw] xl:h-[40.5rem] xl:w-[40.5rem] rounded-4xl overflow-hidden relative">
//             {isMobile && showSwipeIndicator && (
//               <div className="swipe-indicator absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold animate-fade-in">
//                 Swipe to navigate
//               </div>
//             )}
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
//             <div className="flex flex-col gap-4 max-w-48">
//               <BlackButton
//                 className="hidden xl:block max-w-48"
//                 path="/products"
//               >
//                 View other products
//               </BlackButton>
//               <BlackButton className="w-full" path="/projects">
//                 View Projects
//               </BlackButton>
//             </div>
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
//   ) : (
//     <div className="max-w-7xl mx-auto p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product imageData */}
//         <div className="space-y-4">
//           <div className="aspect-square border rounded-lg overflow-hidden">
//             {imageData[selectedImage] && (
//               <img
//                 src={imageData[selectedImage].img}
//                 alt="Product"
//                 className="w-full h-full object-cover"
//               />
//             )}
//           </div>
//           <div className="flex gap-4">
//             {imageData.map((src, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`w-20 h-20 border rounded-lg overflow-hidden ${
//                   selectedImage === index
//                     ? "border-gray-800"
//                     : "border-gray-200"
//                 }`}
//               >
//                 <img
//                   src={src.img}
//                   alt={`Product thumbnail ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <section className="space-y-6">
//           <div className="space-y-2">
//             <h1 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
//               {productData["Product Name"] + " " + productData["Product Code"]}
//             </h1>
//             <div className="flex flex-col items-start gap-2">
//               <ExpandableText
//                 maxLength={130}
//                 className="text-[--third] text-justify"
//               >
//                 {productData["Short Description"]}
//               </ExpandableText>

//               <div className="flex text-gray-600 items-center gap-1">
//                 {renderStars(4.5)} 4.2K
//               </div>
//             </div>
//           </div>

//           <div className="border rounded-lg p-4">
//             <h2 className="font-semibold mb-2">Product dimantions</h2>
//             {/* Add product dimensions content here */}
//           </div>

//           <div className="flex justify-between items-center">
//             <p className="text-3xl font-bold text-left">$ 255</p>

//             <div className="flex gap-2 items-center">
//               <p>Select Color:</p>
//               {colorOptions.map((color) => (
//                 <button
//                   key={color.name}
//                   style={{ backgroundColor: color.code }}
//                   className={`w-6 h-6 rounded-full border border-gray-300 hover:bg-opacity-75 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
//                     selectedColor === color.name ? "border-blue-500" : ""
//                   }`}
//                   onClick={() => setSelectedColor(color.name)}
//                 />
//               ))}
//             </div>
//           </div>
//           <form
//             className="grid grid-cols-2 gap-4"
//             onSubmit={(e) => handleFormSubmit(e)}
//             action="/cart"
//           >
//             {/* Blocks Dropdown */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Blocks:
//               </label>
//               <select
//                 name="blocks"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               >
//                 {/* Populate Blocks dropdown with the available options */}
//                 {productData?.["Blocks"]?.split(",").map((block, index) => (
//                   <option key={index} value={block.trim()}>
//                     {block.trim()}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Cover Dropdown */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Cover:
//               </label>
//               <select
//                 name="cover"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               >
//                 {/* Populate Cover dropdown with the available options */}
//                 {productData?.["Cover"]?.split(",").map((cover, index) => (
//                   <option key={index} value={cover.trim()}>
//                     {cover.trim()}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Quantity Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Quantity:
//               </label>
//               <input
//                 type="number"
//                 name="quantity"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               />
//             </div>

//             {/* Rubber Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Rubber:
//               </label>
//               <input
//                 type="number"
//                 name="rubber"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               />
//             </div>

//             {/* Nut Bolt Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Nut Bolt:
//               </label>
//               <input
//                 type="number"
//                 name="nutbolt"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               />
//             </div>

//             {/* End Cap Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 End Cap:
//               </label>
//               <input
//                 type="number"
//                 name="endcap"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               />
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               type="submit"
//               className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 text-center"
//             >
//               Add to cart
//             </button>

//             {/* Buy Now Button */}
//             <button className="flex-1 bg-blue-100 text-blue-600 py-3 rounded-md hover:bg-blue-200">
//               Buy Now
//             </button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

// import React, { useCallback, useEffect, useRef, useState } from "react";
// import {
//   FaStar,
//   FaRegStar,
//   FaStarHalfAlt,
//   FaPlus,
//   FaMinus,
// } from "react-icons/fa";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { ProductProps } from "../../../types";
// import { BlackButton } from "../../../components";
// import { iconsFeature } from "../../../assets/Data";

// import "./Product.css";

// type ImageData = {
//   img: string;
//   alt: string;
// };

// type FeatureData = {
//   icon: ({ size, color }: { size?: number; color?: string }) => JSX.Element;
//   feature: string;
// };

// type DecodedToken = {
//   username: string;
// };

// type ExpandableTextProps = {
//   className?: string;
//   maxLength: number;
//   children: string;
// };

// export const ExpandableText: React.FC<ExpandableTextProps> = ({
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
//   const params = useParams();
//   const navigate = useNavigate();

//   const [selectedImage, setSelectedImage] = useState(0);
//   const [productData, setProductData] = useState<ProductProps | null>(null);
//   const [imageData, setImageData] = useState<ImageData[]>([]);

//   const [allProductData, setAllProductData] = useState<ProductProps[]>([]);

//   const [selectedColor, setSelectedColor] = useState<string | null>(null);

//   const featureData = useRef<FeatureData[]>([]);

//   const swipeRef = useRef<HTMLDivElement>(null);
//   const startXRef = useRef<number | null>(null);
//   const [showSwipeIndicator, setShowSwipeIndicator] = useState(true);

//   const encodedToken = localStorage.getItem("token");

//   type Selection = {
//     type: string;
//     quantity: number;
//   };

//   const [blockSelections, setBlockSelections] = useState<Selection[]>([
//     { type: "", quantity: 1 },
//   ]);
//   const [coverSelections, setCoverSelections] = useState<Selection[]>([
//     { type: "", quantity: 1 },
//   ]);

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

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowSwipeIndicator(false);
//     }, 2000);

//     return () => clearTimeout(timeout);
//   }, []);

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

//   useEffect(() => {
//     fetch(
//       "https://script.google.com/macros/s/AKfycbwE-1Stl8t8_XrB5MuRPQ1hROKpo3mYynDPnI1vNX6U5vakITchmA6nfmzQt8sYpqFIjw/exec"
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setAllProductData(data);
//         // Find the blog that matches the readableTitle
//         if (selectedColor) {
//           const findProduct = allProductData.find(
//             (product) =>
//               product["Product Finish"] === selectedColor &&
//               product["Product Code"] === productData?.["Product Code"]
//           ) as ProductProps; // Type assertion (use with caution)
//           if (findProduct) {
//             setProductData(findProduct);
//             navigate(
//               `/products/${findProduct["Random Code to link the product"]}`,
//               { state: findProduct }
//             );
//           }
//         } else {
//           const foundProduct = data.find(
//             (product: ProductProps) =>
//               product["Random Code to link the product"] === params.productID
//           );
//           if (foundProduct) {
//             setProductData(foundProduct);
//           }
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching blog data:", error);
//       });
//   }, [allProductData, navigate, params.productID, productData, selectedColor]);

//   const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

//   useEffect(() => {
//     const parts = encodedToken?.split(".");

//     if (parts?.length === 3) {
//       setDecodedToken(JSON.parse(atob(parts[1])));
//     }
//   }, [encodedToken]);

//   const addBlockSelection = () => {
//     setBlockSelections([...blockSelections, { type: "", quantity: 1 }]);
//   };

//   const removeBlockSelection = (index: number) => {
//     setBlockSelections(blockSelections.filter((_, i) => i !== index));
//   };

//   const updateBlockSelection = (
//     index: number,
//     field: "type" | "quantity",
//     value: string | number
//   ) => {
//     const newSelections = [...blockSelections];
//     if (field === "type") {
//       newSelections[index].type = value as string;
//     } else {
//       newSelections[index].quantity = value as number;
//     }
//     setBlockSelections(newSelections);
//   };

//   const updateCoverSelection = (
//     index: number,
//     field: "type" | "quantity",
//     value: string | number
//   ) => {
//     const newSelections = [...coverSelections];
//     if (field === "type") {
//       newSelections[index].type = value as string;
//     } else {
//       newSelections[index].quantity = value as number;
//     }
//     setCoverSelections(newSelections);
//   };

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData(e.target as HTMLFormElement);

//     const newCartData: Record<string, string> = {};
//     formData.forEach((value, key) => {
//       newCartData[key] = value.toString();
//     });
//     newCartData["color"] = `${location.state["Product Finish"]}`;
//     newCartData[
//       "productname"
//     ] = `${location.state["Product Name"]}${location.state["Product Code"]}`;
//     newCartData["description"] = `${location.state["Short Description"]}`;
//     newCartData["img"] = `${location.state["Main Image"]}`;
//     newCartData["price"] = `${location.state["Price"]}`;
//     newCartData["blocks"] = JSON.stringify(blockSelections);
//     newCartData["cover"] = JSON.stringify(coverSelections);

//     const cartItems = localStorage.getItem(
//       `${decodedToken?.username}_CartItems`
//     );

//     let updatedCartItems = cartItems ? JSON.parse(cartItems) : [];

//     updatedCartItems = [...updatedCartItems, newCartData];

//     localStorage.setItem(
//       `${decodedToken?.username}_CartItems`,
//       JSON.stringify(updatedCartItems)
//     );
//     navigate("/cart");
//   };

//   const renderStars = (rating: number) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < 5; i++) {
//       if (i < fullStars) {
//         stars.push(<FaStar key={i} className="text-yellow-400" />);
//       } else if (i === fullStars && hasHalfStar) {
//         stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
//       } else {
//         stars.push(<FaRegStar key={i} className="text-yellow-400" />);
//       }
//     }
//     return stars;
//   };

//   const colorOptions = [
//     { name: "Silver", code: "#E3E2DD" },
//     { name: "Black", code: "#4A4A4A" },
//     { name: "Champagne", code: "#958061" },
//     { name: "Wood", code: "#A15A3E" },
//   ];
//   // Determine if current device is mobile
//   const isMobile = window.innerWidth < 768;

//   if (!productData || !imageData.length) {
//     return (
//       <div className="w-screen h-screen flex justify-center items-center">
//         <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return !encodedToken ? (
//     <main className="py-4 px-12 pb-28 tablet:px-32 xl:px-44">
//       <header className="pb-8">
//         <h2 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
//           {productData["Product Category"]}
//         </h2>
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
//               <h2 className="text-5xl text-[--third] lg:text-3xl">
//                 {productData["Glass Thickness"]}
//               </h2>
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
//           <div className="middle-image-container xl:max-h-[75vh] xl:max-w-[33vw] xl:h-[40.5rem] xl:w-[40.5rem] rounded-4xl overflow-hidden relative">
//             {isMobile && showSwipeIndicator && (
//               <div className="swipe-indicator absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold animate-fade-in">
//                 Swipe to navigate
//               </div>
//             )}
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
//             <div className="flex flex-col gap-4 max-w-48">
//               <BlackButton
//                 className="hidden xl:block max-w-48"
//                 path="/products"
//               >
//                 View other products
//               </BlackButton>
//               <BlackButton className="w-full" path="/projects">
//                 View Projects
//               </BlackButton>
//             </div>
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
//   ) : (
//     <div className="max-w-7xl mx-auto p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product imageData */}
//         <div className="space-y-4">
//           <div className="aspect-square border rounded-lg overflow-hidden">
//             {imageData[selectedImage] && (
//               <img
//                 src={imageData[selectedImage].img}
//                 alt="Product"
//                 className="w-full h-full object-cover"
//               />
//             )}
//           </div>
//           <div className="flex gap-4">
//             {imageData.map((src, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`w-20 h-20 border rounded-lg overflow-hidden ${
//                   selectedImage === index
//                     ? "border-gray-800"
//                     : "border-gray-200"
//                 }`}
//               >
//                 <img
//                   src={src.img}
//                   alt={`Product thumbnail ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Info */}
//         <section className="space-y-6">
//           <div className="space-y-2">
//             <h1 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
//               {productData["Product Name"] + " " + productData["Product Code"]}
//             </h1>
//             <div className="flex flex-col items-start gap-2">
//               <ExpandableText
//                 maxLength={130}
//                 className="text-[--third] text-justify"
//               >
//                 {productData["Short Description"]}
//               </ExpandableText>

//               <div className="flex text-gray-600 items-center gap-1">
//                 {renderStars(4.5)} 4.2K
//               </div>
//             </div>
//           </div>

//           <div className="border rounded-lg p-4">
//             <h2 className="font-semibold mb-2">Product dimantions</h2>
//             {/* Add product dimensions content here */}
//           </div>

//           <div className="flex justify-between items-center">
//             <p className="text-3xl font-bold text-left">$ 255</p>

//             <div className="flex gap-2 items-center">
//               <p>Select Color:</p>
//               {colorOptions.map((color) => (
//                 <button
//                   key={color.name}
//                   style={{ backgroundColor: color.code }}
//                   className={`w-6 h-6 rounded-full border border-gray-300 hover:bg-opacity-75 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
//                     selectedColor === color.name ? "border-blue-500" : ""
//                   }`}
//                   onClick={() => setSelectedColor(color.name)}
//                 />
//               ))}
//             </div>
//           </div>

//           <form
//             className="grid grid-cols-1 gap-4"
//             onSubmit={(e) => handleFormSubmit(e)}
//             action="/cart"
//           >
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Blocks:
//               </label>
//               {blockSelections.map((selection, index) => (
//                 <div key={index} className="flex items-center mt-1">
//                   <select
//                     value={selection.type}
//                     onChange={(e) =>
//                       updateBlockSelection(index, "type", e.target.value)
//                     }
//                     className="w-full border rounded-md px-3 py-2 focus:outline-none"
//                     required
//                   >
//                     <option value="">Select Block</option>
//                     {productData?.["Blocks"]?.split(",").map((block, idx) => (
//                       <option key={idx} value={block.trim()}>
//                         {block.trim()}
//                       </option>
//                     ))}
//                   </select>

//                   <input
//                     type="number"
//                     value={selection.quantity}
//                     onChange={(e) =>
//                       updateBlockSelection(
//                         index,
//                         "quantity",
//                         parseInt(e.target.value)
//                       )
//                     }
//                     className="ml-2 w-[100%] border rounded-md px-3 py-2 focus:outline-none"
//                     placeholder="Enter Qty"
//                     required
//                     min="1"
//                   />
//                   {index === blockSelections.length - 1 ? (
//                     <button
//                       type="button"
//                       className="m-2 bg-blue-500 text-white rounded-full w-[75px] h-8 flex items-center justify-center"
//                       onClick={addBlockSelection}
//                     >
//                       <FaPlus />
//                     </button>
//                   ) : (
//                     <button
//                       type="button"
//                       className="m-2 bg-red-500 text-white rounded-full  w-[75px] h-8 flex items-center justify-center"
//                       onClick={() => removeBlockSelection(index)}
//                     >
//                       <FaMinus />
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Cover:
//               </label>
//               <div className="flex items-center mt-1">
//                 <select
//                   value={coverSelections[0].type}
//                   onChange={(e) =>
//                     updateCoverSelection(0, "type", e.target.value)
//                   }
//                   className="w-full border rounded-md px-3 py-2 focus:outline-none"
//                   required
//                 >
//                   <option value="">Select Cover</option>
//                   {productData?.["Cover"]?.split(",").map((cover, idx) => (
//                     <option key={idx} value={cover.trim()}>
//                       {cover.trim()}
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   type="number"
//                   value={coverSelections[0].quantity}
//                   onChange={(e) =>
//                     updateCoverSelection(
//                       0,
//                       "quantity",
//                       parseInt(e.target.value)
//                     )
//                   }
//                   className="ml-2 w-20 border rounded-md px-3 py-2 focus:outline-none"
//                   placeholder="Qty"
//                   required
//                   min="1"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Quantity:
//               </label>
//               <input
//                 type="number"
//                 name="quantity"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Rubber:
//               </label>
//               <input
//                 type="number"
//                 name="rubber"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 Nut Bolt:
//               </label>
//               <input
//                 type="number"
//                 name="nutbolt"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-600">
//                 End Cap:
//               </label>
//               <input
//                 type="number"
//                 name="endcap"
//                 className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 text-center"
//             >
//               Add to cart
//             </button>

//             <button className="flex-1 bg-blue-100 text-blue-600 py-3 rounded-md hover:bg-blue-200">
//               Buy Now
//             </button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

// // import React, { useState } from 'react';
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { ProductProps } from "../../../types";
import { BlackButton } from "../../../components";
import { iconsFeature } from "../../../assets/Data";

import "./Product.css";

type ImageData = {
  img: string;
  alt: string;
};

type FeatureData = {
  icon: ({ size, color }: { size?: number; color?: string }) => JSX.Element;
  feature: string;
};

type DecodedToken = {
  username: string;
};

type ExpandableTextProps = {
  className?: string;
  maxLength: number;
  children: string;
};

type Selection = {
  type: string;
  quantity: number;
};

export const ExpandableText: React.FC<ExpandableTextProps> = ({
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
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(0);
  const [productData, setProductData] = useState<ProductProps | null>(null);
  const [imageData, setImageData] = useState<ImageData[]>([]);

  const [allProductData, setAllProductData] = useState<ProductProps[]>([]);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const featureData = useRef<FeatureData[]>([]);

  const swipeRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(true);

  const encodedToken = localStorage.getItem("token");

  const [blockSelections, setBlockSelections] = useState<Selection[]>([
    { type: "", quantity: 1 },
  ]);
  const [coverSelections, setCoverSelections] = useState<Selection[]>([
    { type: "", quantity: 1 },
  ]);

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
        setAllProductData(data);
        if (selectedColor) {
          const findProduct = data.find(
            (product: ProductProps) =>
              product["Product Finish"] === selectedColor &&
              product["Product Code"] === productData?.["Product Code"]
          ) as ProductProps;
          if (findProduct) {
            setProductData(findProduct);
            navigate(
              `/products/${findProduct["Random Code to link the product"]}`,
              { state: findProduct }
            );
          }
        } else {
          const foundProduct = data.find(
            (product: ProductProps) =>
              product["Random Code to link the product"] === params.productID
          );
          if (foundProduct) {
            setProductData(foundProduct);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [navigate, params.productID, productData, selectedColor]);

  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const parts = encodedToken?.split(".");

    if (parts?.length === 3) {
      setDecodedToken(JSON.parse(atob(parts[1])));
    }
  }, [encodedToken]);

  const addBlockSelection = () => {
    setBlockSelections([...blockSelections, { type: "", quantity: 1 }]);
  };

  const removeBlockSelection = (index: number) => {
    setBlockSelections(blockSelections.filter((_, i) => i !== index));
  };

  const addCoverSelection = () => {
    setCoverSelections([...coverSelections, { type: "", quantity: 1 }]);
  };

  const removeCoverSelection = (index: number) => {
    setCoverSelections(coverSelections.filter((_, i) => i !== index));
  };

  const updateBlockSelection = (
    index: number,
    field: "type" | "quantity",
    value: string | number
  ) => {
    const newSelections = [...blockSelections];
    if (field === "type") {
      newSelections[index].type = value as string;
    } else {
      newSelections[index].quantity = value as number;
    }
    setBlockSelections(newSelections);
  };

  const updateCoverSelection = (
    index: number,
    field: "type" | "quantity",
    value: string | number
  ) => {
    const newSelections = [...coverSelections];
    if (field === "type") {
      newSelections[index].type = value as string;
    } else {
      newSelections[index].quantity = value as number;
    }
    setCoverSelections(newSelections);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const newCartData: Record<string, string> = {};
    formData.forEach((value, key) => {
      newCartData[key] = value.toString();
    });
    newCartData["color"] = selectedColor || "";
    newCartData[
      "productname"
    ] = `${productData?.["Product Name"]}${productData?.["Product Code"]}`;
    newCartData["description"] = productData?.["Short Description"] || "";
    newCartData["img"] = productData?.["Main Image"] || "";
    newCartData["price"] = productData?.Price || "";
    newCartData["blocks"] = JSON.stringify(blockSelections);
    newCartData["cover"] = JSON.stringify(coverSelections);

    const cartItems = localStorage.getItem(
      `${decodedToken?.username}_CartItems`
    );

    let updatedCartItems = cartItems ? JSON.parse(cartItems) : [];

    updatedCartItems = [...updatedCartItems, newCartData];

    localStorage.setItem(
      `${decodedToken?.username}_CartItems`,
      JSON.stringify(updatedCartItems)
    );
    navigate("/cart");
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  const colorOptions = [
    { name: "Silver", code: "#E3E2DD" },
    { name: "Black", code: "#4A4A4A" },
    { name: "Champagne", code: "#958061" },
    { name: "Wood", code: "#A15A3E" },
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    const newProduct = allProductData.find(
      (product: ProductProps) =>
        product["Product Finish"] === color &&
        product["Product Code"] === productData?.["Product Code"]
    );
    if (newProduct) {
      setProductData(newProduct);
      processData();
    }
  };

  // Determine if current device is mobile
  const isMobile = window.innerWidth < 768;

  if (!productData || !imageData.length) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return !encodedToken ? (
    <main className="py-4 px-12 pb-28 tablet:px-32 xl:px-44">
      <header className="pb-8">
        <h2 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
          {productData["Product Category"]}
        </h2>
        <h1 className="Raleway text-[--third] text-xl tablet:text-[2.8rem] xl:text-xl">
          {productData?.["Product Name"] + " " + productData?.["Product Code"]}
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
  ) : (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product imageData */}
        <div className="space-y-4">
          <div className="aspect-square border rounded-lg overflow-hidden">
            {imageData[selectedImage] && (
              <img
                src={imageData[selectedImage].img}
                alt="Product"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="flex gap-4 overflow-x-auto">
            {imageData.map((src, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 border rounded-lg overflow-hidden ${
                  selectedImage === index
                    ? "border-gray-800"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={src.img}
                  alt={`Product thumbnail ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
              {productData?.["Product Name"] +
                " " +
                productData?.["Product Code"]}
            </h1>
            <div className="flex flex-col items-start gap-2">
              <ExpandableText
                maxLength={130}
                className="text-[--third] text-justify"
              >
                {productData?.["Short Description"]}
              </ExpandableText>

              <div className="flex text-gray-600 items-center gap-1">
                {renderStars(4.5)} 4.2K
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-2">Product dimensions</h2>
            {/* Add product dimensions content here */}
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => handleFormSubmit(e)}
            action="/cart"
          >
            <div>
              <p className="text-3xl mb-4 font-bold">
                $ {productData?.Price || "N/A"}
              </p>{" "}
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Select Color:
              </label>
              <div className="flex gap-2 items-center">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    style={{ backgroundColor: color.code }}
                    className={`w-8 h-8 rounded-full border border-gray-300 hover:bg-opacity-75 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      selectedColor === color.name
                        ? "border-blue-500 ring-2 ring-blue-500"
                        : ""
                    }`}
                    onClick={() => handleColorChange(color.name)}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Blocks:
              </label>
              {blockSelections.map((selection, index) => (
                <div key={index} className="flex items-center mt-2">
                  <select
                    value={selection.type}
                    onChange={(e) =>
                      updateBlockSelection(index, "type", e.target.value)
                    }
                    className="w-full border rounded-md px-3 py-2 focus:outline-none"
                    required
                  >
                    <option value="">Select Block</option>
                    {productData?.["Blocks"]?.split(",").map((block, idx) => (
                      <option key={idx} value={block.trim()}>
                        {block.trim()}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={selection.quantity}
                    onChange={(e) =>
                      updateBlockSelection(
                        index,
                        "quantity",
                        parseInt(e.target.value)
                      )
                    }
                    className="ml-2 w-[100%] border rounded-md px-3 py-2 focus:outline-none"
                    placeholder="Enter Qty"
                    required
                    min="1"
                  />
                  {index === blockSelections.length - 1 ? (
                    <button
                      type="button"
                      className="m-2 bg-blue-500 text-white rounded-full w-[75px] h-8 flex items-center justify-center"
                      onClick={addBlockSelection}
                    >
                      <FaPlus />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="m-2 bg-red-500 text-white rounded-full w-[75px] h-8 flex items-center justify-center"
                      onClick={() => removeBlockSelection(index)}
                    >
                      <FaMinus />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Cover:
              </label>
              {coverSelections.map((selection, index) => (
                <div key={index} className="flex items-center mt-1">
                  <select
                    value={selection.type}
                    onChange={(e) =>
                      updateCoverSelection(index, "type", e.target.value)
                    }
                    className="w-full border rounded-md px-3 py-2 focus:outline-none"
                    required
                  >
                    <option value="">Select Cover</option>
                    {productData?.["Cover"]?.split(",").map((cover, idx) => (
                      <option key={idx} value={cover.trim()}>
                        {cover.trim()}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={selection.quantity}
                    onChange={(e) =>
                      updateCoverSelection(
                        index,
                        "quantity",
                        parseInt(e.target.value)
                      )
                    }
                    className="ml-2 w-[100%] border rounded-md px-3 py-2 focus:outline-none"
                    placeholder="Enter Qty"
                    required
                    min="1"
                  />
                  {index === coverSelections.length - 1 ? (
                    <button
                      type="button"
                      className="m-2 bg-blue-500 text-white rounded-full w-[75px] h-8 flex items-center justify-center"
                      onClick={addCoverSelection}
                    >
                      <FaPlus />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="m-2 bg-red-500 text-white rounded-full w-[75px] h-8 flex items-center justify-center"
                      onClick={() => removeCoverSelection(index)}
                    >
                      <FaMinus />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* <div>
                <label className="block text-sm font-medium text-gray-600">
                  Quantity:
                </label>
                <input
                  type="number"
                  name="quantity"
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
                  required
                  min="1"
                />
              </div> */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-600">
                  Rubber:
                </label>
                <input
                  type="number"
                  name="rubber"
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
                  required
                  min="0"
                />
              </div> */}
              {/* <div>
                <label className="block text-sm font-medium text-gray-600">
                  Nut Bolt:
                </label>
                <input
                  type="number"
                  name="nutbolt"
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none"
                  required
                  min="0"
                />
              </div> */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  End Cap:
                </label>
                <input
                  type="number"
                  name="endcap"
                  className="mt-1 w-60 border rounded-md px-3 py-2 focus:outline-none"
                  required
                  min="0"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 justify-between items-center">
              {/* Update here */}
              <div>
                <button
                  type="submit"
                  className="px-6 w-full py-4 text-[--black] font-bold bg-[--secound] text-xl rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap "
                >
                  Add to cart
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="px-6 w-full py-4  text-[--black] font-bold bg-white text-xl rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound]"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default MemoProduct;

// const MemoProduct2: React.FC = () => {
//   const location = useLocation();
//   const params = useParams();

//   const [productData, setProductData] = useState<ProductProps | null>(null);

//   const featureData = useRef<FeatureData[]>([]);

//   useEffect(() => {
//     if (location.state) {
//       setProductData(location.state as ProductProps);
//     }
//   }, [location.state]);

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
//     fetch(
//       "https://script.google.com/macros/s/AKfycbwE-1Stl8t8_XrB5MuRPQ1hROKpo3mYynDPnI1vNX6U5vakITchmA6nfmzQt8sYpqFIjw/exec"
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Find the blog that matches the readableTitle
//         const foundProduct = data.find(
//           (product: ProductProps) =>
//             product["Random Code to link the product"] === params.productID
//         );
//         if (foundProduct) {
//           setProductData(foundProduct);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching blog data:", error);
//       });
//   }, [params.productID]);

//   useEffect(() => {
//     processData();
//   }, [processData]);

//   return (

//   );
// };

export const Product = React.memo(MemoProduct);
