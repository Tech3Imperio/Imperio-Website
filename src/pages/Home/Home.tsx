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
// import { heroImage, descImage } from "../../assets/Images";
//Festival Time only on This belo code
import { descImage, heroImage } from "../../assets/Images";

import {
  // Hero,
  Description,
  // GreyButton,
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
import Metadata from "../../components/Metatag/Metatag";
import Festival from "../../components/Festival";

const text =
  "Imperio offers exquisite glass railing systems blending safety and style. Explore innovative designs, LED options, and elegance. See our work, hear from satisfied clients, and take the next step with us.";

export const Home: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

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
      <Metadata
        title={"Imperio Railing Systems - Home"}
        description={
          "Imperio Railing Systems offers premium glass railing solutions for homes and buildings. Enhance your space with our stylish and durable glass railings, glass balconies,stair railings,black railing with glass,glass handrail cost and glass parapet railing. Specializing in custom glass installations, our products ensure safety and elegance. Discover our range of glass railings and transform your home or building today."
        }
        keywords={
          "glass balcony design,glass guardrail,railing with glass,glass with railing,design of glass railing,glass railing for balcony,glass for balcony railing,glass railing design for balcony,glass balcony handrail,glass handrail balcony,modern style glass railing design for balcony,balcony railings with glass,railing glass balcony,glass railing design balcony,steel with glass railing,staircase glass railing design,staircase railing design with glass,ss with glass railing,modern glass balcony,stainless and glass railings,stainless steel glass handrail,glass and stainless steel railings,tuffen glass railing,wooden railings with glass,tuffen glass design for balcony,frameless glass railing,modern balcony glass design,outdoor glass handrail"
        }
        ogImage={heroImage}
        ogUrl={"https://www.imperiorailing.com/"}
      />
      <main>
        {/* <Hero
          img={heroImage}
          altText="hero for home"
          header={
            <>
              Unmatched Clarity,
              <br />
              Ultimate Style.
            </>
          }
          subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
          height
        >
          <div className="p-8 pl-0 w-max text-xs">
            <GreyButton path="/aboutus">KNOW MORE</GreyButton>
          </div>
        </Hero> */}
        <Festival />

        <section className="flex flex-col lg:flex-row justify-center gap-8 px-10 phone:px-20 tablet:px-32 xl:px-44 pb-9 phone:pb-16 tablet:pb-24 xl:pb-36 pt-6 phone:pt-14 tablet:pt-24 xl:pt-36">
          <div className="flex flex-col gap-2 phone:gap-4">
            <h1 className="YellowText text-lg tablet:text-4xl lg:text-5xl max-xl:text-3xl max-2xl:text-4xl">
              Our Vision
            </h1>
            <h1 className="text-3xl tablet:text-4xl lg:text-5xl Raleway max-xl:text-4xl text-[--third]">
              Crafting Excellence in Glass Railings.
            </h1>
            <p className="w-full lg:w-[37rem] text-xs tablet:text-base lg:text-lg xl:text-xl italic text-[--grey]">
              At Imperio, we specialize in creating beautiful, durable glass
              railing systems that enhance any space. With a focus on innovation
              and quality, our team is dedicated to delivering top-notch
              solutions for both residential and commercial projects.
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
          yellowText="Feature with future."
          mainHeader="Innovative Designs for Every Need."
          text="With innovative designs, our products redefine modern spaces. Explore today."
          black
        >
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
              <VerticalCarousel direction className="max-w-[40%]">
                {scrollData.map((item) => (
                  <div key={item.img} className="aspect-w-1 aspect-h-1">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="rounded-4xl object-cover"
                      title={item.alt}
                    />
                  </div>
                ))}
              </VerticalCarousel>
              <VerticalCarousel className="w-[58%]">
                {scrollData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-5 text-white">
                      <h1 className="text-8xl laptop:text-6xl">{index + 1}.</h1>
                      <div className="flex flex-col gap-5">
                        <h1 className="Raleway text-5xl laptop:text-4xl">
                          {item.header}
                        </h1>
                        <p className="text-2xl w-[38rem] laptop:w-[30rem] laptop:text-xl">
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
                    <h1 className="text-4xl laptop:text-3xl">{index + 1}.</h1>
                    <h1 className="Raleway text-[1.75rem] laptop:text-[1.5rem]">
                      {item.header}
                    </h1>
                    <p className="text-xs w-11/12 italic laptop:text-sm">
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
          text="Our portfolio features diverse projects, from luxury residential balconies to modern commercial spaces, highlighting our commitment to quality and detail."
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
