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
const initialStagesContains: StagesContains = {
  Base: [],
  Handrail: [],
  Endcap: [],
};

const MemoGetQuote: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [data, setData] = useState<Data>({
    Base: "",
    Handrail: "",
    Endcap: "",
  });
  const [colors, setColors] = useState([0, 0, 0]);
  const [image, setImage] = useState(product);
  const [fetchData, setFetchData] = useState<FetchData | null>(null);
  const [stagesContains, setStagesContains] = useState<StagesContains>(
    initialStagesContains
  );

  const handleStage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setStage(parseInt(e.currentTarget.id, 10));
  };

  const handleColor = (colorValue: number) => {
    const selectedStage = stages[stage];
    if (data[selectedStage]) {
      setColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[stage] = colorValue;
        return newColors;
      });
    }
  };

  const handleData = (text: string) => {
    const currentStage = stages[stage];
    setData((prevData) => ({
      ...prevData,
      [currentStage]: prevData[currentStage] === text ? "" : text,
    }));
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
    if (!fetchData) return;

    const updatedStagesContains: StagesContains = {
      Base: [],
      Handrail: [],
      Endcap: [],
    };

    stages.forEach((stage) => {
      fetchData[stage].forEach((item) => {
        const dataItem = item[stage];
        if (dataItem) {
          updatedStagesContains[stage].push(dataItem);
        }
      });
    });

    setStagesContains(updatedStagesContains);
  }, [fetchData]);

  useEffect(() => {
    if (!fetchData) return;

    const currentStage = stages[stage];
    const selectedData = data[currentStage];
    if (!selectedData) return;

    const color = colors[stage];
    const stageData = fetchData[currentStage];
    const selectedImage = stageData.find(
      (item) => item[currentStage] === selectedData
    );

    if (selectedImage) {
      const colorKey: string = ["Black", "Champagne", "Wood", "Silver"][color];
      const newImage = selectedImage[colorKey as keyof FetchInnerData];
      if (newImage) {
        setImage(newImage);
      }
    }
  }, [data, colors, stage, fetchData]);

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
      <section className="h-screen pt-5 tablet:pt-8 laptop:pt-10 px-4 phone:px-8 tablet:px-20 laptop:px-32 xl:px-44">
        <div className="flex gap-1 pb-5 tablet:pb-8 laptop:pb-10 cursor-pointer">
          {stages.map((stageName, index) => (
            <a
              onClick={handleStage}
              id={`${index}`}
              key={index}
              className={`${
                index <= stage ? "text-[--third] font-bold" : "text-[--grey]"
              } transition-500 no-underline`}
            >
              Select {stageName} {index !== 2 ? "> " : ""}
            </a>
          ))}
        </div>
        <div className="h-full laptop:h-[78%] flex flex-col laptop:flex-row justify-between">
          <aside className="h-full">
            <img
              src={image}
              alt="product"
              className="rounded-4xl h-full max-w-screen laptop:max-w-[45rem]"
            />
          </aside>
          <aside className="w-screen laptop:w-[40rem] px-4 phone:px-8 tablet:px-12 laptop:px-16 pt-11 pb-28 flex flex-col gap-10 laptop:gap-0 justify-center laptop:justify-between">
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
                    className="w-12 h-12 rounded-full cursor-pointer bg-[#4a4a4a]"
                    title="Black"
                    onClick={() => handleColor(0)}
                  ></div>
                  <div
                    className="w-12 h-12 rounded-full cursor-pointer bg-[#958061]"
                    title="Champagne"
                    onClick={() => handleColor(1)}
                  ></div>
                  <div
                    className="w-12 h-12 rounded-full cursor-pointer bg-[#a15a3e]"
                    title="Wood"
                    onClick={() => handleColor(2)}
                  ></div>
                  <div
                    className="w-12 h-12 rounded-full cursor-pointer bg-[#e3e2dd]"
                    title="Silver"
                    onClick={() => handleColor(3)}
                  ></div>
                </div>
              </div>
            </header>
            <div className="flex flex-wrap justify-center gap-4 -ml-4 laptop:ml-0">
              {stagesContains[stages[stage]].map((text) => (
                <option
                  key={text}
                  className={`border-2 rounded-full py-3 tablet:py-4 px-6 tablet:px-8 text-sm phone:text-base tablet:text-lg laptop:text-xl transition-500 ${
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
      <section className="laptop:h-screen px-4 phone:px-8 tablet:px-20 laptop:px-32 xl:px-44">
        <h1 className="text-3xl phone:text-4xl tablet:text-5xl laptop:text-[3.5rem] text-[--third] py-2">
          Fill this form to get your quote.
        </h1>
        <h6 className="text-lg phone:text-xl tablet:text-2xl laptop:text-3xl italic text-[--third]">
          via whatsapp.
        </h6>
        <div className="flex max-laptop:flex-col py-5 justify-center laptop:justify-between laptop:items-end">
          <aside className="flex flex-col gap-5 w-full laptop:w-fit">
            <div className="flex flex-col gap-2 phone:text-base laptop:text-xl">
              <label htmlFor="name" className="italic w-fit">
                Name <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="name"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-full laptop:w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 phone:text-base laptop:text-xl">
              <label htmlFor="email" className="italic w-fit">
                Email <sup className="text-red-600">*</sup>
              </label>
              <input
                type="email"
                id="email"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-full laptop:w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 phone:text-base laptop:text-xl">
              <label htmlFor="number" className="italic w-fit">
                Whatsapp No. <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                pattern="\d*"
                id="number"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-full laptop:w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 phone:text-base laptop:text-xl">
              <label htmlFor="Pname" className="italic w-fit">
                Product Name <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="Pname"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-full laptop:w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 phone:text-base laptop:text-xl">
              <label htmlFor="quantity" className="italic w-fit">
                Quantity (ft<sup>2</sup>) <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="quantity"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-full laptop:w-[50rem] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 phone:text-base laptop:text-xl">
              <label htmlFor="unit" className="italic w-fit">
                Unit <sup className="text-red-600">*</sup>
              </label>
              <input
                type="text"
                id="unit"
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-full laptop:w-[50rem] outline-none"
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

export const GetQuote = React.memo(MemoGetQuote);
