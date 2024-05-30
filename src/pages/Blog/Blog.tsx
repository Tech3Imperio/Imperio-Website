import { useState } from "react";
import { Hero, WhiteButton, Description, BlogCard } from "../../components";
import { tempHeroImage } from "../../assets/images";
import { CiSearch } from "react-icons/ci";
import { BlogType } from "../../types";

const temp = {
  imgSrc: "https://via.placeholder.com/400",
  alt: "helo",
  header: "My Blog Post",
  description: "This is a brief description of the blog post.",
  details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
  iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
  voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
  tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
  odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
  deserunt!`,
  tags: ["React", "TypeScript"],
  socialMedia: "Tweet",
};

export const Blog = () => {
  const [filters, setFilters] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [search, setSearch] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogType>(temp);
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const toggleFilter = (index: number) => {
    setFilters(filters.map((filter, i) => (i === index ? !filter : filter)));
  };

  const resetFilters = () => {
    setFilters([false, false, false, false]);
  };

  const FilterButton = ({ index, label }: { index: number; label: string }) => (
    <WhiteButton value={filters[index]} onClick={() => toggleFilter(index)}>
      {label}
    </WhiteButton>
  );

  const openPanel = (blog: BlogType) => {
    setSelectedBlog(blog);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setSelectedBlog(temp);
  };

  const cards = [
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
    {
      imgSrc: "https://via.placeholder.com/400",
      alt: "helo",
      header: "My Blog Post",
      description: "This is a brief description of the blog post.",
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque
      iste magnam maiores voluptatibus praesentium, dolor cumque aut iure fugiat
      voluptate possimus! Voluptas delectus quos autem quibusdam adipisci, illum
      tempore cumque ex quia omnis quis labore qui aut, provident nobis aliquid
      odit molestiae? Reprehenderit porro libero laborum obcaecati doloribus
      deserunt!`,
      tags: ["React", "TypeScript"],
      socialMedia: "Tweet",
    },
  ];
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
      <section className="py-20 px-44 max-sm:px-4 max-md:px-12 max-lg:px-20 max-xl:px-28 max-2xl:px-36">
        <div className="flex justify-between">
          <aside className="space-x-8">
            <FilterButton index={0} label="LinkedIn" />
            <FilterButton index={1} label="Twitter" />
            <FilterButton index={2} label="Quora" />
            <FilterButton index={3} label="Pinterest" />
            <WhiteButton value={false} onClick={resetFilters}>
              Reset Filters
            </WhiteButton>
          </aside>
          <aside className="flex">
            <input
              id="search"
              type="text"
              value={search}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search blogs"
              className="bg-transparent w-80 text-right pr-4 outline-none border-b-2 border-black transition-all duration-700 ease-in-out text-xl text-black focus:w-[30rem]"
            />
            <label
              htmlFor="search"
              className="border-b-2 border-black flex flex-row-reverse"
            >
              <CiSearch className="text-5xl pr-4" />
              <div
                className={`border-l-2 h-[90%] border-l-black pr-4 ${
                  focus ? "w-4 opacity-100" : "w-0 opacity-0"
                } transition-width transition-opacity duration-300 ease-out`}
              ></div>
            </label>
          </aside>
        </div>
        <div className="flex flex-wrap justify-center mt-10 gap-14">
          {cards.map((item, index) => (
            <BlogCard key={index} blog={item} onClick={() => openPanel(item)} />
          ))}
        </div>
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-all duration-700 ease-in-out ${
            isPanelOpen ? "opacity-100" : " opacity-0 pointer-events-none"
          }`}
          onClick={closePanel}
        >
          <div
            className={`fixed top-1/2 -translate-y-1/2 h-[80vh] bg-white w-[80vh] p-6 shadow-lg transition-all duration-700 ease-in-out ${
              isPanelOpen ? "left-0" : "-left-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="w-full h-48 object-cover"
              src={selectedBlog.imgSrc}
              alt={selectedBlog.alt}
            />
            <h2 className="text-2xl font-bold my-4">{selectedBlog.header}</h2>
            <p>{selectedBlog.description}</p>
            <div className="mt-4">
              {selectedBlog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
                {selectedBlog.socialMedia}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
