// import { aboutHero } from "../../assets/Images";
// import { Description, Hero } from "../../components";
// import { aboutData } from "../../assets/Data";

// export const About = () => {
//   return (
//     <main>
//       <title>About Us - Imperio Railing</title>
//       <Hero
//         img={aboutHero}
//         header="About us"
//         altText="hero for aboutus"
//         subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//         curve
//       />
//       <section className="h-screen overflow-hidden">
//         <Description
//           yellowText="Our Company."
//           mainHeader="Crafting Excellence in Glass Railings."
//           text="At Imperio, we specialize in creating beautiful, glass railing systems that enhance any space. With a focus on innovation and quality, our team is dedicated to delivering top-notch solutions for both residential and commercial projects."
//         />

//         <div className="flex flex-row flex-wrap justify-center mt-16 space-x-16">
//           {aboutData.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white border shadow-lg hover hover:shadow-black rounded-3xl space-x-2
// 			   cursor-pointer overflow-hidden text-center h-[32rem] w-[25rem] m-4 transform transition-transform duration-700
// 			    hover:scale-105 flex flex-col items-center"
//             >
//               <div className="flex items-center justify-center h-[17rem]">
//                 <img
//                   src={item.img}
//                   title={item.title}
//                   alt={item.alt}
//                   className="h-[20rem] w-[20rem] object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
//                 <p className="mt-2 text-gray-600">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// import { aboutHero } from "../../assets/Images";
// import { Description, Hero } from "../../components";
// import { aboutData } from "../../assets/Data";

// export const About = () => {
//   return (
//     <main>
//       <title>About Us - Imperio Railing</title>
//       <Hero
//         img={aboutHero}
//         header="About us"
//         altText="hero for aboutus"
//         subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//         curve
//       />
//       <section className="min-h-screen overflow-hidden">
//         <Description
//           yellowText="Our Company."
//           mainHeader="Crafting Excellence in Glass Railings."
//           text="At Imperio, we specialize in creating beautiful, glass railing systems that enhance any space. With a focus on innovation and quality, our team is dedicated to delivering top-notch solutions for both residential and commercial projects."
//         />

//         <div className="flex flex-col md:flex-row flex-wrap justify-center mt-16 space-x-0 md:space-x-8 space-y-4 md:space-y-0">
//           {aboutData.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white border shadow-lg hover:shadow-black rounded-3xl
//                 cursor-pointer overflow-hidden text-center md:w-[20rem]  lg:w-[22rem] m-2 transform transition-transform duration-700
//                 hover:scale-105 flex flex-col  items-center"
//             >
//               <div className="flex items-center justify-center h-[17rem] w-full">
//                 <img
//                   src={item.img}
//                   title={item.title}
//                   alt={item.alt}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="mt-4 text-xl md:text-2xl font-semibold">
//                   {item.title}
//                 </h3>
//                 <p className="mt-2 text-gray-600 text-sm md:text-base">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

import { aboutHero } from "../../assets/Images";
import { Description, Hero } from "../../components";
import { aboutData } from "../../assets/Data";

export const About = () => {
  return (
    <main>
      <title>About Us - Imperio Railing</title>
      <Hero
        img={aboutHero}
        header="About us"
        altText="hero for aboutus"
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        curve
      />
      <section className="min-h-screen overflow-hidden px-4 md:px-8">
        <Description
          yellowText="Our Company."
          mainHeader="Crafting Excellence in Glass Railings."
          text="At Imperio, we specialize in creating beautiful, glass railing systems that enhance any space. With a focus on innovation and quality, our team is dedicated to delivering top-notch solutions for both residential and commercial projects."
        />

        <div className="flex flex-col gap-5 mb-5 md:flex-row flex-wrap justify-center mt-16 space-x-0 md:space-x-8 space-y-4 md:space-y-0">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="bg-white border shadow-lg hover:shadow-black rounded-3xl
                cursor-pointer overflow-hidden text-center w-full md:w-[20rem] lg:w-[22rem] lg:mx-4 pb-10 transform transition-transform duration-700
                hover:scale-105 flex flex-col items-center"
              style={{ height: "32rem" }} // Fixed height for all cards
            >
              <div className="flex items-center justify-center h-[17rem] w-full">
                <img
                  src={item.img}
                  title={item.title}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="mt-4 text-xl md:text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
