import React from "react";
import { heroImage, descImage } from "../../assets/Images";
import {
  Hero,
  Description,
  GreyButton,
  TextComponent,
  BlackButton,
  QuotePanel,
} from "../../components";
import { ImageScrolls } from "../../components/ImageScrolls/ImageScrolls";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VerticalCarousel } from "../../components";
import { scrollerImage } from "../../assets/Images";

const texts = [
  "Imperio offers exquisite glass railing system",
  "blending safety and style. Explore innovative",
  "designs, LED options, and frameless elegance.",
  "See our work, hear from satisfied clients, and",
  "take the next step with us.",
];

const scrollImages = [
  { img: scrollerImage, alt: "scroll image" },
  { img: scrollerImage, alt: "scroll image" },
  { img: scrollerImage, alt: "scroll image" },
  { img: scrollerImage, alt: "scroll image" },
];
const scrollText = [
  {
    header: "Low Maintenance.",
    subheader:
      "Our railings are designed to last, requiring minimal upkeep while maintaining their stunning appearance.",
  },
  {
    header: "Frameless Elegance.",
    subheader: "Enjoy uninterrupted views with our sleek, frame-less designs.",
  },
  {
    header: "Minimalist Aesthetic.",
    subheader: "Clean lines and understated designs that complement any decor.",
  },
  {
    header: "Complete Accessories.",
    subheader:
      "Customize your railing with our comprehensive selection of accessories.",
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
      >
        <GreyButton path="/">KNOW MORE</GreyButton>
      </Hero>

      <section className="flex pt-32 justify-center p-44 gap-8 ">
        <div className="flex flex-col gap-4">
          <header className="YellowText max-xl:text-3xl max-2xl:text-4xl">
            Vision & Craft.
          </header>
          <header className="text-5xl Raleway max-xl:text-4xl text-[--third]">
            Crafting Excellence in Glass Railings.
          </header>
          <p className="w-[37rem] pt-6 text-xl italic text-[--grey] ">
            At Imperio, we specialize in creating beautiful, durable glass
            railing systems that enhance any space. With a focus on innovation
            and quality, our team is dedicated to delivering top-notch solutions
            for both residential and commercial projects.
          </p>
          <div className="pt-8 text-xs">
            <BlackButton path="/">KNOW MORE</BlackButton>
          </div>
        </div>
        <div className="w-3/5">
          <img src={descImage} alt="Description Image" />
        </div>
      </section>
      <Description
        yellowText="Feature with future."
        mainHeader={
          <>
            Innovative Designs for Every
            <br />
            Need.
          </>
        }
        text={
          <>
            With innovative designs, our products redefine modern spaces.
            <br />
            Explore today.
          </>
        }
        black
      >
        <div className="flex px-20 py-10 gap-32 items-center">
          <div className="w-[35%]">
            <VerticalCarousel direction>
              {scrollImages.map((item) => (
                <img src={item.img} alt={item.alt} key={item.img} />
              ))}
            </VerticalCarousel>
          </div>
          <div className="w-[65%]">
            <VerticalCarousel>
              {scrollText.map((item, index) => (
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
          {/* <div>
            <VerticalCarousel>
              {scrollText.map((item, index) => (
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
          </div> */}
        </div>
      </Description>
      <TextComponent text={texts} />
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
        className="h-[100vh] flex flex-col justify-between"
      >
        <ImageScrolls className="pt-24" />
      </Description>
      <QuotePanel />
    </main>
  );
};
