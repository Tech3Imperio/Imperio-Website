import React, { useState } from "react";
import { motion } from "framer-motion";
import { tempHeroImage } from "../../assets/Images";
import { Hero, PopupMessage, QuoteForm, QuoteSelector } from "../../components";
import {
  Stage,
  QuoteData,
  QuoteFormData,
  StageNavigationProps,
} from "../../types";
import { useNavigate } from "react-router-dom";

const stages: Stage[] = ["Base", "Handrail", "Endcap"];

const StageNavigation: React.FC<StageNavigationProps> = ({
  stage,
  handleStage,
}) => (
  <div className="flex gap-1 pb-5 tablet:pb-8 laptop:pb-10 cursor-pointer">
    {stages.map((stageName, index) => (
      <button
        key={index}
        onClick={() => handleStage(index)}
        className={`${
          index <= stage ? "text-[--third] font-bold" : "text-[--grey]"
        } transition-500 no-underline`}
        aria-current={index === stage ? "step" : undefined}
      >
        Select {stageName} {index !== stages.length - 1 ? "> " : ""}
      </button>
    ))}
  </div>
);

export const GetQuote: React.FC = () => {
  const [contact, setContact] = useState<boolean>(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    number: "",
    pname: "",
    quantity: "",
  });
  const [stage, setStage] = useState(0);
  const [data, setData] = useState<QuoteData>({
    Base: "A50",
    Handrail: "S17",
    Endcap: "A50",
  });
  const [colors, setColors] = useState([0, 0, 0]);
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: string[] = [];

    if (!formData.name) newErrors.push("Name is required");
    if (!formData.email) newErrors.push("Email is required");
    if (!formData.number) newErrors.push("Number is required");
    if (!formData.pname) newErrors.push("Product name is required");
    if (!formData.quantity) newErrors.push("Quantity is required");

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    fetch(
      "https://script.google.com/macros/s/AKfycby42s7fS3M8-toUDfTVgRzWz7AB4zPjbxiIWsi0l1VDC6dzwMJ0nuA7DFX_bA91BjUs/exec",
      {
        method: "POST",
        body: JSON.stringify({
          from: "contact",
          name: formData.name,
          email: formData.email,
          number: formData.number,
          pname: formData.pname,
          quantity: formData.quantity,
          base:
            data.Base +
            (data.Base !== "None"
              ? " - " + ["Black", "Champagne", "Wood", "Silver"][colors[0]]
              : ""),
          handrail:
            data.Handrail +
            (data.Handrail !== "None"
              ? " - " + ["Black", "Champagne", "Wood", "Silver"][colors[1]]
              : ""),
          endcap:
            data.Endcap +
            (data.Endcap !== "None"
              ? " - " + ["Black", "Champagne", "Wood", "Silver"][colors[2]]
              : ""),
        }),
      }
    ).then(() => navigate("thanks"));
  };

  const handleStage = (index: number) => {
    setStage(index);
  };

  const handleData = (text: string) => {
    setData((prevData) => ({
      ...prevData,
      [stages[stage]]: text,
    }));
  };

  const handleColor = (colorValue: number) => {
    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[stage] = colorValue;
      return newColors;
    });
  };

  return (
    <main>
      <title>Quote - Imperio Railing</title>
      <Hero
        img={tempHeroImage}
        altText="Hero image for product"
        header="Get a quote"
        subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
        curve
      />
      <motion.section
        animate={{ x: contact ? -2000 : 0 }}
        transition={{ duration: 1 }}
        className={`justify-center px-4 phone:px-8 tablet:px-20 laptop:px-32 xl:px-44 pt-10 pb-14 ${
          contact ? "hidden" : "flex flex-col"
        }`}
      >
        <StageNavigation stage={stage} handleStage={handleStage} />
        <QuoteSelector
          stagesprops={[stages, stage, setStage]}
          dataprops={[data, handleData]}
          colorsprops={[colors, handleColor]}
          setContact={setContact}
        />
      </motion.section>
      <motion.section
        animate={{ x: contact ? 0 : 2000 }}
        transition={{ duration: 1 }}
        className={`${!contact && "hidden"}`}
      >
        <QuoteForm
          data={[formData, setFormData]}
          submit={onSubmit}
          setContact={setContact}
        />
      </motion.section>
      {errors.length !== 0 && (
        <PopupMessage message={errors[0]} onClose={() => setErrors([])} />
      )}
    </main>
  );
};
