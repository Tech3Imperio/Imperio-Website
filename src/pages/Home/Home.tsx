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

const texts = [
  "Imperio offers exquisite glass railing system",
  "blending safety and style. Explore innovative",
  "designs, LED options, and frameless elegance.",
  "See our work, hear from satisfied clients, and",
  "take the next step with us.",
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
