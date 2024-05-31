import React from "react";
import { heroImage } from "../../assets/Images";
import { scrollerImage } from "../../assets/Images";
import { Hero } from "../../components";
import { Description } from "../../components/Description/Description";
import { GreyButton } from "../../components/Button/Button";

const scroller = [
  {
    img: scrollerImage,
    alt: "text",
    header: "Low Maintenance.",
    subheader: `Our railings are designed to last, requiring minimal upkeep
while maintaining their stunning appearance.`,
  },
  {
    img: scrollerImage,
    alt: "text",
    header: "Low Maintenance.",
    subheader: `Our railings are designed to last, requiring minimal upkeep
while maintaining their stunning appearance.`,
  },
  {
    img: scrollerImage,
    alt: "text",
    header: "Low Maintenance.",
    subheader: `Our railings are designed to last, requiring minimal upkeep
while maintaining their stunning appearance.`,
  },
  {
    img: scrollerImage,
    alt: "text",
    header: "Low Maintenance.",
    subheader: `Our railings are designed to last, requiring minimal upkeep
while maintaining their stunning appearance.`,
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

      <Description
        yellowText="Feature with future."
        mainHeader={
          <>
            Innovative Designs for Every <br />
            Needs.
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
        <div className=" h-96 w-auto flex overflow-y-scroll flex-col mt-12  gap-7">
          {scroller.map((value, index) => (
            <div className="flex justify-evenly">
              <img
                src={value.img}
                alt={value.alt}
                className="h-96 object-cover"
              />
              <header
                className="flex text-white items-center gap-4 max-w-[45rem]"
                key={value.alt}
              >
                <div className="text-[100px]">{index + 1}.</div>
                <div className="flex flex-col gap-4">
                  <div className=" text-5xl">{value.header}</div>
                  <p className=" text-2xl text-[--grey]">{value.subheader}</p>
                </div>
              </header>
            </div>
          ))}
          {/* <div className="flex flex-col items-center space-y-2">
            <img
              src={src}
              alt={`Image ${index}`}
              className="h-96 object-cover"
            />
          </div>
          <header className="flex text-white items-center gap-4 max-w-[45rem]">
            <div className="text-[100px]">1.</div>
            <div className="flex flex-col gap-4">
              <div className=" text-5xl">Low Maintenance.</div>
              <p className=" text-2xl text-[--grey]">
                Our railings are designed to last, requiring minimal upkeep
                while maintaining their stunning appearance.
              </p>
            </div>
          </header> */}
        </div>
      </Description>
      <section className=" text-center py-10">
        <p>
          Imperio offers exquisite glass railing systems <br />
          blending safety and style. <br /> Explore innovative designs, LED
          options, and frameless elegance.
        </p>
      </section>
      <Description
        mainHeader="Work Showcase."
        text={
          <>
            Our portfolio features diverse projects, from luxury residantial{" "}
            <br />
            balconies to modern commercial spaces, highlighting our
            <br />
            commitment to quality and detail.
          </>
        }
      ></Description>
    </main>
  );
};
