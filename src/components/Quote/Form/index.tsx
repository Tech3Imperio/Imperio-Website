import React from "react";
import { QuoteFormProps } from "../../../types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export const QuoteForm: React.FC<QuoteFormProps> = ({
  data,
  submit,
  setContact,
}) => {
  const [value, setValue] = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValue((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const formFields = [
    { id: "name", label: "Name", type: "text", value: value.name },
    { id: "email", label: "Email", type: "email", value: value.email },
    {
      id: "number",
      label: "WhatsApp No.",
      type: "text",
      value: value.number,
      pattern: "\\d*",
    },
    { id: "pname", label: "Product Name", type: "text", value: value.pname },
    {
      id: "quantity",
      label: "Quantity (ft²)",
      type: "text",
      value: value.quantity,
    },
  ];

  return (
    <form
      onSubmit={submit}
      className="h-[95vh] flex flex-col justify-center px-4 phone:px-8 tablet:px-20 laptop:px-32 xl:px-44"
    >
      <h1 className="text-3xl phone:text-4xl tablet:text-5xl laptop:text-[3.5rem] text-[--third] py-2">
        Fill this form to get your quote.
      </h1>
      <h6 className="text-lg phone:text-xl tablet:text-2xl laptop:text-3xl italic text-[--third]">
        via WhatsApp.
      </h6>
      <div className="flex max-laptop:flex-col py-5 justify-center laptop:justify-between laptop:items-end">
        <aside className="flex flex-col gap-5 w-full laptop:w-fit">
          {formFields.map(({ id, label, type, value, pattern }) => (
            <div
              key={id}
              className="flex flex-col gap-2 phone:text-base laptop:text-xl"
            >
              <label htmlFor={id} className="italic w-fit">
                {label} <sup className="text-red-600">*</sup>
              </label>
              <input
                type={type}
                id={id}
                value={value}
                onChange={handleChange}
                pattern={pattern}
                className="py-3 px-8 bg-transparent border-2 rounded-2xl border-black w-full laptop:w-[50rem] outline-none"
              />
            </div>
          ))}
        </aside>
        <aside className="flex flex-row laptop:flex-col gap-0 laptop:gap-10 justify-between laptop:justify-end py-5">
          <button
            type="button"
            onClick={() => setContact((prev) => !prev)}
            className="py-4 laptop:py-6 px-6 laptop:px-9 text-base laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-full flex justify-center gap-2"
          >
            <FaArrowLeft className="text-xl laptop:text-2xl" />
            Go Back & Select
          </button>
          <button
            type="submit"
            className="py-4 laptop:py-6 px-6 laptop:px-9 text-base laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-full flex justify-center gap-2"
          >
            GET THE ESTIMATE
            <FaArrowRight className="text-xl laptop:text-2xl" />
          </button>
        </aside>
      </div>
    </form>
  );
};
