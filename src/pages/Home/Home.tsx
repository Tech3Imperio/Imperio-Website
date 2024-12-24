import React, { useEffect, useState, Suspense } from "react";
import { descImage } from "../../assets/Images";
//Festival Time only on This belo code
// import { descImage, heroImage } from "../../assets/Images";
// import { descImage } from "../../assets/Images";
import { Helmet } from "react-helmet";
import favicondark from "../../assets/Images/logo/favicondark.ico";

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
const HeroVideo = React.lazy(
  () => import("../../components/HeroVideo/HeroVideo")
);

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

  // Resize handling to adjust for screen size (desktop or mobile)
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
          Glass Railing Systems | balcony glass railing | Imperio Railing
          Systems
        </title>

        <meta
          name="description"
          content="Explore premium glass railing, aluminium, modern balcony glass railing and balcony designs in Mumbai, Maharashtra, and across India. Durable, stylish glass railings for balcony, stairs, PVB & SGP glass and more. Contact the best dealers and manufacturers of aluminium glass railings!"
        />

        <meta
          name="keywords"
          content="glass railings India, modern balcony glass railing, aluminium glass railing Mumbai, balcony glass design, custom glass railing installation, modern glass handrails, premium toughened glass, glass railing systems India, stylish balcony railings, aluminium glass railing manufacturer in mumbai"
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
          subHeader="Sleek and durable glass railing systems, perfect for balconies and staircases. Enhance safety and style with frameless glass railings, aluminum options, and more to elevate your indoor and outdoor spaces."
          height
        >
          <div className="p-8 pl-0 w-max text-xs">
            <GreyButton path="/aboutus">KNOW MORE</GreyButton>
          </div>
        </Hero> */}

        <Suspense>
          <HeroVideo altText="" />
        </Suspense>

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
            <p className="w-full lg:w-[37rem] text-xs tablet:text-base lg:text-lg xl:text-xl italic text-[--grey] text-justify">
              At <strong>Imperio Railing Systems</strong>, we specialize in
              creating beautiful and durable{" "}
              <strong>glass railing systems</strong>, including{" "}
              <strong>aluminium glass railings</strong>,{" "}
              <strong>custom glass railings</strong>,{" "}
              <strong>
                modern balcony glass railing, balcony glass design
              </strong>
              , and <strong>staircase glass railing</strong> that enhance any
              space. Based in <strong>Mumbai, Maharashtra, India</strong>, our
              focus on innovation and quality ensures that our team delivers
              top-notch solutions for both residential and commercial projects.
              As trusted <strong>dealers of aluminium glass railings</strong> in
              India, we are committed to providing high-quality, stylish, and
              functional glass railing systems that meet the needs of every
              client.
            </p>
            <div className="pt-8 text-[9px] phone:text-xs">
              <BlackButton path="/aboutus">KNOW MORE</BlackButton>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <img
              src={descImage}
              alt="Description Image"
              loading="lazy"
              className="w-full h-auto object-cover"
              title="Description Image"
              width="800"
              height="400"
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
                Explore our blog for expert insights on{" "}
                <strong>glass railing systems</strong>, including modern{" "}
                <strong>aluminium glass railings</strong>,{" "}
                <strong>balcony glass railings</strong>, and{" "}
                <strong>staircase glass railings</strong>. Elevate your home's
                aesthetic appeal with sleek, durable{" "}
                <strong>glass railing solutions</strong> that are perfect for
                any space. Whether you're in <strong>Mumbai</strong>,{" "}
                <strong>Delhi</strong>, <strong>Hyderabad</strong>, or any other
                city in <strong>India</strong>, we've got you covered with
                top-quality products and expert installation services.
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
        {/* <Description
          mainHeader="Work Showcase."
          text="Our portfolio showcases a wide range of glass railing projects, from luxury residential balconies to modern commercial spaces, highlighting our commitment to quality and precision. We specialize in modern <strong>glass railings</strong>, including <strong>frameless glass stair railings</strong>, <strong>glass stair panels</strong>, and <strong>balcony glass railings</strong>. Whether you're searching for <strong>glass railing near me</strong> in <strong>Mumbai</strong>, <strong>Delhi</strong>, or anywhere in <strong>India</strong>, or need high-quality <strong>glass handrails for decks</strong>, our <strong>custom glass railing systems</strong> are designed to enhance safety, style, and functionality. Contact us today to learn more about how we can transform your space."
        /> */}
        <div className=" max-w-auto flex flex-col md:flex-row  pt-12 sm:pt-24 tablet:pt-20 xl:pt-28 px-9 sm:px-16 lg:px-28 2xl:px-44">
          <div className="flex flex-col md:w-[80%] gap-1 tablet:gap-6">
            <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
              Work <br /> Showcase.
            </h3>
          </div>
          <div className="md:w-[50%]">
            <p className="text-justify italic text-[--grey]">
              Our portfolio showcases a wide range of glass railing projects,
              from luxury residential balconies to modern commercial spaces,
              highlighting our commitment to quality and precision. We
              specialize in modern <strong>glass railings</strong>, including{" "}
              <strong>frameless glass stair railings</strong>,{" "}
              <strong>glass stair panels</strong>, and{" "}
              <strong>balcony glass railings</strong>. Whether you're searching
              for <strong>glass railing near me</strong> in{" "}
              <strong>Mumbai</strong>, <strong>Delhi</strong>, or anywhere in{" "}
              <strong>India</strong>, or need high-quality{" "}
              <strong>glass handrails for decks</strong>, our{" "}
              <strong>custom glass railing systems</strong> are designed to
              enhance safety, style, and functionality. Contact us today to
              learn more about how we can transform your space.
            </p>
          </div>
        </div>
        <Suspense fallback={<span>Loading Slider..</span>}>
          <ImageScrolls className="py-14 overflow-hidden" />
        </Suspense>

        <div className="overflow-hidden">
          <Testimonials cards={testimonialsData} />
        </div>
        {/* <Dealers /> */}
        <Quote />
      </main>
    </>
  );
};
