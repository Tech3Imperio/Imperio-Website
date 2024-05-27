import React from "react";
import { heroImage } from "../../assets/images";
import { Hero } from "../../components";
import { Description } from "../../components/Description/Description";

export const Home: React.FC = () => {
  const header = (
    <>
      Unmatched Clarity,
      <br />
      Ultimate Style.
    </>
  );
  return (
    <main>
      <Hero
        img={heroImage}
        altText="hero for home"
        header={header}
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
      >
        <button className="w-max bg-gray-500 bg-opacity-60 hover:border-[--secound] hover:text-[--black] hover:bg-[--secound] hover:bg-opacity-100 transition-all duration-500 ease-in-out  py-2 px-6 border-2 rounded-[30px]">
          KNOW MORE
        </button>
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
