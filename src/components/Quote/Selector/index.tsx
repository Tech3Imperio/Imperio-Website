import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  FetchData,
  FetchInnerData,
  QuoteSelectorProps,
  StagesContains,
} from "../../../types";
import { product } from "../../../assets/Images";
import { CiCircleCheck } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import classNames from "classnames";

export const QuoteSelector: React.FC<QuoteSelectorProps> = ({
  stagesprops,
  dataprops,
  colorsprops,
  setContact,
}) => {
  const [image, setImage] = useState(product); // State to hold the current image
  const [fetchData, setFetchData] = useState<FetchData | null>(null); // State to hold fetched data
  const [stagesContains, setStagesContains] = useState<StagesContains>({
    Base: Array(8).fill("loading"),
    Handrail: Array(8).fill("loading"),
    Endcap: Array(8).fill("loading"),
  }); // State to hold stages content

  const [stages, stage, setStage] = stagesprops; // Props for stages
  const [data, setData] = dataprops; // Props for data
  const [colors, setColor] = colorsprops; // Props for colors

  const fetchDataCallback = useCallback(async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby3Wf7v_ifcsCrnRJdWwOL8YhaHRUJwC36UU_pgsf0NAVrm-YSwLxhjnDIUvSNLQkai/exec"
      ); // Fetch data from an API
      const data = await response.json();
      setFetchData(data); // Set fetched data

      // Process and set stages content
      const updatedStagesContains: StagesContains = stages.reduce(
        (acc, stage) => {
          acc[stage] = data[stage].map((item: FetchInnerData) => item[stage]);
          return acc;
        },
        { Base: [], Handrail: [], Endcap: [] }
      );

      setStagesContains(updatedStagesContains);
    } catch (error) {
      console.error("Failed to fetch data", error); // Handle errors
    }
  }, [stages]);

  useEffect(() => {
    fetchDataCallback(); // Fetch data on component mount
  }, [fetchDataCallback]);

  const currentStageData = useMemo(() => {
    if (!fetchData) return null;
    return fetchData[stages[stage]]; // Get data for the current stage
  }, [fetchData, stages, stage]);

  useEffect(() => {
    if (!currentStageData) return;

    const selectedData = data[stages[stage]]; // Get selected data for the current stage
    const selectedImage = currentStageData.find(
      (item) => item[stages[stage]] === selectedData
    );

    if (selectedImage) {
      const colorKey = ["Black", "Champagne", "Wood", "Silver"][colors[stage]];
      const newImage = selectedImage[colorKey as keyof FetchInnerData]; // Get image based on selected color
      if (newImage) {
        setImage(newImage); // Set the new image
      }
    }
  }, [data, colors, stage, currentStageData, stages]);

  return (
    <div className="h-full laptop:h-[78vh] flex flex-col laptop:flex-row justify-between">
      <aside className="h-full">
        <img
          src={image}
          alt="product"
          className="rounded-4xl h-full w-screen laptop:w-[45rem]"
        />
      </aside>
      <aside className="w-screen laptop:w-[40rem] -ml-4 laptop:ml-0 px-4 phone:px-8 tablet:px-12 laptop:px-16 py-10 laptop:pt-11 laptop:pb-28 flex flex-col gap-10 laptop:gap-0 justify-center laptop:justify-between">
        <header className="flex flex-col justify-center items-center laptop:pr-4 w-full">
          <h6>{stage + 1}/3</h6> {/* Show the current stage */}
          <h2 className="flex justify-between w-full">
            <FaArrowLeft
              className={`text-3xl transition-500 ${
                stage === 0 ? "text-[--grey]" : "text-[--black] cursor-pointer"
              }`}
              onClick={() => setStage((prev) => (prev <= 0 ? 0 : prev - 1))} // Handle previous stage
              aria-disabled={stage === 0}
            />
            <div className="font-normal text-2xl">Select {stages[stage]}</div>
            <FaArrowRight
              className={`text-3xl transition-500 ${
                stage === 2 ? "text-[--grey]" : "text-[--black] cursor-pointer"
              }`}
              onClick={() => setStage((prev) => (prev >= 2 ? 2 : prev + 1))} // Handle next stage
              aria-disabled={stage === 2}
            />
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center space-x-4 text-5xl text-[--secound]">
              {["#4a4a4a", "#958061", "#a15a3e", "#e3e2dd"].map(
                (colorHex, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 rounded-full cursor-pointer"
                    style={{ backgroundColor: colorHex }}
                    title={["Black", "Champagne", "Wood", "Silver"][idx]} // Display color options
                    onClick={() => setColor(idx)} // Set selected color
                    role="button"
                    aria-pressed={colors[stage] === idx}
                  >
                    {colors[stage] === idx ? <CiCircleCheck /> : ""}
                  </div>
                )
              )}
            </div>
          </div>
        </header>
        <div
          className={`flex flex-wrap justify-center gap-4 ${
            stage === 2 ? "laptop:-mb-28" : ""
          }`}
        >
          {stagesContains[stages[stage]].map((text, index) => (
            <button
              type="button"
              key={index}
              className={classNames(
                "border-2 rounded-full py-3 px-6 text-sm phone:text-base tablet:text-lg laptop:text-xl transition-500 hover:border-[--secound]",
                {
                  "bg-[--black] text-[--secound] border-transparent":
                    data[stages[stage]] === text,
                  "bg-transparent text-black border-black":
                    data[stages[stage]] !== text,
                }
              )}
              onClick={() => setData(text)} // Set selected data
            >
              {text}
            </button>
          ))}
        </div>
        <div
          className={`justify-end ${
            stage === 2 ? "flex laptop:-mb-28 laptop:-mr-20" : "hidden"
          } `}
        >
          <button
            type="button"
            onClick={() => setContact((prev) => !prev)} // Handle contact form display
            className="py-2 laptop:py-4 px-3 laptop:px-6 text-base laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-full flex gap-2"
          >
            Proceed Further
            <FaArrowRight className="text-2xl laptop:text-3xl" />
          </button>
        </div>
      </aside>
    </div>
  );
};
