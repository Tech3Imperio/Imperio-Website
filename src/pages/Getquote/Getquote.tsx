import React, { useEffect, useState } from "react";
import { product, tempHeroImage } from "../../assets/Images";
import { Hero } from "../../components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

type Stage = "Base" | "Handrail" | "Endcap";
type Data = Record<Stage, string>;
type StagesContains = Record<Stage, string[]>;
type FetchInnerData = {
  Base?: string;
  Handrail?: string;
  Endcap?: string;
  Black: string;
  Champagne: string;
  Silver: string;
  Wood: string;
};

type FetchData = Record<Stage, FetchInnerData[]>;

const stages: Stage[] = ["Base", "Handrail", "Endcap"];
const initialStages: StagesContains = {
  Base: [],
  Handrail: [],
  Endcap: [],
};

export const GetQuote: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [data, setData] = useState<Data>({
    Base: "",
    Handrail: "",
    Endcap: "",
  });
  const [colors, setColors] = useState([0, 0, 0]);
  const [fetchData, setFetchData] = useState<FetchData | null>(null);
  const [stagesContains, setStagesContains] =
    useState<StagesContains>(initialStages);

  const handleStage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setStage(parseInt(e.currentTarget.id));
  };

  const handleColor = (colorValue: number) => {
    let position = -1;

    Object.keys(data).forEach((key, index) => {
      if (data[key as keyof Data] !== "") {
        position = index;
      }
    });

    if (position !== -1) {
      setColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[position] = colorValue;
        return newColors;
      });
    }
  };

  const handleData = (text: string) => {
    setData((prevData) => {
      const currentStage = stages[stage];
      return {
        ...prevData,
        [currentStage]: prevData[currentStage] === text ? "" : text,
      };
    });
  };

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycby3Wf7v_ifcsCrnRJdWwOL8YhaHRUJwC36UU_pgsf0NAVrm-YSwLxhjnDIUvSNLQkai/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    if (!fetchData) {
      return;
    }
    const updatedStagesContains: StagesContains = {
      Base: [],
      Handrail: [],
      Endcap: [],
    };
    const keys = Object.keys(updatedStagesContains);
    keys.forEach((key) => {
      fetchData[key as keyof FetchData].forEach((item) => {
        const data = item[key as keyof FetchInnerData];
        if (data) {
          updatedStagesContains[key as keyof StagesContains].push(data);
        }
      });
    });
    console.log(colors);
    setStagesContains(updatedStagesContains);
  }, [fetchData]);

  return (
    <form>
      <title>Quote - Imperio Railing</title>
      <Hero
        img={tempHeroImage}
        altText="Hero image for product"
        header="Get a quote"
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        curve
      />
      <section className="h-screen pt-10 px-44">
        <div className="flex gap-1 pb-10 cursor-pointer">
          {stages.map((top, index) => (
            <a
              onClick={handleStage}
              id={`${index}`}
              key={index}
              className={`${
                index <= stage ? "text-[--third] font-bold" : "text-[--grey]"
              } transition-500 no-underline`}
            >
              Select {top} {index !== 2 ? "> " : ""}
            </a>
          ))}
        </div>
        <div className="h-[78%] flex justify-between">
          <aside className="h-full">
            <img src={product} alt="product" className="rounded-4xl h-full" />
          </aside>
          <aside className="w-[40rem] px-16 pt-11 pb-28 flex flex-col justify-between">
            <header className="flex flex-col justify-center items-center pr-4 w-full">
              <h6>{stage + 1}/3</h6>
              <h2 className="flex justify-between w-full">
                <FaArrowLeft
                  className={`text-3xl transition-500 ${
                    stage === 0 ? "text-[--grey]" : "text-[--black]"
                  }`}
                  onClick={() => setStage((prev) => (prev <= 0 ? 0 : prev - 1))}
                />
                <div className="font-normal text-2xl">
                  Select {stages[stage]}
                </div>
                <FaArrowRight
                  className={`text-3xl transition-500 ${
                    stage === 2 ? "text-[--grey]" : "text-[--black]"
                  }`}
                  onClick={() => setStage((prev) => (prev >= 2 ? 2 : prev + 1))}
                />
              </h2>
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-8 h-8 rounded-full cursor-pointer bg-[#4a4a4a]"
                    title="Black"
                    onClick={() => handleColor(0)}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full cursor-pointer bg-[#958061]"
                    title="Champagne"
                    onClick={() => handleColor(1)}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full cursor-pointer bg-[#a15a3e]"
                    title="Wood"
                    onClick={() => handleColor(2)}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full cursor-pointer bg-[#e3e2dd]"
                    title="Silver"
                    onClick={() => handleColor(3)}
                  ></div>
                </div>
              </div>
            </header>
            <div className="flex flex-wrap justify-center gap-4 ">
              {stagesContains[stages[stage]].map((text) => (
                <option
                  key={text}
                  className={`border-2  rounded-full py-4 px-8 text-xl transition-500  ${
                    data[stages[stage]] === text
                      ? "bg-[--black] text-white border-transparent"
                      : "bg-transparent text-black border-black"
                  } hover:text-[--secound] hover:border-[--secound]`}
                  onClick={() => handleData(text)}
                >
                  {text}
                </option>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section className="h-screen px-44">
        <h1 className="text-[3.5rem] text-[--third] pb-1">
          Fill this form to get your quote.
        </h1>
        <h6 className="text-3xl italic text-[--third]">via whatsapp.</h6>
        <div className="flex max-laptop:flex-col py-5 justify-center laptop:justify-between laptop:items-end">
          <aside className="flex flex-col gap-5 w-full laptop:w-fit">
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="name" className="italic w-fit">
                Name <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="name"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="email" className="italic w-fit">
                Email <sup className="text-red-600">*</sup>
              </label>
              <input
                type="email"
                id="email"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="number" className="italic w-fit">
                Whatsapp No. <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                pattern="\d*"
                id="number"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="Pname" className="italic w-fit">
                Product Name <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="Pname"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="quantity" className="italic w-fit">
                Quantity (ft<sup>2</sup>) <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="quantity"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 text-xl">
              <label htmlFor="unit" className="italic w-fit">
                Unit <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="unit"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-[50rem] outline-none"
              />
            </div>
          </aside>
          <aside className="">
            <button
              type="submit"
              className="py-7 px-9 text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-full flex gap-2"
            >
              GET THE ESTIMATE <IoArrowForward className="text-2xl" />
            </button>
          </aside>
        </div>
      </section>
    </form>
  );
};
