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
//     const temp = data;
//     console.log(data[stages[stage] as keyof prop1]);
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
//               {stagesContains[stages[stage] as keyof prop].map((stage) => (
//                 <Button text={stage} />
//               ))}
//             </div>
//           </aside>
//         </div>
//       </section>
//       <form
//         action="https://script.google.com/macros/s/AKfycbwh35yiN6OckRvyzdjtH_q0BvUki7_v4-tu0N91_DvnfHoH2-sta_Tbu-rqhc1sDRgs/exec"
//         method="post"
//       >
//         <div className=" flex flex-col w-[28rem] ml-44">
//           <label htmlFor="name" className=" text-black text-lg">
//             Name.
//           </label>
//           <input
//             type="text"
//             name="name"
//             className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
//           />
//           <label htmlFor="email" className=" text-black text-lg">
//             Email.
//           </label>
//           <input
//             type="text"
//             name="email"
//             className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
//           />
//           <label htmlFor="WhatsappNo" className=" text-black text-lg">
//             Whatsapp No.
//           </label>
//           <input
//             type="text"
//             name="WhatsappNo"
//             className="bg-transparent border-black border-[1px] rounded-full h-8  p-4"
//           />
//           <label htmlFor="ProductName" className=" text-black text-lg">
//             Product Name
//           </label>
//           <input
//             type="text"
//             name="ProductName"
//             className="bg-transparent border-black border-[1px] rounded-full h-8  p-4"
//           />
//           <label htmlFor="Area" className=" text-black text-lg">
//             Area
//           </label>
//           <input
//             type="text"
//             name="Area"
//             className="bg-transparent border-black border-[1px] rounded-full h-8  p-4"
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
    const temp = { ...data };
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

  const existingWhatsAppNumbers = ["123456789012", "234567890123"];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const whatsappNo = form.WhatsappNo.value;

    if (whatsappNo.length !== 13) {
      alert(
        "Check your number. WhatsApp number size should be 12 including country code."
      );
      return;
    }

    if (existingWhatsAppNumbers.includes(whatsappNo)) {
      alert("WhatsApp number already exists in the database.");
      return;
    }

    form.submit();
    alert("Thank you! Your request is submitted.");

    form.reset();
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
              key={index}
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
              {stagesContains[stages[stage] as keyof prop].map(
                (stage, index) => (
                  <Button key={index} text={stage} />
                )
              )}
            </div>
          </aside>
        </div>
      </section>
      <form
        onSubmit={handleSubmit}
        action="https://script.google.com/macros/s/AKfycbw7-OYzjqJJcPHtm4QtIrXAu-PbuB5KsCGn6NachmsRhBE48PZadNpGG6uF8dDWUkZ0/exec"
        method="post"
      >
        <div className="flex flex-col w-[28rem] ml-44">
          <label htmlFor="name" className="text-black text-lg">
            Name.
          </label>
          <input
            type="text"
            name="name"
            className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
          />
          <label htmlFor="email" className="text-black text-lg">
            Email.
          </label>
          <input
            type="text"
            name="email"
            className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
          />
          <label htmlFor="WhatsappNo" className="text-black text-lg">
            Whatsapp No.
          </label>
          <input
            type="text"
            name="WhatsappNo"
            className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
          />
          <label htmlFor="ProductName" className="text-black text-lg">
            Product Name
          </label>
          <input
            type="text"
            name="ProductName"
            className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
          />
          <label htmlFor="Area" className="text-black text-lg">
            Area
          </label>
          <input
            type="text"
            name="Area"
            className="bg-transparent border-black border-[1px] rounded-full h-8 p-4"
          />
        </div>
        <button
          type="submit"
          className="text-base font-bold border-black translate-x-[32rem] mt-5 w-28 h-10 rounded-full bg-[#f5ce02]"
        >
          Send
        </button>
      </form>
    </main>
  );
};
