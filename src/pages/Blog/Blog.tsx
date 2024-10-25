import { Hero, Description, BlogPanel } from "../../components";
import { blogHero } from "../../assets/Images";
import { useEffect, useState } from "react";
import { BlogType } from "../../types";
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
    <main>
      <title>Blogs - Imperio Railing</title>
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
  );
};
