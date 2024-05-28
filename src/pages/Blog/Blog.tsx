import { useState } from "react";
import { Hero, WhiteButton, Description } from "../../components";
import { tempHeroImage } from "../../assets/images";
import { CiSearch } from "react-icons/ci";

export const Blog = () => {
  const [filters, setFilters] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [search, setSearch] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);

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
      </section>
    </main>
  );
};
