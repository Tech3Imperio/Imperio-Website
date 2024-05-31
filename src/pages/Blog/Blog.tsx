import { useState } from "react";
import {
  Hero,
  WhiteButton,
  Description,
  BlogCard,
  BlackButton,
} from "../../components";
import { tempHeroImage } from "../../assets/Images";
import { CiSearch } from "react-icons/ci";
import { BlogType } from "../../types";
import { cards } from "./data";
import { HiArrowRight } from "react-icons/hi2";

export const Blog = () => {
  const [filters, setFilters] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [search, setSearch] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogType>(cards[0]);
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
    setSelectedBlog(cards[0]);
  };

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
              className="bg-transparent w-80 text-right pr-4 outline-none border-b-2 border-black transition-700 text-xl text-black focus:w-[30rem]"
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
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-700 ${
            isPanelOpen ? "opacity-100" : " opacity-0 pointer-events-none"
          }`}
          onClick={closePanel}
        >
          <div
            className={`fixed top-1/2 -translate-y-1/2 h-[99%] rounded-4xl bg-white w-[80vh] p-6 shadow-lg transition-700 overflow-hidden ${
              isPanelOpen ? "left-4" : "-left-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 pt-4">
              <header className="text-3xl font-normal text-[--third] pb-6">
                {selectedBlog.header}
              </header>
              <p className="text-[--grey] pb-6">{selectedBlog.details}</p>
              <BlackButton path="/" className="flex gap-2">
                <div className="text-xs">VIEW FULL BLOG</div>
                <div className="text-md">
                  <HiArrowRight />
                </div>
              </BlackButton>
            </div>
            <div className="flex justify-center items-center overflow-hidden rounded-4xl ">
              <img
                src={selectedBlog.imgSrc}
                alt={selectedBlog.alt}
                className="max-h-[570px]  rounded-4xl"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-12">
          <WhiteButton
            onClick={() => {}}
            className="text-2xl py-4 px-8 border-2 font-normal"
          >
            LOAD MORE
          </WhiteButton>
        </div>
      </section>
    </main>
  );
};
