import { Hero, Description, BlogPanel } from "../../components";
import { blogHero } from "../../assets/Images";
import { useEffect, useState } from "react";
import { BlogType } from "../../types";
import Metadata from "../../components/Metatag/Metatag";
// import { blogCards } from "../../assets/Data";

export const Blog = () => {
  const [data, setData] = useState<BlogType[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycby42s7fS3M8-toUDfTVgRzWz7AB4zPjbxiIWsi0l1VDC6dzwMJ0nuA7DFX_bA91BjUs/exec"
    )
      .then((res) => res.json())
      .then((items) => {
        const formattedItems = items.map(
          (
            item: Omit<BlogType, "tags"> & {
              tags: string;
            }
          ) => ({
            ...item,
            tags: item.tags.split(",").map((tag: string) => tag.trim()),
          })
        );
        setData(formattedItems.reverse());
      })
      .catch((error) => {
        console.error("Failed to fetch blog data", error);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  }, []);

  return (
    <>
      <Metadata
        title={"Blogs - Imperio Railing"}
        description={
          "Welcome to the Imperio Railing System blog, your ultimate resource for everything related to aluminum glass railings. Discover innovative designs, installation tips, and maintenance advice that will help you enhance the beauty and safety of your home. Join us as we explore the latest trends and benefits of choosing aluminum glass railings for your property. At Imperio Railing System, we believe that safety and style go hand in hand. Our blog offers insights into the advantages of aluminum glass railings, including their durability, low maintenance, and aesthetic appeal. Stay updated with our expert tips and guides to make informed decisions for your next home improvement project. Explore the world of aluminum glass railings with Imperio Railing System. Our blog features articles on design inspiration, product features, and installation techniques that will help you create stunning outdoor spaces. Learn how our railings can transform your property while ensuring safety and elegance. Discover how Imperio Railing System can elevate your home with our premium aluminum glass railings. Our blog provides valuable information on the benefits of our products, including their modern design and robust safety features. Read our latest posts for tips on choosing the right railing system for your needs. Join us at the Imperio Railing System blog, where we share expert advice on aluminum glass railings. From design ideas to installation tips, our content is designed to help you enhance your living spaces with stylish and durable railing solutions. Learn more about how our products can add value and beauty to your home."
        }
        keywords={
          "Tempered Glass, Aluminum Alloy, Laminated Glass, Stainless Steel, Composite Materials, Frameless Design, Modern Aesthetic, Classic Look, Minimalist Style, Contemporary Railings, Safety Glass, Weather Resistant, Low Maintenance, Customizable Options, Durable Construction, Residential Use, Commercial Spaces, Pool Fencing, Balcony Railings, Staircase Railings, Sustainable Materials, Smart Railings, Integrated Lighting, Biophilic Design, Artistic Glass Patterns"
        }
      />
      <main>
        <Hero
          img={blogHero}
          altText="hero for blog"
          header="Blog"
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
          Socials={["LinkedIn", "Twitter", "Quora", "Pinterest"]}
          // BlogData={loading ? blogCards : data}
          BlogData={data}
        />
      </main>
    </>
  );
};
