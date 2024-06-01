import React from "react";
import { heroImage, scrollerImage } from "../../assets/Images";
import { Hero, Description, GreyButton, FuturePanel } from "../../components";
import { ScrollData } from "../../types";

const scroller: ScrollData[] = [
  {
    id: 1,
    img: scrollerImage,
    alt: "text",
    header: "Low Maintenance.",
    subheader:
      "Our railings are designed to last, requiring minimal upkeep while maintaining their stunning appearance.",
  },
  {
    id: 2,
    img: scrollerImage,
    alt: "text",
    header: "Low Maintenance.",
    subheader:
      "Our railings are designed to last, requiring minimal upkeep while maintaining their stunning appearance.",
  },
  {
    id: 3,
    img: scrollerImage,
    alt: "text",
    header: "Low Maintenance.",
    subheader:
      "Our railings are designed to last, requiring minimal upkeep while maintaining their stunning appearance.",
  },
  {
    id: 4,
    img: scrollerImage,
    alt: "text",
    header: "Low Maintenance.",
    subheader:
      "Our railings are designed to last, requiring minimal upkeep while maintaining their stunning appearance.",
  },
];

const text = (
  <>
    With innovative designs, our products redefine modern spaces.
    <br />
    Explore today.
  </>
);

const mainHeader = (
  <>
    Innovative Designs for Every <br />
    Needs.
  </>
);

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
      <FuturePanel
        scroller={scroller}
        yellowHeader="Feature with future."
        mainHeader={mainHeader}
        text={text}
      />
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
