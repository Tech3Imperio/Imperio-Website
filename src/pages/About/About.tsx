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

// import { aboutHero, Middle } from "../../assets/Images";
// import { Description, Hero } from "../../components";
// import Metadata from "../../components/Metatag/Metatag";
// // import { aboutData } from "../../assets/Data";

// export const About = () => {
//   return (
//     <>
//       <Metadata
//         title={"About Us - Imperio Railing"}
//         description={
//           " Learn more about Imperio Railing System, your trusted provider of aluminum glass railings. Our commitment to quality, safety, and innovative design sets us apart in the industry. With years of experience, we specialize in creating stylish and durable railing solutions for both residential and commercial properties. Discover how our passion for excellence drives us to deliver the best products and services to enhance your living spaces."
//         }
//         keywords={
//           "About Imperio Railing, Aluminum Glass Railings, Railing Solutions, Quality Craftsmanship, Innovative Designs, Residential Railings, Commercial Railings, Safety Standards, Durable Products, Stylish Aesthetics, Experience, Trust, Quality, Design, Innovation, Safety, Glass Railings, Aluminum Railings, Railing Systems, Outdoor Spaces, Home Improvement, Custom Designs, Stylish Solutions, Architectural Design, Premium Railing Solutions, Expert Installation Services, Reliable Railing Provider"
//         }
//       />
//       <main>
//         <Hero
//           img={aboutHero}
//           header="About us"
//           altText="hero for aboutus"
//           subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//           curve
//         />
//         <section className="max-h-screen overflow-hidden px-4 md:px-8 mb-24">
//           <Description
//             yellowText="Our Company."
//             mainHeader="Crafting Excellence in Glass Railings."
//             text="At Imperio, we specialize in creating beautiful, glass railing systems that enhance any space. With a focus on innovation and quality, our team is dedicated to delivering top-notch solutions for both residential and commercial projects."
//           />
//         </section>
//         <div className=" bg-[#292929] w-[100vw] h-[58rem] flex">
//           <div className=" grid md:grid-cols-3 justify-between items-center mx-10 my-auto xl:px-[15rem] gap-10 md:gap-14">
//             <div className=" flex flex-col justify-center rounded-2xl md:mt-32 shadow-md shadow-[#f5ce02]">
//               <h2 className=" text-[#f5ce02] text-center md:text-xl py-2 lg:text-[2rem] Raleway  uppercase ">
//                 Our Mission
//               </h2>
//               <p className="text-[10px] lg:text-[0.900rem] px-2 text-[#d4d5d6] text-justify ">
//                 At{" "}
//                 <strong className=" text-white ">
//                   Imperio Railing Systems,
//                 </strong>{" "}
//                 our mission is to design and deliver cutting-edge, high-quality
//                 glass railing systems that enhance safety and elevate the
//                 aesthetic appeal of any space. We specialize in creating elegant
//                 and durable railings for balconies, staircases, and building
//                 facades. Our commitment to innovation ensures that each system
//                 not only meets but exceeds industry standards. By integrating
//                 advanced technology with sustainable practices, we aim to
//                 provide environmentally friendly and long-lasting solutions. Our
//                 goal is to transform spaces with stylish and secure glass
//                 railings, fostering a culture of excellence and customer
//                 satisfaction. Trust us to deliver the perfect railing system for
//                 your home or building project.
//               </p>
//             </div>
//             <div className=" flex flex-col justify-center rounded-2xl shadow-md shadow-[#f5ce02]">
//               <h2 className=" text-[#f5ce02] text-center text-xl py-2 lg:text-[2rem] Raleway uppercase ">
//                 Our Values
//               </h2>
//               <p className=" text-[10px] lg:text-[0.900rem] px-2 text-[#d4d5d6] text-justify">
//                 At{" "}
//                 <strong className=" text-white ">
//                   Imperio Railing Systems,
//                 </strong>{" "}
//                 our core values are the bedrock of our business and guide every
//                 decision we make. We are unwavering in our commitment to
//                 integrity, reliability, and accountability, ensuring that these
//                 principles underpin all our operations. Our dedication to
//                 product quality and glass railing durability reflects our belief
//                 in delivering top-notch, high-quality glass railings for both
//                 residential and commercial applications. We prioritize trust and
//                 transparency in our customer relationships, fostering long-term
//                 partnerships built on mutual respect and satisfaction. By
//                 adhering to these fundamental values, we strive to set the
//                 standard for excellence in glass railing solutions and maintain
//                 our reputation as a leader in the industry. Our mission is to
//                 consistently provide elegant glass railings that enhance the
//                 safety and aesthetics of every space, ensuring unparalleled
//                 performance and lasting durability.
//               </p>
//             </div>
//             <div className=" flex flex-col justify-center h-auto rounded-2xl md:mt-32 shadow-md shadow-[#f5ce02]">
//               <h2 className=" text-[#f5ce02] text-center text-xl py-2 lg:text-[2rem] Raleway uppercase ">
//                 Our Vision
//               </h2>
//               <p className=" text-[10px] lg:text-[0.900rem] px-2 text-[#d4d5d6] text-justify">
//                 Our vision is to become the global leader in advanced glass
//                 railing solutions, known for our relentless pursuit of
//                 innovation and excellence. We aspire to set the standard for
//                 superior design and unmatched craftsmanship in the glass railing
//                 industry. By focusing on delivering cutting-edge, high-quality
//                 glass railings for residential and commercial spaces, including
//                 balconies, staircases, and building facades, we aim to elevate
//                 the aesthetic and safety of every project. We are committed to
//                 utilizing the latest technology and sustainable practices to
//                 offer durable and stylish glass railings. Our goal is to be the
//                 preferred choice for customers seeking elegant and reliable
//                 glass railing systems that enhance their spaces and exceed their
//                 expectations.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* second section open */}
//         <div className=" flex flex-col lg:flex-row py-24 justify-centre mx-auto">
//           <div className=" xl:h-[70vh] md:w-[35rem] xl:w-[30rem] py-4 border-double rounded-3xl border-[#f5ce02] border-4 border-r-transparent mx-1 md:mx-4 xl:mx-40">
//             <img
//               className=" w-[24.5rem] h-auto md:min-w-[35rem] lg:min-w-[28rem] lg:h-[50rem] xl:min-w-[30rem] xl:h-full  rounded-2xl flex mx-[0.35rem] md:mx-14 lg:mx-6 xl:mx-14"
//               src={Middle}
//               alt=""
//             />
//           </div>
//           <div className=" mx-14 px-2 flex flex-col">
//             <h1 className=" text-4xl font-normal py-8  md:text-[4rem] md:font-light Raleway  text-[#f5ce02]">
//               Our Value
//             </h1>
//             <div className="py-1 text-[0.900rem]">
//               <ul className="flex flex-col gap-4 text-[#03237b] text-justify">
//                 <li className=" flex flex-row gap-6 ">
//                   <span className=" border-[#03237b] border max-h-8  min-w-8 rounded-full flex justify-center items-center">
//                     1
//                   </span>
//                   Imperio Railing Systems offers contemporary balcony railings
//                   that elevate the aesthetic appeal of your home. Our glass
//                   railings provide a seamless look, creating an open and
//                   inviting outdoor space. Experience the perfect blend of style
//                   and sophistication with our modern designs.
//                 </li>
//                 <li className=" flex flex-row gap-6">
//                   <span className=" border-[#03237b] max-h-8 min-w-8 border rounded-full flex justify-center  items-center">
//                     2
//                   </span>
//                   Built with high-quality materials, our glass railings ensure
//                   maximum safety without compromising style. Engineered to
//                   withstand harsh weather conditions, they provide long-lasting
//                   performance for any residential building. Enjoy peace of mind
//                   with railings that prioritize your family’s safety.
//                 </li>
//                 <li className=" flex flex-row gap-6">
//                   <span className=" border-[#03237b] max-h-8 min-w-8 border rounded-full flex justify-center  items-center">
//                     3
//                   </span>{" "}
//                   We understand that every home is unique, which is why we offer
//                   customizable balcony railings. Tailor our designs to fit your
//                   specific style and functional needs, providing a personalized
//                   touch to your property. Transform your outdoor area with
//                   solutions that reflect your vision.
//                 </li>
//                 <li className=" flex flex-row gap-6">
//                   <span className="  border-[#03237b] max-h-8 min-w-8 border rounded-full flex justify-center  items-center">
//                     4
//                   </span>
//                   Our balcony railing systems are designed for easy
//                   installation, making the process hassle-free for homeowners
//                   and contractors alike. Additionally, our glass materials
//                   require minimal maintenance, ensuring they remain pristine for
//                   years to come. Enjoy elegance and convenience with every
//                   railing solution.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         {/* second section close */}
//       </main>
//     </>
//   );
// };

import { useState } from "react";
import { aboutHero, Middle } from "../../assets/Images";
import { Description, Hero } from "../../components";
import Metadata from "../../components/Metatag/Metatag";
import { motion, AnimatePresence } from "framer-motion";
// import { aboutData } from "../../assets/Data";

interface TabContent {
  title: string;
  content: {
    short: string;
    long: string;
  };
}

interface TabContentMap {
  [key: string]: TabContent;
}
export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("mission");

  const tabContent: TabContentMap = {
    mission: {
      title: "Our Mission",
      content: {
        short:
          "At Imperio Railing Systems, we specialize in delivering high-quality glass railings that seamlessly blend safety, durability, and style. Our innovative and sustainable solutions are designed to enhance any space, from balconies to facades, ensuring that your property not only looks stunning but also meets the highest safety standards.",
        long: "At Imperio Railing Systems, our mission is to design and deliver cutting-edge, high-quality glass railing systems that enhance safety and elevate the aesthetic appeal of any space. We specialize in creating elegant and durable railings for balconies, staircases, and building facades. Our commitment to innovation ensures that each system not only meets but exceeds industry standards. By integrating advanced technology with sustainable practices, we aim to provide environmentally friendly and long-lasting solutions. Our goal is to transform spaces with stylish and secure glass railings, fostering a culture of excellence and customer satisfaction. Trust us to deliver the perfect railing system for your home or building project.",
      },
    },
    values: {
      title: "Our Values",
      content: {
        short:
          "At Imperio Railing Systems, we prioritize reliability in our glass railing solutions, ensuring long-lasting performance and customer satisfaction. Our commitment to quality craftsmanship and safety standards guarantees that every installation enhances your space while providing peace of mind.",
        long: "At Imperio Railing Systems, our core values—integrity, reliability, and accountability—form the foundation of our business. We are committed to delivering high-quality glass railings for residential and commercial applications, emphasizing trust and transparency in our customer relationships. Our dedication to product quality and durability sets the standard for excellence in glass railing solutions. Our mission is to provide elegant railings that enhance safety and aesthetics, ensuring outstanding performance and lasting durability in every space. We believe that our innovative designs and customer-centric approach will continue to redefine the industry standards and elevate our clients' experiences.",
      },
    },
    vision: {
      title: "Our Vision",
      content: {
        short:
          "At Imperio Railing Systems, our vision is to lead the industry through innovation and sustainability, delivering eco-friendly glass railing solutions that prioritize customer satisfaction. We strive to set the standard for quality and safety, ensuring our products not only enhance aesthetics but also contribute to a sustainable future.",
        long: "Our vision is to become the global leader in advanced glass railing solutions, known for our relentless pursuit of innovation and excellence. We aspire to set the standard for superior design and unmatched craftsmanship in the glass railing industry. By focusing on delivering cutting-edge, high-quality glass railings for residential and commercial spaces, including balconies, staircases, and building facades, we aim to elevate the aesthetic and safety of every project. We are committed to utilizing the latest technology and sustainable practices to offer durable and stylish glass railings. Our goal is to be the preferred choice for customers seeking elegant and reliable glass railing systems that enhance their spaces and exceed their expectations.",
      },
    },
  };

  const valuePoints: { title: string; description: string }[] = [
    {
      title: "Elevated Aesthetic Appeal",
      description:
        "Imperio Railing Systems offers contemporary balcony railings that elevate the aesthetic appeal of your home. Our glass railings provide a seamless look, creating an open and inviting outdoor space. Experience the perfect blend of style and sophistication with our modern designs.",
    },
    {
      title: "Safety Without Compromise",
      description:
        "Built with high-quality materials, our glass railings ensure maximum safety without compromising style. Engineered to withstand harsh weather conditions, they provide long-lasting performance for any residential building. Enjoy peace of mind with railings that prioritize your family's safety.",
    },
    {
      title: "Customized to Your Unique Vision",
      description:
        "We understand that every home is unique, which is why we offer customizable balcony railings. Tailor our designs to fit your specific style and functional needs, providing a personalized touch to your property. Transform your outdoor area with solutions that reflect your vision.",
    },
    {
      title: "Effortless Installation & Maintenance",
      description:
        "Our balcony railing systems are designed for easy installation, making the process hassle-free for homeowners and contractors alike. Additionally, our glass materials require minimal maintenance, ensuring they remain pristine for years to come. Enjoy elegance and convenience with every railing solution.",
    },
  ];

  return (
    <>
      <Metadata
        title={"About Us - Imperio Railing"}
        description={
          " Learn more about Imperio Railing System, your trusted provider of aluminum glass railings. Our commitment to quality, safety, and innovative design sets us apart in the industry. With years of experience, we specialize in creating stylish and durable railing solutions for both residential and commercial properties. Discover how our passion for excellence drives us to deliver the best products and services to enhance your living spaces."
        }
        keywords={
          "About Imperio Railing, Aluminum Glass Railings, Railing Solutions, Quality Craftsmanship, Innovative Designs, Residential Railings, Commercial Railings, Safety Standards, Durable Products, Stylish Aesthetics, Experience, Trust, Quality, Design, Innovation, Safety, Glass Railings, Aluminum Railings, Railing Systems, Outdoor Spaces, Home Improvement, Custom Designs, Stylish Solutions, Architectural Design, Premium Railing Solutions, Expert Installation Services, Reliable Railing Provider"
        }
        ogTitle="About Us - Imperio Railing"
        ogDescription="About Imperio Railing, Aluminum Glass Railings, Railing Solutions, Quality Craftsmanship, Innovative Designs, Residential Railings, Commercial Railings, Safety Standards, Durable Products, Stylish Aesthetics, Experience, Trust, Quality, Design, Innovation, Safety, Glass Railings, Aluminum Railings, Railing Systems, Outdoor Spaces, Home Improvement, Custom Designs, Stylish Solutions, Architectural Design, Premium Railing Solutions, Expert Installation Services, Reliable Railing Provider"
        ogImage={aboutHero}
        ogUrl={"https://www.imperiorailing.com/aboutus"}
      />
      <main>
        <Hero
          img={aboutHero}
          header="About us"
          altText="hero for aboutus"
          subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
          curve
        />
        <section className="max-h-screen overflow-hidden px-4 md:px-8 mb-24">
          <Description
            yellowText="Our Company."
            mainHeader="Crafting Excellence in Glass Railings."
            text="At Imperio, we specialize in creating beautiful, glass railing systems that enhance any space. With a focus on innovation and quality, our team is dedicated to delivering top-notch solutions for both residential and commercial projects."
          />
        </section>
        <div className="min-h-screen bg-white text-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto "
          >
            <div className="flex flex-col lg:flex-row mb-20">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 mx-auto"
              >
                <div className="relative">
                  <img
                    src={Middle}
                    alt="Imperio Railing Systems"
                    // width={800}
                    // height={600}
                    className="object-cover w-full h-[400px] md:h-[55rem] rounded-2xl md:w-auto lg:h-[43rem] lg:w-auto xl:w-[800px] xl:h-[600px] md:p-14 lg:rounded-[4rem]"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 p-6"
              >
                <div className="space-y-8">
                  <div className="flex space-x-4 mb-6">
                    {Object.keys(tabContent).map((tab) => (
                      <button
                        key={tab}
                        className={`py-2 px-4 text-lg font-semibold transition-all duration-300 border-b-2 ${
                          activeTab === tab
                            ? "text-[#f5ce02] border-[#03237b]"
                            : "text-gray-400 border-transparent hover:text-gray-600"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tabContent[tab].title}
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#292929] p-8 rounded-lg"
                    >
                      <p className="text-[#f1efe7] leading-relaxed text-lg text-justify">
                        {window.innerWidth < 768
                          ? tabContent[activeTab].content.short
                          : tabContent[activeTab].content.long}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className=""
            >
              <h2 className=" text-center Raleway text-[35px] md:text-[4rem] text-[#f5ce02]">
                Our Value Proposition
              </h2>
              <div className="grid md:grid-cols-2 gap-12 p-4 md:p-14 lg:p-24 ">
                {valuePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    {/* <div className="flex-shrink-0 w-8 h-8 bg-[#03237b] text-white rounded-full flex items-center justify-center text-xl font-semibold">
                      {index + 1}
                    </div> */}
                    <div>
                      <h3 className="text-xl Raleway-regular text-[#03237b] mb-2">
                        {point.title}
                      </h3>
                      <p className="text-[#7a8088] text-sm md:text-base leading-relaxed text-justify">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
};
