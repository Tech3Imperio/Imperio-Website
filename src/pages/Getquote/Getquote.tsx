import { tempHeroImage } from "../../assets/Images";
import { Hero } from "../../components";

export const Getquote = () => {
  return (
    <main>
      <section>
        <Hero
          img={tempHeroImage}
          altText="Hero image for product"
          header="Get a quote."
          subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
          height={67}
          curve
          shadow
        />
      </section>
    </main>
  );
};
