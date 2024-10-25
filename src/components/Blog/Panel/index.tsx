import React, { useState, useMemo } from "react";
import { BlackButton2, WhiteButton } from "../../Button";
import { BlogPanelProps, BlogType } from "../../../types";
import { CiSearch } from "react-icons/ci";
import { BlogCard } from "../Card";
import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
export const BlogPanel: React.FC<BlogPanelProps> = ({
  BlogData,
  Socials,
  className,
  children,
}) => {
  const [filters, setFilters] = useState<boolean[]>(Socials.map(() => false));
  const [cardsToShow, setCardsToShow] = useState<number>(8);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);
  const navigate = useNavigate();

  const filteredBlogs = useMemo(() => {
    return BlogData.filter((blog) => {
      const matchesFilter = filters.some(
        (filter, index) => filter && Socials[index] === blog.socialMedia
      );
      const matchesSearch =
        blog.header.toLowerCase().includes(searchQuery) ||
        (Array.isArray(blog.tags)
          ? blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
          : blog.tags.toLowerCase().includes(searchQuery));

      return (
        (filters.every((filter) => !filter) || matchesFilter) && matchesSearch
      );
    });
  }, [filters, searchQuery, BlogData, Socials]);

  const toggleFilter = (index: number) => {
    setFilters(filters.map((filter, i) => (i === index ? !filter : filter)));
  };

  const resetFilters = () => {
    setFilters(Socials.map(() => false));
  };

  const openPanel = (blog: BlogType) => {
    setSelectedBlog(blog);
  };

  const closePanel = () => {
    setSelectedBlog(null);
  };
  return (
    <section
      className={`py-20 px-4 tablet:px-12 lg:px-20 xl:px-28 2xl:px-36 ${className}`}
    >
      <div className="flex justify-between items-start max-lg:flex-col gap-4">
        {/* THIS IS OLD CODE BUT NOT MOBILE RESPONSIVE */}

        {/* <aside className="flex items-center justify-center flex-wrap gap-2 tablet:space-x-8">
          <div className="flex gap-2 lg:gap-4 border border-gray-500 rounded-4xl p-2 -ml-2 sm:ml-0">
            {Socials.map((Social, index) => (
              <WhiteButton
                key={index}
                value={filters[index]}
                onClick={() => toggleFilter(index)}
                className="text-base"
              >
                {Social}
              </WhiteButton>
            ))}
          </div>
          <button
            onClick={resetFilters}
            className="w-max py-3 laptop:py-4 px-5 laptop:px-6 text-base text-white bg-[--black] font-normal rounded-4xl transition-700 hover:text-[--black] hover:bg-[--secound]"
          >
            Reset Filters
          </button>
        </aside> */}

        {/* FOR MOBILE AND ALL DEVICE RESPONSIVE */}
        <aside className="flex flex-col items-center justify-center gap-4 tablet:flex-row tablet:justify-center tablet:gap-8">
          <div className="flex flex-wrap justify-center p-[0.50rem] gap-2 lg:gap-4 border border-gray-500 rounded-4xl mx-3 -mt-3 ml-2 sm:ml-0">
            {Socials.map((Social, index) => (
              <WhiteButton
                key={index}
                value={filters[index]}
                onClick={() => toggleFilter(index)}
                className="text-base"
              >
                {Social}
              </WhiteButton>
            ))}
          </div>
          <button
            onClick={resetFilters}
            className="min-w-fit py-3 mb-3 tablet:py-4 px-5 laptop:px-6 text-sm text-white bg-[--black] font-normal rounded-4xl transition-700 hover:text-[--black] hover:bg-[--secound]"
          >
            Reset Filters
          </button>
        </aside>

        <aside className="flex flex-row-reverse laptop:flex-row">
          <input
            id="search"
            type="text"
            value={searchQuery}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            onChange={(e) =>
              setSearchQuery(e.target.value.replace(/\s+/g, " ").toLowerCase())
            }
            placeholder="Search blogs"
            className="bg-transparent w-56 tablet:w-80 text-left laptop:text-right pr-4 outline-none border-b-2 border-black transition-700 text-xl text-black focus:w-80 tablet:focus:w-[30rem]"
          />
          <label
            htmlFor="search"
            className="border-b-2 border-black flex laptop:flex-row-reverse"
          >
            <CiSearch className="text-5xl pr-4" />
            <div
              className={`border-l-2 h-[90%] border-l-black pr-4 ${
                isSearchFocused ? "w-4 opacity-100" : "w-0 opacity-0"
              } transition-500`}
            ></div>
          </label>
        </aside>
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-14">
        {filteredBlogs.slice(0, cardsToShow).map((item, index) => (
          <BlogCard key={index} blog={item} onClick={() => openPanel(item)} />
        ))}
      </div>
      {selectedBlog && (
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-700 overflow-auto ${
            selectedBlog ? "opacity-100" : " opacity-0 pointer-events-none"
          }`}
          onClick={closePanel}
        >
          <div
            className={`fixed left-1/2 tablet:top-1/2 -translate-x-1/2 tablet:-translate-x-0 -translate-y-0 tablet:-translate-y-1/2 h-[45vh] tablet:h-[99%] w-[95%] tablet:w-[40vw] rounded-4xl bg-white p-6 shadow-lg transition-700 overflow-y-scroll noscroll ${
              selectedBlog
                ? "top-4 tablet:left-4"
                : "-top-full tablet:-left-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 tablet:p-8 pt-2 tablet:pt-4 space-y-6">
              <h3 className="text-xl tablet:text-3xl font-normal text-[--third]">
                {selectedBlog.header}
              </h3>
              <p className="text-[--grey]">{selectedBlog.details}</p>
              <BlackButton2
                onClick={() =>
                  navigate(
                    `/blog/${selectedBlog.id
                      ?.toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]+/g, "")
                      .replace(/--+/g, "-")
                      .trim()}`,
                    {
                      state: selectedBlog,
                    }
                  )
                }
                className="flex gap-2"
              >
                <div className="text-xs">VIEW FULL BLOG</div>
                <div className="text-md">
                  <HiArrowRight />
                </div>
              </BlackButton2>
            </div>
            <div className="flex justify-center items-center overflow-hidden rounded-4xl ">
              <img
                src={selectedBlog.img}
                alt={selectedBlog.alt}
                className="max-h-[570px] rounded-4xl"
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={`justify-center tablet:justify-end mt-12 ${
          filteredBlogs.length <= cardsToShow ? "hidden" : "flex"
        }`}
      >
        <WhiteButton
          onClick={() => setCardsToShow((prev) => prev + 4)}
          className="text-lg tablet:text-2xl py-4 px-8 border-2 font-normal"
        >
          LOAD MORE
        </WhiteButton>
      </div>
      {children}
    </section>
  );
};
