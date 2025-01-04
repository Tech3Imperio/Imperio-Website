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

const QuoteSelector: React.FC<QuoteSelectorProps> = ({
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
    Glass: Array(8).fill("loading"),
    Height: Array(8).fill("loading"),
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
      // console.log("Fetched data:", data); // Debug log to check the fetched data

      setFetchData(data); // Set fetched data

      // Process and set stages content
      const updatedStagesContains: StagesContains = stages.reduce(
        (acc, stage) => {
          acc[stage] = data[stage].map((item: FetchInnerData) => item[stage]);
          return acc;
        },
        { Base: [], Handrail: [], Glass: [], Height: [] }
      );

      // console.log("Updated stagesContains:", updatedStagesContains); // Debug log to check stages content

      setStagesContains(updatedStagesContains);
    } catch (error) {
      // console.error("Failed to fetch data", error); // Handle errors
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
    if (!currentStageData) {
      // console.log("Current stage data is not available.");
      return;
    }

    // Ensure data and stages are defined and valid
    if (!data || !stages || typeof stages[stage] === "undefined") {
      // console.log("Data or stages are not properly defined.");
      return;
    }

    const selectedData = data[stages[stage]]; // Get selected data for the current stage
    if (!selectedData) {
      // console.log("Selected data for the current stage is not available.");
      return;
    }

    // console.log("Current Stage Data:", currentStageData);
    // console.log("Selected Data:", selectedData);

    const selectedImage = currentStageData.find(
      (item) => item[stages[stage]] === selectedData
    );

    // console.log("Selected Image:", selectedImage);

    if (selectedImage) {
      let newImage = null;

      if (stage === 2 || stage === 3) {
        // If the stage is Glass or Height, use a specific image or default to the first image
        const colorKeys = Object.keys(selectedImage).filter(
          (key) => key !== stages[stage]
        );
        newImage = selectedImage[colorKeys[0]]; // Use the first available color image
      } else {
        const colorKey = ["Black", "Champagne", "Silver", "Wood"][
          colors[stage]
        ];
        newImage = selectedImage[colorKey as keyof FetchInnerData]; // Get image based on selected color
      }

      if (newImage) {
        console.log("New Image:", newImage);
        setImage(newImage); // Set the new image
      } else {
        // console.log("No new image found.");
      }
    } else {
      // console.log("No selected image found for the current stage.");
    }
  }, [data, colors, stage, currentStageData, stages]);

  // Clear color selection for Glass and Height stages
  useEffect(() => {
    if (stage === 2 || stage === 3) {
      setColor(-1); // -1 indicates no color selected
    }
  }, [stage, setColor]);

  // Handle setting data for Glass and Height stages
  const handleSetData = (text: string) => {
    if (stage === 2 || stage === 3) {
      setData(text); // Set only the selected part for Glass or Height
    } else {
      setData(text); // Set data normally for other stages
    }
  };

  const isColorStage = stage === 0 || stage === 1; // Check if the stage is Base or Handrail

  return (
    <div className="h-full 2xl:h-[78vh] laptop:h-[60vh] flex flex-col laptop:flex-row justify-between">
      <aside className="h-full">
        <img
          src={image}
          alt="product"
          className="rounded-4xl h-full w-screen laptop:w-[45rem] laptop:mt-10"
        />
      </aside>
      <aside className="w-screen laptop:w-[40rem] -ml-4 laptop:ml-0 px-4 phone:px-8 tablet:px-12 laptop:px-16 py-10 laptop:pt-11 laptop:pb-28 flex flex-col gap-10 laptop:gap-0 justify-center laptop:justify-between">
        <header className="flex flex-col justify-center items-center laptop:pr-4 w-full">
          <h6>{stage + 1}/4</h6> {/* Show the current stage */}
          <h2 className="flex justify-between w-full">
            <FaArrowLeft
              className={`text-3xl transition-500 laptop:mr-8 ${
                stage === 0 ? "text-[--grey]" : "text-[--black] cursor-pointer"
              }`}
              onClick={() => setStage((prev) => (prev <= 0 ? 0 : prev - 1))} // Handle previous stage
              aria-disabled={stage === 0}
            />
            <div className="font-normal text-2xl">Select {stages[stage]}</div>
            <FaArrowRight
              className={`text-3xl transition-500 tablet:mr-20 ${
                stage === 3 ? "text-[--grey]" : "text-[--black] cursor-pointer"
              }`}
              onClick={() => setStage((prev) => (prev >= 3 ? 3 : prev + 1))} // Handle next stage
              aria-disabled={stage === 3}
            />
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center space-x-4 text-5xl text-[--secound]">
              {["#e3e2dd", "#958061", "#4a4a4a", "#a15a3e"].map(
                (colorHex, idx) => (
                  <div
                    key={idx}
                    className={`w-12 h-12 rounded-full ${
                      isColorStage
                        ? "cursor-pointer"
                        : "cursor-not-allowed opacity-50"
                    }`}
                    style={{ backgroundColor: colorHex }}
                    title={["Black", "Champagne", "Silver", "Wood"][idx]} // Display color options
                    onClick={() => isColorStage && setColor(idx)} // Set selected color if stage allows
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
            stage === 3 ? "laptop:-mb-28" : ""
          }`}
          style={{ gap: "1rem", rowGap: "1rem", marginTop: "25px" }} // Ensure proper spacing
        >
          {stagesContains[stages[stage]].map((text, index) => (
            <button
              type="button"
              key={index}
              className={classNames(
                "border-2 rounded-full py-3 px-6 text-sm phone:text-base  xl:mr-0 transition-500 hover:border-[--secound]",
                {
                  "bg-[--black] text-[--secound] border-transparent":
                    data[stages[stage]] === text,
                  "bg-transparent text-black border-black":
                    data[stages[stage]] !== text,
                }
              )}
              onClick={() => handleSetData(text)} // Set selected data
              style={{
                minWidth: "100px", // Set minimum width for buttons
                textAlign: "center", // Center align the text
              }}
            >
              {text}
            </button>
          ))}
        </div>
        <div
          className={`justify-end ${
            stage === 3 ? "flex laptop:-mb-28 laptop:-mr-20" : "hidden"
          } `}
        >
          <button
            type="button"
            onClick={() => setContact((prev) => !prev)} // Handle contact form display
            className="py-2 laptop:py-4 laptop:mt-20 px-3 laptop:px-6 text-base tablet:mr-16 laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-full flex gap-2"
          >
            Proceed Further
            <FaArrowRight className="text-2xl laptop:text-3xl" />
          </button>
        </div>
      </aside>
    </div>
  );
};
export default QuoteSelector;
