import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { tempHeroImage } from "../../assets/Images";
import { Hero, QuoteForm } from "../../components";
const PopupMessage = React.lazy(() => import("../../components/PopUp/index"));
const QuoteSelector = React.lazy(
  () => import("../../components/Quote/Selector/index")
);
import {
  Stage,
  QuoteData,
  QuoteFormData,
  StageNavigationProps,
} from "../../types";
import { useNavigate } from "react-router-dom";

const stages: Stage[] = ["Base", "Handrail", "Glass", "Height"];

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
    // pname: "",
    pinCode: "",
    city: "",
    state: "",
    location: "",
    quantity: "",
  });
  const [stage, setStage] = useState(0);
  const [data, setData] = useState<QuoteData>({
    Base: "A50",
    Handrail: "S17",
    Glass: "A50",
    Height: "12mm Toughened",
  });
  const [colors, setColors] = useState([0, 0, 0]);
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: string[] = [];

    if (!formData.name) newErrors.push("Name is required");
    if (!formData.number) newErrors.push("Number is required");
    // if (!formData.pname) newErrors.push("Product name is required");
    if (!formData.quantity) newErrors.push("Quantity is required");

    setErrors(newErrors);

    return newErrors.length === 0;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    fetch(
      "https://script.google.com/macros/s/AKfycbwNxer8GuQT83Orw9z-ghMpayTQ3y31ioHzhg7xJr6aqyAw3Rttm7o7paO6zvrf3SYv/exec",

      {
        method: "POST",
        body: JSON.stringify({
          from: "contact",
          name: formData.name,
          email: formData.email || "User did not fill email", // Default value if email is not provided
          number: formData.number,
          // pname: formData.pname,
          pinCode: formData.pinCode,
          city: formData.city,
          state: formData.state,
          location: formData.location,
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
          glass:
            data.Glass +
            (data.Glass !== "None"
              ? " - " + ["Black", "Champagne", "Wood", "Silver"][colors[2]]
              : ""),
          height:
            data.Height +
            (data.Height !== "None"
              ? " - " + ["Black", "Champagne", "Wood", "Silver"][colors[1]]
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
        <Suspense fallback={<div>Loading...</div>}>
          <QuoteSelector
            stagesprops={[stages, stage, setStage]}
            dataprops={[data, handleData]}
            colorsprops={[colors, handleColor]}
            setContact={setContact}
          />
        </Suspense>
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
        <Suspense fallback={<div>Loading...</div>}>
          <PopupMessage message={errors[0]} onClose={() => setErrors([])} />
        </Suspense>
      )}
    </main>
  );
};
