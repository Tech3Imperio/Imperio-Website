import React, { useState } from "react";
import { product, tempHeroImage } from "../../assets/Images";
import { Hero } from "../../components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

type Stage = "Base" | "Handrail" | "Endcap" | "Color";
type Data = Record<Stage, string>;
type StagesContains = Record<Stage, string[]>;

const stages: Stage[] = ["Base", "Handrail", "Endcap", "Color"];
const stagesContains: StagesContains = {
  Base: ["Base0", "Base1", "Base2", "Base3", "Base4", "Base5"],
  Handrail: [
    "Handrail0",
    "Handrail1",
    "Handrail2",
    "Handrail3",
    "Handrail4",
    "Handrail5",
  ],
  Endcap: ["Endcap0", "Endcap1", "Endcap2", "Endcap3", "Endcap4", "Endcap5"],
  Color: ["Color0", "Color1", "Color2", "Color3", "Color4", "Color5"],
};

export const Getquote: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [data, setData] = useState<Data>({
    Base: "",
    Handrail: "",
    Endcap: "",
    Color: "",
  });

  const handleStage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setStage(parseInt(e.currentTarget.id));
  };

  const handleData = (text: string) => {
    setData((prevData) => {
      const currentStage = stages[stage];
      return {
        ...prevData,
        [currentStage]: prevData[currentStage] === text ? "" : text,
      };
    });
  };

  return (
    <form>
      <title>Quote - Imperio Railing</title>
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
              key={index}
              className={`${
                index <= stage ? "text-[--third] font-bold" : "text-[--grey]"
              } transition-500 no-underline`}
            >
              Select {top} {index !== 3 ? "> " : ""}
            </a>
          ))}
        </div>
        <div className="h-[78%] flex justify-between">
          <aside className="h-full">
            <img src={product} alt="product" className="rounded-4xl h-full" />
          </aside>
          <aside className="w-[40rem] px-16 pt-11 pb-28 flex flex-col justify-between">
            <header className="flex flex-col justify-center items-center pr-4 w-full">
              <h6>{stage + 1}/4</h6>
              <h2 className="flex justify-between w-full">
                <FaArrowLeft
                  className={`text-3xl transition-500 ${
                    stage === 0 ? "text-[--grey]" : "text-[--black]"
                  }`}
                  onClick={() => setStage((prev) => (prev <= 0 ? 0 : prev - 1))}
                />
                <div className="font-normal text-2xl">
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
            <div className="flex flex-wrap justify-center gap-8 ">
              {stagesContains[stages[stage]].map((text) => (
                <option
                  key={text}
                  className={`border-2  rounded-full py-4 px-8 text-xl transition-500  ${
                    data[stages[stage]] === text
                      ? "bg-[--black] text-white border-transparent"
                      : "bg-transparent text-black border-black"
                  } hover:text-[--secound] hover:border-[--secound]`}
                  onClick={() => handleData(text)}
                >
                  {text}
                </option>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section className="h-screen px-44">
        <h1 className="text-[3.5rem] text-[--third] pb-1">
          Fill this form to get your quote.
        </h1>
        <h6 className="text-3xl italic text-[--third]">via whatsapp.</h6>
        <div className="flex max-laptop:flex-col py-5 justify-center laptop:justify-between laptop:items-end">
          <aside className="flex flex-col gap-5 w-full laptop:w-fit">
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="name" className="italic w-fit">
                Name <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="name"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="email" className="italic w-fit">
                Email <sup className="text-red-600">*</sup>
              </label>
              <input
                type="email"
                id="email"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="number" className="italic w-fit">
                Whatsapp No. <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                pattern="\d*"
                id="number"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="Pname" className="italic w-fit">
                Product Name <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="Pname"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="quantity" className="italic w-fit">
                Quantity (ft<sup>2</sup>) <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="quantity"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="unit" className="italic w-fit">
                Unit <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="unit"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
          </aside>
          <aside className="">
            <button
              type="submit"
              className="py-7 px-9 text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-full flex gap-2"
            >
              GET THE ESTIMATE <IoArrowForward className="text-2xl" />
            </button>
          </aside>
        </div>
      </section>
    </form>
  );
};

export default Getquote;

// import React, { useState } from "react";
// import { product, tempHeroImage } from "../../assets/Images";
// import { Hero } from "../../components";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// export const Getquote: React.FC = () => {
//   const [stage, setStage] = useState(0);
//   const [data, setData] = useState<prop1>({
//     Base: "",
//     Handrail: "",
//     Endcap: "",
//     Color: "",
//   });

//   const handleStage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     const id = parseInt(e.currentTarget.id);
//     setStage(id);
//   };

//   type prop = {
//     Base: string[];
//     Handrail: string[];
//     Endcap: string[];
//     Color: string[];
//   };
//   type prop1 = {
//     Base: string;
//     Handrail: string;
//     Endcap: string;
//     Color: string;
//   };

//   const handleData = (text) => {
//     const temp = { ...data };
//     temp[stages[stage] as keyof prop1] = text;
//     setData(temp);
//   };

//   const Button = ({ text }) => (
//     <button
//       className={`border-2 border-black rounded-4xl py-4 px-8 text-xl ${
//         data[stages[stage] as keyof prop1] && "bg-[--black]"
//       }`}
//       onClick={() => handleData(text)}
//     >
//       {text}
//     </button>
//   );

//   const stages = ["Base", "Handrail", "Endcap", "Color"];
//   const stagesContains: prop = {
//     Base: ["Base0", "Base0", "Base0", "Base0"],
//     Handrail: ["Handrail0", "Handrail0", "Handrail0", "Handrail0"],
//     Endcap: ["Endcap0", "Endcap0", "Endcap0", "Endcap0"],
//     Color: ["Color0", "Color0", "Color0", "Color0"],
//   };

//   const existingWhatsAppNumbers = ["123456789012", "234567890123"];
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const whatsappNo = form.WhatsappNo.value;

//     if (whatsappNo.length !== 13) {
//       alert(
//         "Check your number. WhatsApp number size should be 12 including country code."
//       );
//       return;
//     }

//     if (existingWhatsAppNumbers.includes(whatsappNo)) {
//       alert("WhatsApp number already exists in the database.");
//       return;
//     }

//     form.submit();
//     alert("Thank you! Your request is submitted.");

//     form.reset();
//   };

//   return (
//     <main>
//       <Hero
//         img={tempHeroImage}
//         altText="Hero image for product"
//         header="Get a quote."
//         subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//         curve
//       />
//       <section className="h-screen pt-10 px-44">
//         <div className="flex gap-1 pb-10 cursor-pointer">
//           {stages.map((top, index) => (
//             <a
//               key={index}
//               onClick={handleStage}
//               id={`${index}`}
//               className={`${
//                 index <= stage ? "text-[--third] font-bold" : "text-[--grey]"
//               } transition-500 underline-none`}
//             >
//               Select {top} {index !== 3 ? "> " : ""}
//             </a>
//           ))}
//         </div>
//         <div className="h-[78%] flex justify-between">
//           <aside className="h-full">
//             <img src={product} alt="product" className="rounded-4xl h-full" />
//           </aside>
//           <aside className="w-[40rem] px-16 flex flex-col justify-between">
//             <header className="flex flex-col justify-center items-center py-11 pr-4 w-full">
//               <h6>{stage + 1}/4</h6>
//               <h2 className="flex justify-between w-full">
//                 <FaArrowLeft
//                   className={`text-3xl transition-500 ${
//                     stage === 0 ? "text-[--grey]" : "text-[--black]"
//                   }`}
//                   onClick={() => setStage((prev) => (prev <= 0 ? 0 : prev - 1))}
//                 />
//                 <div className="font-normal font-[Raleway] text-2xl ">
//                   Select {stages[stage]}
//                 </div>
//                 <FaArrowRight
//                   className={`text-3xl transition-500 ${
//                     stage === 3 ? "text-[--grey]" : "text-[--black]"
//                   }`}
//                   onClick={() => setStage((prev) => (prev >= 3 ? 3 : prev + 1))}
//                 />
//               </h2>
//             </header>
//             <div className="flex flex-wrap justify-center gap-8">
//               {stagesContains[stages[stage] as keyof prop].map(
//                 (stage, index) => (
//                   <Button key={index} text={stage} />
//                 )
//               )}
//             </div>
//           </aside>
//         </div>
//       </section>
//       <form
//         onSubmit={handleSubmit}
//         action="https://script.google.com/macros/s/AKfycbyqDgW3mG_ykP_GklM-ruT83fYgzDtLoxixoOnxa1yJpbCG-OrGxkErDnbyvneAXbUS/exec"
//         method="post"
//       >
//         <div className="flex flex-col w-[28rem] ml-44">
//           <label htmlFor="name" className="text-black text-lg">
//             Name
//           </label>
//           <input
//             type="text"
//             name="Name"
//             className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
//             required
//           />
//           <label htmlFor="email" className="text-black text-lg">
//             Email
//           </label>
//           <input
//             type="text"
//             name="Email"
//             className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
//             required
//           />
//           <label htmlFor="WhatsappNo" className="text-black text-lg">
//             Whatsapp No.
//           </label>
//           <input
//             type="text"
//             name="WhatsappNo"
//             className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
//             required
//           />
//           <label htmlFor="ProductName" className="text-black text-lg">
//             Product Name
//           </label>
//           <input
//             type="text"
//             name="ProductName"
//             className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
//             required
//           />
//           <label htmlFor="Quantity" className="text-black text-lg">
//             Quantity (ft<sup>2</sup>)
//           </label>
//           <input
//             type="text"
//             name="Quantity"
//             className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
//             required
//           />
//           <label htmlFor="Unit" className="text-black text-lg">
//             Unit
//           </label>
//           <input
//             type="number"
//             name="Unit"
//             className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="text-base font-bold border-black translate-x-[32rem] mt-5 w-28 h-10 rounded-full bg-[#f5ce02]"
//         >
//           Send
//         </button>
//       </form>
//     </main>
//   );
// };
