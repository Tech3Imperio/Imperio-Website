import React, { useEffect, useState, Suspense } from "react";
import { hero1Image } from "../../assets/Images";
// import { heroImage, heroImg } from "../../assets/Images";
// import { heroImage, heroImageMobile } from "../../assets/Images";
import { descImage } from "../../assets/Images";
import { Helmet } from "react-helmet";
import favicondark from "../../assets/Images/logo/favicondark.ico";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

import {
  Hero,
  Description,
  GreyButton,
  CTAButton,
  TextComponent,
  BlackButton,
  Quote,
  ImageScrolls,
  Testimonials,
} from "../../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { scrollData, testimonialsData } from "../../assets/Data";
import { MdAddCall } from "react-icons/md";
import EnquiryButton from "../../components/EnquiryButton/EnquiryButton";
import FAQ from "../../components/FAQ/Faq";
// const windowWidth = window.innerWidth;
// console.log(windowWidth);
// const isMobile = windowWidth <= 425;
// console.log(isMobile);

const HorizontalCarousel = React.lazy(
  () => import("../../components/Carousel/Image/HorizontalCarousel")
);
const VerticalCarousel = React.lazy(
  () => import("../../components/Carousel/Image/VerticalCarousel")
);

const text =
  "Imperio offers premium glass railing systems that combine safety and style. Explore our innovative designs, including elegant balcony railings, custom solutions, and LED options. Serving Mumbai, Delhi, Hyderabad, and all of India, we also offer exclusive dealership opportunities. Check out our portfolio and transform your space with our top-quality glass railings.";

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
        <title>Modern Glass Railing & Balcony Glass Railing | Imperio</title>
        <meta
          name="description"
          content="Explore premium balcony glass railing and aluminium railing, balcony glass railing designs, and more in Mumbai, Maharashtra, and across India. Durable and stylish glass railing"
        />
        <meta
          name="keywords"
          content="glass railing in India, modern balcony glass railing, staircase glass railing in Mumbai, balcony glass railing design, glass railing in mumbai, modern glass handrails, premium toughened glass, glass railing in India, stylish balcony railings, aluminium glass railing manufacturer in mumbai"
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
          // img={isMobile ? heroImageMobile : heroImage}
          img={hero1Image}
          altText="Hero Image"
          header={
            <>
              Premium Glass Railings,
              <br />& Stylish Balcony Designs
            </>
          }
          subHeader="Sleek and Durable Glass Railing Systems for Balconies and Staircases Elevate Your Indoor and Outdoor Spaces with Frameless Glass Railings, Aluminium Options, and Stylish Designs for Ultimate Safety and Elegance."
          height
        >
          <div className="p-8 pl-0 w-max text-xs gap-2 flex">
            <GreyButton path="/aboutus">KNOW MORE</GreyButton>

            <CTAButton phoneNumber="+91 8591953385">
              <MdAddCall size={16} />
              CALL NOW
            </CTAButton>
          </div>
        </Hero>
        <ImageGallery />
        <section className="flex flex-col-reverse lg:flex-row justify-center gap-8 px-5 phone:px-20 tablet:px-32 xl:px-44 pb-9 phone:pb-16 tablet:pb-24 xl:pb-36 pt-6 phone:pt-14 tablet:pt-24 xl:pt-36">
          <div className="flex flex-col gap-2 phone:gap-4">
            <span className=" text-[#fad000] text-xl tablet:text-4xl lg:text-5xl max-xl:text-3xl max-2xl:text-4xl">
              Our Vision
            </span>
            <h2 className="text-3xl tablet:text-4xl lg:text-5xl Raleway max-xl:text-4xl text-[--third]">
              Crafting Excellence in Glass Railings.
            </h2>
            <p className="w-full lg:w-[37rem] text-base tablet:text-base lg:text-lg xl:text-xl italic text-[--grey] text-justify">
              At <strong>Imperio Railing Systems</strong>, we specialize in
              premium <strong>glass railing systems</strong>, including{" "}
              <strong>aluminum glass railings</strong> and{" "}
              <strong>customized balcony glass railings</strong>. Our solutions
              blend elegance, durability, and safety, perfect for both
              residential and commercial spaces. Based in{" "}
              <strong>Mumbai, Maharashtra</strong>, we offer sleek{" "}
              <strong>balcony glass railings</strong> and{" "}
              <strong>modern staircase glass railings</strong>, designed to
              elevate any space. Trust us for high-quality{" "}
              <strong>aluminum glass railings</strong> that ensure long-lasting
              performance and style.
            </p>

            <div className="pt-8 text-[9px] phone:text-xs flex gap-2">
              <BlackButton path="/aboutus">KNOW MORE</BlackButton>
              <CTAButton phoneNumber="+91 8591953385">
                <MdAddCall size={16} />
                CALL NOW
              </CTAButton>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <picture>
              <source srcSet={descImage} type="image/webp" />
              <img
                srcSet={`${descImage} 400w, ${descImage} 800w, ${descImage} 1200w`}
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
                src={descImage} // Correct image path
                alt="Description Image"
                loading="lazy"
                className="w-full h-auto object-cover"
                title="Description Image"
                width="800"
                height="400"
              />
            </picture>
          </div>
        </section>
        <EnquiryButton />
        <Description black>
          <div className="max-w-max flex flex-col md:flex-row mx-auto -mt-16 gap-8 ">
            <div className="flex flex-col md:w-[70%] gap-1 tablet:gap-6">
              <p className="text-[#fad000] text-xl sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
                Stylish Balcony Glass Railings for Home
              </p>
              <h3 className="text-[--first] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
                Innovative Designs Style, Safety, and Durability.
              </h3>
            </div>

            <div className=" md:w-[80%] lg:w-[70%] xl:w-[40%] mb-4">
              <p className="text-justify italic text-[--first]">
                Discover expert insights on our{" "}
                <strong>innovative glass railing systems</strong> that combine
                style, safety, and durability. From modern{" "}
                <strong>aluminium glass railings</strong> to elegant{" "}
                <strong>balcony glass railings</strong> and secure{" "}
                <strong>staircase glass railings</strong>, our designs elevate
                any space with sleek, high-quality solutions. Perfect for both
                residential and commercial properties, our{" "}
                <strong>glass railing solutions</strong> are the ideal choice to
                enhance your home's aesthetic appeal while ensuring lasting
                safety. Whether you're in <strong>Mumbai</strong>,{" "}
                <strong>Delhi</strong>, <strong>Hyderabad</strong>, or anywhere
                across <strong>India</strong>, we provide top-notch products and
                expert installation services to meet all your needs.
                <br />
              </p>
            </div>
          </div>
          {/* 
          {isDesktop ? (
            <div className="flex justify-center px-10 phone:px-6 tablet:px-10 laptop:px-20 py-12 gap-32 items-center h-fit">
              <VerticalCarousel direction className="w-[35%]">
                {scrollData.map((item) => (
                  <div key={item.img} className="aspect-w-1 aspect-h-1 ">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="rounded-4xl object-cover"
                      title={item.alt}
                      loading="lazy"
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
                      loading="lazy"
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
          )} */}
          <Suspense fallback={<div>Loading..</div>}>
            {isDesktop ? (
              <div className="flex justify-center px-10 phone:px-6 tablet:px-10 laptop:px-20 py-12 gap-32 items-center h-fit">
                <VerticalCarousel direction className="w-[40%]">
                  {scrollData.map((item) => (
                    <div key={item.img} className="aspect-w-1 aspect-h-1 flex">
                      <img
                        srcSet={`${item.img} 400w, ${item.img} 800w, ${item.img} 1200w`} // Define sizes for srcSet
                        sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px" // Define sizes for different screen widths
                        src={item.img} // Fallback image if srcSet is not supported
                        alt={item.alt}
                        className="rounded-4xl object-cover"
                        title={item.alt}
                        loading="lazy"
                        width="500" // Set width to match the displayed size
                        height="500" // Set height to maintain aspect ratio
                      />
                    </div>
                  ))}
                </VerticalCarousel>
                <VerticalCarousel className="w-[54%]">
                  {scrollData.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-5 text-white h-[20rem]">
                        <h4 className="text-8xl laptop:text-6xl">
                          {index + 1}.
                        </h4>
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
                        srcSet={`${item.img} 400w, ${item.img} 800w, ${item.img} 1200w`} // Define sizes for srcSet
                        sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px" // Define sizes for different screen widths
                        src={item.img} // Fallback image if srcSet is not supported
                        alt={item.alt}
                        className="rounded-4xl object-cover"
                        title={item.alt}
                        loading="lazy"
                        width="500" // Set width to match the displayed size
                        height="500" // Set height to maintain aspect ratio
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
          </Suspense>

          {/* end */}
        </Description>

        <TextComponent texts={text} />
        <div className=" max-w-auto flex flex-col   pt-12 sm:pt-24 tablet:pt-20 xl:pt-28 px-9 sm:px-16 lg:px-28 2xl:px-44">
          <div className="flex flex-col gap-1 tablet:gap-6 pb-10">
            <h4 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
              Explore Our Stunning
              <br />
              Glass Railing Showcase.
            </h4>
          </div>
          <div className="w-full mb-4">
            <p className="text-justify italic text-[--grey] text-[18px]">
              Explore our exceptional collection of{" "}
              <strong>glass railing systems</strong>, featuring elegant designs
              that combine safety, style, and durability. From luxurious{" "}
              <strong>balcony glass railings</strong> to sleek{" "}
              <strong>frameless glass stair railings</strong> and{" "}
              <strong>glass stair panels</strong>, each project in our portfolio
              reflects our dedication to quality craftsmanship. Whether you're
              looking for modern <strong>glass handrails for decks</strong> or
              custom solutions to suit your space, our{" "}
              <strong>custom glass railing systems</strong> are designed to
              enhance any residential or commercial setting. Serving clients
              across <strong>Mumbai</strong>, <strong>Delhi</strong>, and all of{" "}
              <strong>India</strong>, we provide expert design and installation
              services to transform your space into a modern, stylish haven.
              Contact us today to explore how we can bring your vision to life.
            </p>
          </div>
        </div>

        <Suspense fallback={<span>Loading Slider..</span>}>
          <ImageScrolls className="py-14 overflow-hidden" />
        </Suspense>

        <div className="overflow-hidden">
          <Testimonials cards={testimonialsData} />
        </div>

        <div className="pt-0 pb-14 overflow-hidden">
          <FAQ />
        </div>
        {/* <Dealers /> */}
        <Quote />
      </main>
    </>
  );
};
