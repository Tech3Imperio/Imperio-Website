// import React from "react";
// import { heroImage, descImage } from "../../assets/Images";
// import {
//   Hero,
//   Description,
//   GreyButton,
//   TextComponent,
//   BlackButton,
//   Quote,
//   HorizontalCarousel,
//   VerticalCarousel,
//   ImageScrolls,
//   Testimonials,
// } from "../../components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { scrollData, testimonialsData } from "../../assets/Data";

// const text =
//   "Imperio offers exquisite glass railing systems blending safety and style. Explore innovative designs, LED options, and elegance. See our work, hear from satisfied clients, and take the next step with us.";

// export const Home: React.FC = () => {
//   const isDesktop = window.innerWidth > 1000;

//   return (
//     <main>
//       <title>Imperio Railing Systems - Home</title>
//       <Hero
//         img={heroImage}
//         altText="hero for home"
//         header={
//           <>
//             Unmatched Clarity,
//             <br />
//             Ultimate Style.
//           </>
//         }
//         subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//         height
//       >
//         <div className="p-8 pl-0 w-max text-xs">
//           <GreyButton path="/aboutus">KNOW MORE</GreyButton>
//         </div>
//       </Hero>

//       <section className="flex flex-col lg:flex-row justify-center gap-8 px-10 phone:px-20 tablet:px-32 xl:px-44 pb-9 phone:pb-16 tablet:pb-24 xl:pb-36 pt-6 phone:pt-14 tablet:pt-24 xl:pt-36">
//         <div className="flex flex-col gap-2 phone:gap-4">
//           <h1 className="YellowText text-lg tablet:text-4xl lg:text-5xl max-xl:text-3xl max-2xl:text-4xl">
//             Our Vision
//           </h1>
//           <h1 className="text-3xl tablet:text-4xl lg:text-5xl Raleway max-xl:text-4xl text-[--third]">
//             Crafting Excellence in Glass Railings.
//           </h1>
//           <p className="w-full lg:w-[37rem] text-xs tablet:text-base lg:text-lg xl:text-xl italic text-[--grey]">
//             At Imperio, we specialize in creating beautiful, durable glass
//             railing systems that enhance any space. With a focus on innovation
//             and quality, our team is dedicated to delivering top-notch solutions
//             for both residential and commercial projects.
//           </p>
//           <div className="pt-8 text-[9px] phone:text-xs">
//             <BlackButton path="/aboutus">KNOW MORE</BlackButton>
//           </div>
//         </div>
//         <div className="w-full lg:w-3/5">
//           <img
//             src={descImage}
//             alt="Description Image"
//             className="w-full h-auto"
//             title="Description Image"
//           />
//         </div>
//       </section>

//       <Description
//         yellowText="Feature with future."
//         mainHeader="Innovative Designs for Every Need."
//         text="With innovative designs, our products redefine modern spaces. Explore today."
//         black
//       >
//         {isDesktop ? (
//           <div className="flex px-0 phone:px-6 tablet:px-10 laptop:px-20 py-12 gap-32 items-center">
//             <VerticalCarousel direction className="max-w-[40%] h-fit">
//               {scrollData.map((item) => (
//                 <img
//                   src={item.img}
//                   alt={item.alt}
//                   key={item.img}
//                   className="rounded-4xl max-w-[30rem] h-[30rem]"
//                   title={item.alt}
//                 />
//               ))}
//             </VerticalCarousel>
//             <VerticalCarousel className="w-[60%]">
//               {scrollData.map((item, index) => (
//                 <div key={index}>
//                   <div className="flex items-center gap-5 text-white">
//                     <h1 className="text-8xl">{index + 1}.</h1>
//                     <div className="flex flex-col gap-5">
//                       <h1 className="Raleway text-5xl">{item.header}</h1>
//                       <p className="text-2xl w-[38rem]">{item.subheader}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </VerticalCarousel>
//           </div>
//         ) : (
//           <HorizontalCarousel className="pb-12">
//             {scrollData.map((item, index) => (
//               <div className="space-y-8" key={index}>
//                 <div>
//                   <img
//                     src={item.img}
//                     alt={item.alt}
//                     title={item.alt}
//                     className="rounded-4xl w-[20rem] h-[22rem]"
//                   />
//                 </div>
//                 <div className="flex flex-col text-white">
//                   <h1 className="text-4xl">{index + 1}.</h1>
//                   <h1 className="Raleway text-[1.75rem]">{item.header}</h1>
//                   <p className="text-xs w-11/12 italic">{item.subheader}</p>
//                 </div>
//               </div>
//             ))}
//           </HorizontalCarousel>
//         )}
//       </Description>
//       <TextComponent texts={text} />
//       <Description
//         mainHeader="Work Showcase."
//         text="Our portfolio features diverse projects, from luxury residential balconies to modern commercial spaces, highlighting our commitment to quality and detail."
//       />
//       <ImageScrolls className="py-14 overflow-hidden" />
//       <div className="overflow-hidden">
//         <Testimonials cards={testimonialsData} />
//       </div>
//       <Quote />
//     </main>
//   );
// };
import React, { useEffect, useState } from "react";
import { heroImage, descImage } from "../../assets/Images";
//Festival Time only on This belo code
// import { descImage, heroImage } from "../../assets/Images";
// import { descImage } from "../../assets/Images";
import { Helmet } from "react-helmet";
import favicondark from "../../assets/Images/logo/favicondark.ico";

import {
  Hero,
  Description,
  GreyButton,
  TextComponent,
  BlackButton,
  Quote,
  HorizontalCarousel,
  VerticalCarousel,
  ImageScrolls,
  Testimonials,
  // Dealers,
} from "../../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { scrollData, testimonialsData } from "../../assets/Data";
// import Metadata from "../../components/Metatag/Metatag";

//import for the Festival Component
// import Festival from "../../components/Festival";

const text =
  "Imperio offers exquisite glass railing systems that blend safety and style. Explore innovative designs, LED options, and elegance. We also provide dealership opportunities for those looking to partner with us. See our work, hear from satisfied clients, and take the next step with us.";

export const Home: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Glass Railing | Aluminium Glass Railing | Balcony Glass Railings |
          Staircase Glass Railings | Glass Railing Dealers
        </title>
        <meta
          name="description"
          content="Discover glass railing, aluminium glass railing, balcony glass railing solutions with Imperio Railing Systems in near me  Mumbai, Maharashtra,Punjab, Uttar Pradesh, Jharkhand, Karnataka, Andhra Pradesh India. Our durable, modern and stylish glass railing, including balcony glass railings and staircase glass railing, for any space. Various aluminium accessories available like base, handrails, brackets, spigots, etc. Transform your space with our high-quality glass railings today!. Best suppliers and dealers in India for glass railing. Transform your space with our top Quality glass railing systems today. We are one of the best suppliers and dealers in India for glass railings."
        />
        <meta
          name="keywords"
          content="premium glass railings, toughened glass manufacturer, durable glass railing systems, modern glass railing, stylish glass railing, balcony glass railing, balcony glass design, glass handrail price, custom glass installation,custom glass railing, Architectural Glass Design, Glass Railing Safety & Maintenance"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.imperiorailing.com/" />
        <meta
          name="instagram:url"
          content="https://www.instagram.com/imperio.railings/?igsh=OWlmaXB6NnJpcWJ0"
        />
        <meta name="twitter:url" content="https://x.com/ImperioRailing" />
        <meta
          name="facebook:url"
          content="https://www.facebook.com/imperiorailingsystem"
        />
        <meta
          name="twitter:title"
          content="glass railing supplier in mumbai and manufacturing"
        />
        <link rel="icon" href={favicondark} />
      </Helmet>
      <main>
        <Hero
          img={heroImage}
          altText="hero for home"
          header={
            <>
              Unmatched Clarity,
              <br />
              Ultimate Style.
            </>
          }
          subHeader="Sleek and durable glass railing systems, perfect for balconies and staircases. Enhance safety and style with frameless glass railings, aluminum options, and more to elevate your indoor and outdoor spaces."
          height
        >
          <div className="p-8 pl-0 w-max text-xs">
            <GreyButton path="/aboutus">KNOW MORE</GreyButton>
          </div>
        </Hero>

        {/* Use this Component in Festive Season only */}
        {/* <Festival /> */}

        <section className="flex flex-col lg:flex-row justify-center gap-8 px-10 phone:px-20 tablet:px-32 xl:px-44 pb-9 phone:pb-16 tablet:pb-24 xl:pb-36 pt-6 phone:pt-14 tablet:pt-24 xl:pt-36">
          <div className="flex flex-col gap-2 phone:gap-4">
            <h2 className="YellowText text-lg tablet:text-4xl lg:text-5xl max-xl:text-3xl max-2xl:text-4xl">
              Our Vision
            </h2>
            <h2 className="text-3xl tablet:text-4xl lg:text-5xl Raleway max-xl:text-4xl text-[--third]">
              Crafting Excellence in Glass Railings.
            </h2>
            <p className="w-full lg:w-[37rem] text-xs tablet:text-base lg:text-lg xl:text-xl italic text-[--grey]">
              At Imperio, we specialize in creating beautiful, durable glass
              railing systems, including aluminum glass railings, custom glass
              railings, balcony glass railings, and staircase glass railings,
              that enhance any space. Based in Mumbai, Maharashtra, India, our
              focus on innovation and quality ensures that our team delivers
              top-notch solutions for both residential and commercial projects.
            </p>
            <div className="pt-8 text-[9px] phone:text-xs">
              <BlackButton path="/aboutus">KNOW MORE</BlackButton>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <img
              src={descImage}
              alt="Description Image"
              className="w-full h-auto object-cover"
              title="Description Image"
            />
          </div>
        </section>

        <Description
          // yellowText="Feature with future."
          // mainHeader="Innovative Designs for Every Need."
          // text="With innovative glass railing designs, our products redefine modern spaces. As trusted glass railing suppliers and dealers in Maharashtra, Rajasthan, Uttar Pradesh, Mohali, Uttarakhand, Bengaluru, and across India, explore our premium glass handrails and railing systems today"
          black
        >
          <div className="max-w-max flex flex-col md:flex-row mx-auto -mt-10  gap-8 p-4 ">
            <div className="flex flex-col md:w-[70%] gap-1 tablet:gap-6">
              <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
                Feature with future
              </h2>
              <h3 className="text-[--first] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
                Innovative Designs for Every Need.
              </h3>
            </div>
            <div className="md:w-[40%]">
              <p className="text-justify italic text-gray-300">
                Explore our blog for insights on glass railing systems. Elevate
                your home's aesthetic appeal with modern aluminum glass
                railings, sleek glass railings. Whether you're in Mumbai, Delhi,
                Hyderabad, or any other city in India, we've got you covered.
                <br />
              </p>
            </div>
          </div>
          {/* {isDesktop ? (
      <div className="flex justify-center px-10 phone:px-6 tablet:px-10 laptop:px-20 py-12 gap-32 items-center">
        <VerticalCarousel direction className="max-w-[40%] h-fit">
          {scrollData.map((item) => (
            <img
              src={item.img}
              alt={item.alt}
              key={item.img}
              className="rounded-4xl max-w-[30rem] h-[30rem] object-cover"
              title={item.alt}
            />
          ))}
        </VerticalCarousel>
        <VerticalCarousel className="w-[60%]">
          {scrollData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center gap-5 text-white">
                <h1 className="text-8xl">{index + 1}.</h1>
                <div className="flex flex-col gap-5">
                  <h1 className="Raleway text-5xl">{item.header}</h1>
                  <p className="text-2xl w-[38rem]">{item.subheader}</p>
                </div>
              </div>
            </div>
          ))}
        </VerticalCarousel>
      </div>
    ) : (
      <HorizontalCarousel className="pb-12">
        {scrollData.map((item, index) => (
          <div className="space-y-8" key={index}>
            <div>
              <img
                src={item.img}
                alt={item.alt}
                title={item.alt}
                className="rounded-4xl w-[20rem] h-[22rem] object-cover"
              />
            </div>
            <div className="flex flex-col text-white">
              <h1 className="text-4xl">{index + 1}.</h1>
              <h1 className="Raleway text-[1.75rem]">{item.header}</h1>
              <p className="text-xs w-11/12 italic">{item.subheader}</p>
            </div>
          </div>
        ))}
      </HorizontalCarousel>
    )} */}

          {isDesktop ? (
            <div className="flex justify-center px-10 phone:px-6 tablet:px-10 laptop:px-20 py-12 gap-32 items-center h-fit">
              <VerticalCarousel direction className="w-[40%]">
                {scrollData.map((item) => (
                  <div key={item.img} className="aspect-w-1 aspect-h-1 ">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="rounded-4xl object-cover"
                      title={item.alt}
                    />
                  </div>
                ))}
              </VerticalCarousel>
              <VerticalCarousel className="w-[54%]">
                {scrollData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-5 text-white h-[20rem]">
                      <h4 className="text-8xl laptop:text-6xl">{index + 1}.</h4>
                      <div className="flex flex-col gap-5">
                        <h2 className="Raleway text-5xl laptop:text-4xl">
                          {item.header}
                        </h2>
                        <p className="text-2xl w-[38rem] laptop:w-[30rem] laptop:text-lg">
                          {item.subheader}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </VerticalCarousel>
            </div>
          ) : (
            <HorizontalCarousel className="pb-12">
              {scrollData.map((item, index) => (
                <div className="space-y-8" key={index}>
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={item.img}
                      alt={item.alt}
                      title={item.alt}
                      className="rounded-4xl object-cover"
                    />
                  </div>
                  <div className="flex flex-col text-white">
                    <h4 className="text-4xl laptop:text-6xl">{index + 1}.</h4>
                    <h2 className="Raleway text-[1.75rem] laptop:text-[3.5rem]">
                      {item.header}
                    </h2>
                    <p className="text-base w-full italic laptop:text-3xl">
                      {item.subheader}
                    </p>
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          )}

          {/* end */}
        </Description>
        <TextComponent texts={text} />
        <Description
          mainHeader="Work Showcase."
          text="Our portfolio showcases a wide range of projects, from luxury residential balconies to modern commercial spaces, emphasizing our commitment to quality and precision. We specialize in modern glass railings, including frameless glass stair railings, glass stair panels, and balcony glass railings. Whether you're searching for glass railing near me or high-quality glass handrails for decks, our glass railing systems are designed to enhance safety, style, and functionality."
        />
        <ImageScrolls className="py-14 overflow-hidden" />
        <div className="overflow-hidden">
          <Testimonials cards={testimonialsData} />
        </div>
        {/* <Dealers /> */}
        <Quote />
      </main>
    </>
  );
};
