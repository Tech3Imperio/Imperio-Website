import React from "react";
import { Hero } from "../../components";
import { tempHeroImage } from "../../assets/images";
import { Description } from "../../components/Description/Description";

export const Blog = () => {
  return (
    <main>
      <Hero
        img={tempHeroImage}
        altText="hero for blog"
        header="Blog,"
        subHeader="Check out our blogs. We post daily!"
        height={67}
        curve
        shadow
      />
      <Description
        yellowText="Check out these."
        mainHeader="We acknowledge knowledge."
        text={
          <>
            Explore our blog for insights and expertise on glass railing
            systems.
            <br />
            We share knowledge to help you make informed decisions.
          </>
        }
      />
    </main>
  );
};
