import React from "react";
import { heroImage } from "../../assets/images";
import { Hero } from "../../components";
import { Description } from "../../components/Description/Description";
import { GreyButton } from "../../components/Button/Button";

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
        yellowText="Vision & Craft."
        mainHeader={
          <>
            Crafting Excellence in Glass
            <br />
            Railings.
          </>
        }
      ></Description>
    </main>
  );
};
