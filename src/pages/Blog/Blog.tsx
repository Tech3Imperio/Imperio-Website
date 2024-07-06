import { Hero, Description, BlogPanel } from "../../components";
import { blogHero } from "../../assets/Images";
import { useEffect, useState } from "react";
import { BlogType } from "../../types";

export const blogCards: BlogType[] = [
  {
    id: "1",
    imgSrc:
      "https://www.researchgate.net/profile/Adrian-Rozanski/publication/258023546/figure/fig2/AS:297431607595010@1447924629213/A-digital-image-500-500-pixels-of-the-reconstructed-2D-realization.png",
    alt: "Image 1",
    header: "Blog Post 1",
    description: "This is a brief description of the blog post.",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus deserunt!`,
    tags: ["Temp", "Temp"],
    socialMedia: "Temp",
    socialMediaLink: "Temp",
  },
  {
    id: "2",
    imgSrc:
      "https://www.researchgate.net/profile/Adrian-Rozanski/publication/258023546/figure/fig2/AS:297431607595010@1447924629213/A-digital-image-500-500-pixels-of-the-reconstructed-2D-realization.png",
    alt: "Image 2",
    header: "Blog Post 2",
    description: "This is a brief description of the blog post.",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus deserunt!`,
    tags: ["Temp", "Temp"],
    socialMedia: "Temp",
    socialMediaLink: "Temp",
  },
  {
    id: "3",
    imgSrc:
      "https://www.researchgate.net/profile/Adrian-Rozanski/publication/258023546/figure/fig2/AS:297431607595010@1447924629213/A-digital-image-500-500-pixels-of-the-reconstructed-2D-realization.png",
    alt: "Image 3",
    header: "Blog Post 3",
    description: "This is a brief description of the blog post.",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus deserunt!`,
    tags: ["Temp", "Temp"],
    socialMedia: "Temp",
    socialMediaLink: "Temp",
  },
  {
    id: "4",
    imgSrc:
      "https://www.researchgate.net/profile/Adrian-Rozanski/publication/258023546/figure/fig2/AS:297431607595010@1447924629213/A-digital-image-500-500-pixels-of-the-reconstructed-2D-realization.png",
    alt: "Image 4",
    header: "Blog Post 4",
    description: "This is a brief description of the blog post.",
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus deserunt!`,
    tags: ["Temp", "Temp"],
    socialMedia: "Temp",
    socialMediaLink: "Temp",
  },
];

export const Blog = () => {
  const [data, setData] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycby42s7fS3M8-toUDfTVgRzWz7AB4zPjbxiIWsi0l1VDC6dzwMJ0nuA7DFX_bA91BjUs/exec"
    )
      .then((res) => res.json())
      .then((items) => {
        const formattedItems = items.map((item) => ({
          ...item,
          tags: item.tags.split(",").map((tag: string) => tag.trim()),
        }));
        setData(formattedItems);
      })
      .catch((error) => {
        console.error("Failed to fetch blog data", error);
      })
      .finally(() => {
        setLoading(false);
      });
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
        BlogData={loading ? blogCards : data}
      />
    </main>
  );
};
