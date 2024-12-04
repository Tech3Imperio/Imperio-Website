import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { BsHandbag } from "react-icons/bs";

export default function DealerProductsPage() {
  const [filterSidebar, setFilterSidebar] = useState(false);
  const [icon, setIcon] = useState("");
  const encodedToken = localStorage.getItem("token");

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [openSections, setOpenSections] = useState<string[]>([]);

  useEffect(() => {
    if (encodedToken) {
      const parts = encodedToken.split(".");
      if (parts.length === 3) {
        const TokenData = JSON.parse(atob(parts[1]));
        console.log(TokenData);
        setIcon(TokenData.username.split("")[0]); // This will run only once when the component mounts
      }
    }
  }, [encodedToken]);

  const filterCategories = [
    {
      name: "Applications",
      options: [
        "Balcony Railing",
        "Staircase Railing",
        "Terrace Railing",
        "Fixed Glass Railing",
      ],
    },
    {
      name: "Mounting Type",
      options: [
        "Top Mounted",
        "In Floor Mounted",
        "Side Mounted",
        "Heavy Duty",
      ],
    },
    {
      name: "Glass Thick",
      options: ["12mm", "13.52mm", "16mm", "17.52mm", "20mm", "21.52mm"],
    },
    {
      name: "Glass Height",
      options: ["Upto 900mm", "Upto 1050mm", "Upto 1200mm", "Upto 1500mm"],
    },
    {
      name: "Handrail Type",
      options: ["With LED", "Without LED"],
    },
    {
      name: "Handrail Shape",
      options: [
        "Oval Shape",
        "Round Shape",
        "Square Shape",
        "Rectangel Shape",
        "Sleek Shape",
      ],
    },
  ];

  const toggleSection = (section: string) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(section)
        ? prevOpenSections.filter((s) => s !== section)
        : [...prevOpenSections, section]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
  };

  return (
    <>
      <main className="w-full">
        <nav className="max-w-[81rem] mx-6 lg:mx-auto flex justify-between items-center py-3 px-6 shadow-sm rounded-2xl border">
          <button onClick={() => setFilterSidebar(!filterSidebar)}>
            <CiFilter size={32} />
          </button>

          <div className="flex justify-center items-center gap-4 rounded-3xl shadow-2xl border px-4 focus:border-0">
            <IoSearchOutline size={20} />
            <input
              placeholder="Search..."
              type="text"
              className="h-8 w-[30rem] focus:outline-none"
            />
          </div>
          <div id="icon" className="flex justify-center items-center gap-6">
            <BsHandbag size={24} />
            <p className="h-8 w-8 rounded-full text-2xl bg-yellow-400 text-[#03237b] uppercase flex justify-center items-center Raleway">
              {icon}
            </p>
          </div>
        </nav>
      </main>
      <div
        className={`fixed left-0 top-0 h-screen w-[280px] bg-[--black] rounded-r-[2rem] border-r-[3px] shadow-2xl transition-transform duration-700 z-50 overflow-y-scroll sidebar-container ${
          filterSidebar
            ? "translate-x-0 shadow-yellow-500 "
            : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center m-4 pt-5">
          <h2 className="text-2xl YellowText whitespace-nowrap">
            Filter Products
          </h2>
          <button
            onClick={() => setFilterSidebar(false)}
            className="flex -text--grey"
          >
            <RxCross2 size={32} />
          </button>
        </div>
        <div className="p-4">
          {filterCategories.map((category) => (
            <div key={category.name} className="p-2 mb-4">
              <div
                onClick={() => toggleSection(category.name)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="-text--grey font-semibold">{category.name}</h3>
                <span>
                  <SlArrowDown
                    className={`-text--grey ${
                      openSections.includes(category.name)
                        ? "rotate-180 transition-all duration-500"
                        : " transition-all duration-500"
                    }`}
                  />
                </span>
              </div>
              {openSections.includes(category.name) && (
                <ul className="flex flex-col">
                  {category.options.map((option) => (
                    <li
                      key={option}
                      className="list-none flex items-center gap-3 p-2"
                    >
                      <input
                        type="checkbox"
                        id={option}
                        checked={selectedTypes.includes(option)}
                        onChange={() => handleTypeChange(option)}
                        className="cursor-pointer"
                      />
                      <label
                        htmlFor={option}
                        className="cursor-pointer rounded-lg whitespace-nowrap -text--grey"
                      >
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <button
            onClick={() => {
              setSelectedTypes([]), setFilterSidebar(false);
            }}
            className=" px-6 py-4 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap "
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
}
