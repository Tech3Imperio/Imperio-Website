// import React from "react";
// import { QuoteFormProps } from "../../../types";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// // Functional component QuoteForm with props destructuring
// export const QuoteForm: React.FC<QuoteFormProps> = ({
//   data,
//   submit,
//   setContact,
// }) => {
//   const [value, setValue] = data; // Destructuring data state

//   // Handler for input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target; // Destructure id and value from the event target
//     setValue((prevData) => ({
//       ...prevData,
//       [id]: value, // Update the state with the new value for the specific input field
//     }));
//   };

//   // Form fields configuration
//   const formFields = [
//     { id: "name", label: "Name", type: "text", value: value.name },
//     { id: "email", label: "Email", type: "email", value: value.email },
//     {
//       id: "number",
//       label: "WhatsApp No.",
//       type: "text",
//       value: value.number,
//       pattern: "\\d*", // Pattern to allow only digits
//     },
//     { id: "pname", label: "Location", type: "text", value: value.pname },
//     {
//       id: "quantity",
//       label: "Quantity (RFT)",
//       type: "text",
//       value: value.quantity,
//     },
//   ];

//   return (
//     <form
//       onSubmit={submit}
//       className="h-[95vh] flex flex-col justify-center px-4 phone:px-8 tablet:px-20 laptop:px-32 xl:px-44"
//     >
//       <h1 className="text-3xl phone:text-4xl tablet:text-5xl laptop:text-[3.5rem] text-[--third] py-2">
//         Fill this form to get your quote.
//       </h1>
//       <h6 className="text-lg phone:text-xl tablet:text-2xl laptop:text-3xl italic text-[--third]">
//         via WhatsApp.
//       </h6>
//       <div className="flex max-laptop:flex-col py-5 justify-center laptop:justify-between laptop:items-end">
//         <aside className="flex flex-col gap-5 w-full laptop:w-fit">
//           {formFields.map(({ id, label, type, value, pattern }) => (
//             <div
//               key={id}
//               className="flex flex-col gap-2 phone:text-base laptop:text-xl"
//             >
//               <label htmlFor={id} className="italic w-fit">
//                 {label} <sup className="text-red-600">*</sup>
//               </label>
//               <input
//                 type={type}
//                 id={id}
//                 value={value}
//                 onChange={handleChange} // Attach change handler
//                 pattern={pattern} // Apply pattern if available
//                 className="py-3 px-8 bg-transparent border-2 rounded-none border-black w-full laptop:w-[50rem] outline-none"
//               />
//             </div>
//           ))}
//         </aside>
//         <aside className="flex flex-row laptop:flex-col gap-0 laptop:gap-10 justify-between laptop:justify-end py-5">
//           <button
//             type="button"
//             onClick={() => setContact((prev) => !prev)} // Toggle contact view
//             className="py-4 laptop:py-6 px-6 laptop:px-9 text-base laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-none flex justify-center gap-2"
//           >
//             <FaArrowLeft className="text-xl laptop:text-2xl" />
//             Go Back & Select
//           </button>
//           <button
//             type="submit"
//             className="py-4 laptop:py-6 px-6 laptop:px-9 text-base laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-none flex justify-center gap-2"
//           >
//             GET THE ESTIMATE
//             <FaArrowRight className="text-xl laptop:text-2xl" />
//           </button>
//         </aside>
//       </div>
//     </form>
//   );
// };

// valid submit button
// import React, { useState } from "react";
// import { QuoteFormProps } from "../../../types";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// // Functional component QuoteForm with props destructuring
// export const QuoteForm: React.FC<QuoteFormProps> = ({
//   data,
//   submit,
//   setContact,
// }) => {
//   const [value, setValue] = data; // Destructuring data state
//   const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission

//   // Handler for input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target; // Destructure id and value from the event target
//     setValue((prevData) => ({
//       ...prevData,
//       [id]: value, // Update the state with the new value for the specific input field
//     }));
//   };

//   // Form fields configuration
//   const formFields = [
//     { id: "name", label: "Name", type: "text", value: value.name },
//     { id: "email", label: "Email", type: "email", value: value.email },
//     {
//       id: "number",
//       label: "WhatsApp No.",
//       type: "text",
//       value: value.number,
//       pattern: "\\d{10}", // Pattern to allow exactly 10 digits
//     },
//     { id: "pname", label: "Location", type: "text", value: value.pname },
//     {
//       id: "quantity",
//       label: "Quantity (RFT)",
//       type: "text",
//       value: value.quantity,
//     },
//   ];

//   // Form submit handler
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     submit(e);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="h-[95vh] flex flex-col justify-center px-4 phone:px-8 tablet:px-20 laptop:px-32 xl:px-44"
//     >
//       <h1 className="text-3xl phone:text-4xl tablet:text-5xl laptop:text-[3.5rem] text-[--third] py-2">
//         Fill this form to get your quote.
//       </h1>
//       <h6 className="text-lg phone:text-xl tablet:text-2xl laptop:text-3xl italic text-[--third]">
//         via WhatsApp.
//       </h6>
//       <div className="flex max-laptop:flex-col py-5 justify-center laptop:justify-between laptop:items-end">
//         <aside className="flex flex-col gap-5 w-full laptop:w-fit">
//           {formFields.map(({ id, label, type, value, pattern }) => (
//             <div
//               key={id}
//               className="flex flex-col gap-2 phone:text-base laptop:text-xl"
//             >
//               <label htmlFor={id} className="italic w-fit">
//                 {label} <sup className="text-red-600">*</sup>
//               </label>
//               <input
//                 type={type}
//                 id={id}
//                 value={value}
//                 onChange={handleChange} // Attach change handler
//                 pattern={pattern} // Apply pattern if available
//                 className="py-3 px-8 bg-transparent border-2 rounded-none border-black w-full laptop:w-[50rem] outline-none"
//                 title={
//                   id === "number"
//                     ? "WhatsApp number must be exactly 10 digits"
//                     : ""
//                 }
//                 // Make all fields required except email
//               />
//             </div>
//           ))}
//         </aside>
//         <aside className="flex flex-row laptop:flex-col gap-0 laptop:gap-10 justify-between laptop:justify-end py-5">
//           <button
//             type="button"
//             onClick={() => setContact((prev) => !prev)} // Toggle contact view
//             className="py-4 laptop:py-6 px-6 laptop:px-9 text-base laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-none flex justify-center gap-2"
//           >
//             <FaArrowLeft className="text-xl laptop:text-2xl" />
//             Go Back & Select
//           </button>
//           <button
//             type="submit"
//             disabled={isSubmitting} // Disable button while submitting
//             className={`py-4 laptop:py-6 px-6 laptop:px-9 text-base laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-none flex justify-center gap-2 ${
//               isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             GET THE ESTIMATE
//             <FaArrowRight className="text-xl laptop:text-2xl" />
//           </button>
//         </aside>
//       </div>
//     </form>
//   );
// };

import React, { useState } from "react";
import { QuoteFormProps } from "../../../types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import axios from "axios";

// Functional component QuoteForm with props destructuring
export const QuoteForm: React.FC<QuoteFormProps> = ({
  data,
  submit,
  setContact,
}) => {
  const [value, setValue] = data; // Destructuring data state
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission

  // Function to fetch address details based on pin code
  const fetchAddressDetails = async (pinCode: string) => {
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pinCode}`
      );
      const data = response.data;

      console.log(`data: ${data}`);

      if (data[0].Status === "Success" && data[0].PostOffice.length > 0) {
        const address = data[0].PostOffice[0];
        console.log(address);
        return {
          city: address.District,
          state: address.State,
          location: address.Name,
        };
      } else {
        return {
          city: "",
          state: "",
          location: "",
        };
      }
    } catch (error) {
      console.error("Error fetching address details:", error);
      return {
        city: "",
        state: "",
        location: "",
      };
    }
  };

  // Handler for input changes
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target; // Destructure id and value from the event target

    if (id === "pinCode" && value.length === 6) {
      const addressDetails = await fetchAddressDetails(value);
      setValue((prevData) => ({
        ...prevData,
        [id]: value, // Update the pin code state
        ...addressDetails, // Update city, state, and nearestStation based on API response
      }));
    } else {
      setValue((prevData) => ({
        ...prevData,
        [id]: value, // Update the state with the new value for the specific input field
      }));
    }
  };

  // Form fields configuration
  const formFields = [
    { id: "name", label: "Name", type: "text", value: value.name },
    { id: "email", label: "Email", type: "email", value: value.email },
    {
      id: "number",
      label: "WhatsApp No.",
      type: "text",
      value: value.number,
      pattern: "\\d{10}", // Pattern to allow exactly 10 digits
    },
    // { id: "pname", label: "Location", type: "text", value: value.pname },
    { id: "pinCode", label: "Pin Code", type: "text", value: value.pinCode },
    { id: "city", label: "City", type: "text", value: value.city },
    { id: "state", label: "State", type: "text", value: value.state },
    {
      id: "location",
      label: "Location",
      type: "text",
      value: value.location,
    },
    {
      id: "quantity",
      label: "Quantity (RFT)",
      type: "text",
      value: value.quantity,
    },
  ];

  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    submit(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-[95vh] flex flex-col justify-center px-4 phone:px-8 tablet:px-20 laptop:px-32 xl:px-44"
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
                onChange={handleChange} // Attach change handler
                pattern={pattern} // Apply pattern if available
                className="py-3 px-8 bg-transparent border-2 rounded-none border-black w-full laptop:w-[50rem] outline-none"
                title={
                  id === "number"
                    ? "WhatsApp number must be exactly 10 digits"
                    : ""
                }
                // Make all fields required except email
              />
            </div>
          ))}
        </aside>
        <aside className="flex flex-row laptop:flex-col gap-0 laptop:gap-10 justify-between laptop:justify-end py-5">
          <button
            type="button"
            onClick={() => setContact((prev) => !prev)} // Toggle contact view
            className="py-4 laptop:py-6 px-6 laptop:px-9 text-base laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-none flex justify-center gap-2"
          >
            <FaArrowLeft className="text-xl laptop:text-2xl" />
            Go Back & Select
          </button>
          <button
            type="submit"
            disabled={isSubmitting} // Disable button while submitting
            className={`py-4 laptop:py-6 px-6 laptop:px-9 text-base laptop:text-lg font-semibold text-white bg-[--black] hover:text-[--black] hover:bg-[--secound] transition-500 rounded-none flex justify-center gap-2 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            GET THE ESTIMATE
            <FaArrowRight className="text-xl laptop:text-2xl" />
          </button>
        </aside>
      </div>
    </form>
  );
};
