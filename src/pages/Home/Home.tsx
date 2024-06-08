import React from "react";
import { heroImage, descImage, scrollerImage } from "../../assets/Images";
import {
  Hero,
  Description,
  GreyButton,
  TextComponent,
  BlackButton,
  QuotePanel,
  HorizontalCarousel,
  VerticalCarousel,
  ImageScrolls,
} from "../../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const text =
  "Imperio offers exquisite glass railing systems blending safety and style. Explore innovative designs, LED options, and elegance. See our work, hear from satisfied clients, and take the next step with us.";

const scrollData = [
  {
    header: "Low Maintenance.",
    subheader:
      "Our railings are designed to last, requiring minimal upkeep while maintaining their stunning appearance.",
    img: scrollerImage,
    alt: "scroll image",
  },
  {
    header: "Frameless Elegance.",
    subheader: "Enjoy uninterrupted views with our sleek, frame-less designs.",
    img: scrollerImage,
    alt: "scroll image",
  },
  {
    header: "Minimalist Aesthetic.",
    subheader: "Clean lines and understated designs that complement any decor.",
    img: scrollerImage,
    alt: "scroll image",
  },
  {
    header: "Complete Accessories.",
    subheader:
      "Customize your railing with our comprehensive selection of accessories.",
    img: scrollerImage,
    alt: "scroll image",
  },
];

export const Home: React.FC = () => {
  return (
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
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        height
      >
        <div className="p-8 pl-0 w-max text-xs">
          <GreyButton path="/">KNOW MORE</GreyButton>
        </div>
      </Hero>

      <section className="flex flex-col lg:flex-row justify-center gap-8 px-10 phone:px-20 md:px-32 xl:px-44 pb-9 phone:pb-16 md:pb-24 xl:pb-36 pt-6 phone:pt-14 md:pt-24 xl:pt-36">
        <div className="flex flex-col gap-2 phone:gap-4">
          <header className="YellowText text-lg md:text-4xl lg:text-5xl max-xl:text-3xl max-2xl:text-4xl">
            Our Vision
          </header>
          <header className="text-3xl md:text-4xl lg:text-5xl Raleway max-xl:text-4xl text-[--third]">
            Crafting Excellence in Glass Railings.
          </header>
          <p className="w-full lg:w-[37rem] text-xs md:text-base lg:text-lg xl:text-xl italic text-[--grey]">
            At Imperio, we specialize in creating beautiful, durable glass
            railing systems that enhance any space. With a focus on innovation
            and quality, our team is dedicated to delivering top-notch solutions
            for both residential and commercial projects.
          </p>
          <div className="pt-8 text-[9px] phone:text-xs">
            <BlackButton path="/">KNOW MORE</BlackButton>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <img
            src={descImage}
            alt="Description Image"
            className="w-full h-auto"
          />
        </div>
      </section>

      <Description
        yellowText="Feature with future."
        mainHeader="Innovative Designs for Every Need."
        text="With innovative designs, our products redefine modern spaces. Explore today."
        black
      >
        {window.innerWidth > 800 ? (
          <div className="flex px-20 py-12 gap-32 items-center">
            <VerticalCarousel direction className="w-[35%]">
              {scrollData.map((item) => (
                <img src={item.img} alt={item.alt} key={item.img} />
              ))}
            </VerticalCarousel>
            <VerticalCarousel className="w-[65%]">
              {scrollData.map((item, index) => (
                <div>
                  <div className="flex items-center gap-5 text-white">
                    <header className="text-8xl">{index + 1}.</header>
                    <div className="flex flex-col gap-5">
                      <header className="Raleway text-5xl">
                        {item.header}
                      </header>
                      <p className="text-2xl w-[38rem]">{item.subheader}</p>
                    </div>
                  </div>
                </div>
              ))}
            </VerticalCarousel>
          </div>
        ) : (
          <HorizontalCarousel>
            {scrollData.map((item, index) => (
              <div className="space-y-8" key={index}>
                <div>
                  <img src={item.img} alt={item.alt} />
                </div>
                <div className="flex flex-col text-white">
                  <header className="text-4xl">{index + 1}.</header>
                  <header className="Raleway text-[1.75rem]">
                    {item.header}
                  </header>
                  <p className="text-xs w-11/12 italic">{item.subheader}</p>
                </div>
              </div>
            ))}
          </HorizontalCarousel>
        )}
      </Description>
      <TextComponent texts={text} />
      <Description
        mainHeader="Work Showcase."
        text={
          <>
            Our portfolio features diverse projects, from luxury residential
            <br />
            balconies to modern commercial spaces, highlighting our
            <br />
            commitment to quality and detail.
          </>
        }
        className="h-screen flex flex-col justify-between"
      >
        <ImageScrolls className="pt-24 overflow-hidden" />
      </Description>
      <QuotePanel />
    </main>
  );
};
