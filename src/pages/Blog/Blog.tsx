import { Hero, Description, BlogPanel } from "../../components";
import { tempHeroImage } from "../../assets/Images";
import { blogCards } from "../../assets/Data";

export const Blog = () => {
  return (
    <main>
      <Hero
        img={tempHeroImage}
        altText="hero for blog"
        header="Blog,"
        subHeader="Check out our blogs. We post daily!"
        curve
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
      <BlogPanel
        Socials={["Linkdin", "Twitter", "Ouora", "Pinterest"]}
        BlogData={blogCards}
      />
    </main>
  );
};
