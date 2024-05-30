import { Hero } from "../../components";
import { tempHeroImage } from "../../assets/Images";
import { ProductPanel } from "../../components/ProductPanel/ProductPanel";

export const Product = () => {
  return (
    <main>
      <Hero
        img={tempHeroImage}
        altText="hero for product"
        header="Out Products."
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        height={67}
        curve
        shadow
      />
      <ProductPanel header={"base"} />
    </main>
  );
};
