// import React, { useState } from "react";
// import { tempHeroImage } from "../../assets/Images";
// import { Hero } from "../../components";
// import { GoArrowRight, GoChevronRight, GoArrowLeft } from "react-icons/go";

// import baseImage from "../../assets/Images/product/product.png";

// type Product = "HANDRIL" | "BASE" | "ENDCAP" | "COLOR";

// const productSteps: Product[] = ["HANDRIL", "BASE", "ENDCAP", "COLOR"];

// export const Getquote: React.FC = () => {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(
//     "HANDRIL"
//   );
//   const [selectedBase, setSelectedBase] = useState<string | null>(null);

//   const handleProductClick = (product: Product) => {
//     setSelectedProduct(product);
//   };

//   const handleArrowClick = (direction: "left" | "right") => {
//     if (selectedProduct) {
//       const currentIndex = productSteps.indexOf(selectedProduct);
//       const newIndex =
//         direction === "left"
//           ? (currentIndex - 1 + productSteps.length) % productSteps.length
//           : (currentIndex + 1) % productSteps.length;
//       setSelectedProduct(productSteps[newIndex]);
//     }
//   };

//   const handleButtonClick = (buttonName: string) => {
//     setSelectedBase(buttonName);
//   };

//   const renderImage = () => {
//     return (
//       <img
//         src={baseImage}
//         alt="Product"
//         title="Product"
//         className="h-[35rem] w-[35rem] rounded-4xl ml-[10rem] mb-[9rem] mt-[7rem]"
//       />
//     );
//   };

//   return (
//     <main>
//       <section>
//         <Hero
//           img={tempHeroImage}
//           altText="Hero image for product"
//           header="Get a quote."
//           subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//           curve
//         />

//         <div>
//           <section className="flex flex-row gap-3 mt-[10rem] ml-[10.3rem] font-bold text-base">
//             {productSteps.map((step) => (
//               <div
//                 key={step}
//                 className="hover:text-[#03237b] cursor-pointer flex items-center"
//                 onClick={() => handleProductClick(step)}
//               >
//                 {`SELECT ${step}`} <GoChevronRight className="ml-2" />
//               </div>
//             ))}
//           </section>
//           <div className="flex justify-between">
//             <div className="mt-10">{renderImage()}</div>
//             <div className="flex flex-col mr-[25rem] mt-[10rem]">
//               <div className="ml-36">
//                 {productSteps.indexOf(selectedProduct!) + 1}/4
//               </div>
//               <div className="flex text-2xl font-normal mr-[5rem] text-[--third]">
//                 <GoArrowLeft
//                   className="mr-20 cursor-pointer"
//                   onClick={() => handleArrowClick("left")}
//                 />
//                 {`SELECT ${selectedProduct}`}
//                 <GoArrowRight
//                   className="ml-20 cursor-pointer"
//                   onClick={() => handleArrowClick("right")}
//                 />
//               </div>
//               <div className="flex gap-5 ml-7 mt-10 text-[--third] font-normal text-lg">
//                 {["base 1", "base 2", "base 3"].map((buttonName) => (
//                   <button
//                     key={buttonName}
//                     className={`h-12 w-24 border border-black rounded-4xl ${
//                       selectedBase === buttonName ? "bg-black text-white" : ""
//                     }`}
//                     onClick={() => handleButtonClick(buttonName)}
//                   >
//                     {buttonName}
//                   </button>
//                 ))}
//               </div>
//               <div className="flex gap-5 ml-7 mt-10 text-[--third] font-normal text-lg">
//                 {["base 4", "base 5", "base 6"].map((buttonName) => (
//                   <button
//                     key={buttonName}
//                     className={`h-12 w-24 border border-black rounded-4xl ${
//                       selectedBase === buttonName ? "bg-black text-white" : ""
//                     }`}
//                     onClick={() => handleButtonClick(buttonName)}
//                   >
//                     {buttonName}
//                   </button>
//                 ))}
//               </div>
//               <div className="flex gap-5 ml-7 mt-10 text-[--third] font-normal text-lg">
//                 {["base 7", "base 8", "base 9"].map((buttonName) => (
//                   <button
//                     key={buttonName}
//                     className={`h-12 w-24 border border-black rounded-4xl ${
//                       selectedBase === buttonName ? "bg-black text-white" : ""
//                     }`}
//                     onClick={() => handleButtonClick(buttonName)}
//                   >
//                     {buttonName}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <h1 className="italic text-[3.4rem] text-[--third] ml-[10rem]">
//           Fill this form to get your quote.
//         </h1>
//         <p className="text-3xl text-[--third] ml-[10rem]">via whatsapp.</p>
//         <div className="mb-12">
//           <form>
//             <div className="flex flex-col ml-[10rem]">
//               <label htmlFor="name" className="italic text-2xl mt-5">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 className="bg-transparent border border-black outline-none max-w-[45rem] h-[3rem] rounded-md px-7"
//               />
//               <label htmlFor="email" className="italic text-2xl mt-5">
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 className="bg-transparent border border-black outline-none max-w-[45rem] h-[3rem] rounded-md px-7"
//               />
//               <label htmlFor="whatsapp" className="italic text-2xl mt-5">
//                 Whatsapp no.
//               </label>
//               <input
//                 type="text"
//                 name="whatsapp"
//                 className="bg-transparent border border-black outline-none max-w-[45rem] h-[3rem] rounded-md px-7"
//               />
//               <button className="text-center bg-black text-white flex justify-center h-14 w-[14rem] text-[16px] rounded-4xl py-4 mt-10 ml-[90rem]">
//                 GET THE ESTIMATE
//                 <GoArrowRight className="ml-2 text-3xl -mt-1 " />
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// };

import React, { useState } from "react";
import { product, tempHeroImage } from "../../assets/Images";
import { Hero } from "../../components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Getquote: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [data, setData] = useState<prop1>({
    Base: "",
    Handrail: "",
    Endcap: "",
    Color: "",
  });

  const handleStage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const id = parseInt(e.currentTarget.id);
    setStage(id);
  };

  type prop = {
    Base: string[];
    Handrail: string[];
    Endcap: string[];
    Color: string[];
  };
  type prop1 = {
    Base: string;
    Handrail: string;
    Endcap: string;
    Color: string;
  };

  const handleData = (text) => {
    const temp = data;
    console.log(data[stages[stage] as keyof prop1]);
    temp[stages[stage] as keyof prop1] = text;
    setData(temp);
  };

  const Button = ({ text }) => (
    <button
      className={`border-2 border-black rounded-4xl py-4 px-8 text-xl ${
        data[stages[stage] as keyof prop1] && "bg-[--black]"
      }`}
      onClick={() => handleData(text)}
    >
      {text}
    </button>
  );

  const stages = ["Base", "Handrail", "Endcap", "Color"];
  const stagesContains: prop = {
    Base: ["Base0", "Base0", "Base0", "Base0"],
    Handrail: ["Handrail0", "Handrail0", "Handrail0", "Handrail0"],
    Endcap: ["Endcap0", "Endcap0", "Endcap0", "Endcap0"],
    Color: ["Color0", "Color0", "Color0", "Color0"],
  };

  return (
    <main>
      <Hero
        img={tempHeroImage}
        altText="Hero image for product"
        header="Get a quote."
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        curve
      />
      <section className="h-screen pt-10 px-44">
        <div className="flex gap-1 pb-10 cursor-pointer">
          {stages.map((top, index) => (
            <a
              onClick={handleStage}
              id={`${index}`}
              className={`${
                index <= stage ? "text-[--third] font-bold" : "text-[--grey]"
              } transition-500 underline-none`}
            >
              Select {top} {index !== 3 ? "> " : ""}
            </a>
          ))}
        </div>
        <div className="h-[78%] flex justify-between">
          <aside className="h-full">
            <img src={product} alt="product" className="rounded-4xl h-full" />
          </aside>
          <aside className="w-[40rem] px-16 flex flex-col justify-between">
            <header className="flex flex-col justify-center items-center py-11 pr-4 w-full">
              <h6>{stage + 1}/4</h6>
              <h2 className="flex justify-between w-full">
                <FaArrowLeft
                  className={`text-3xl transition-500 ${
                    stage === 0 ? "text-[--grey]" : "text-[--black]"
                  }`}
                  onClick={() => setStage((prev) => (prev <= 0 ? 0 : prev - 1))}
                />
                <div className="font-normal font-[Raleway] text-2xl ">
                  Select {stages[stage]}
                </div>
                <FaArrowRight
                  className={`text-3xl transition-500 ${
                    stage === 3 ? "text-[--grey]" : "text-[--black]"
                  }`}
                  onClick={() => setStage((prev) => (prev >= 3 ? 3 : prev + 1))}
                />
              </h2>
            </header>
            <div className="flex flex-wrap justify-center gap-8">
              {stagesContains[stages[stage] as keyof prop].map((stage) => (
                <Button text={stage} />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};
