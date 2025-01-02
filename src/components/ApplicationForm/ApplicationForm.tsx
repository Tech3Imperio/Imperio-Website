// import React, { useState, useEffect } from "react";
// import { useMultiStepForm } from "../../hooks/useMultiStepForm/useMultiStepForm";
// import { PersonalDetails } from "./PersonalDetails";
// import { ExperienceDetails } from "./ExperienceDetails";
// import { FinalDetails } from "./FinalDetails";
// import { IoMdClose } from "react-icons/io";
// import axios from "axios";
// import { BASE_URL } from "../../pages/Service/Api/Api";

// export interface FormData {
//   name: string;
//   surname: string;
//   location: string;
//   mobile: string;
//   email: string;
//   highestQualification: string;
//   skills: string;
//   portfolioLink: string;
//   companyName: string;
//   designation: string;
//   experienceYears: string;
//   coverLetter: string;
//   resume: File | null;
//   position: string;
//   jobType: string;
// }

// interface ApplicationFormProps {
//   onClose: () => void;
//   position: string;
//   jobType: string;
// }

// const initialFormData: FormData = {
//   name: "",
//   surname: "",
//   location: "",
//   mobile: "",
//   email: "",
//   highestQualification: "",
//   skills: "",
//   portfolioLink: "",
//   companyName: "",
//   designation: "",
//   experienceYears: "",
//   coverLetter: "",
//   resume: null,
//   position: "",
//   jobType: "",
// };

// export function ApplicationForm({
//   onClose,
//   position,
//   jobType,
// }: ApplicationFormProps) {
//   const [formData, setFormData] = useState<FormData>({
//     ...initialFormData,
//     position,
//     jobType,
//   });
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { currentStep, next, back, isFirstStep, isLastStep } =
//     useMultiStepForm(3);

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, []);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.size <= 2 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//     } else {
//       alert("File size should not exceed 2MB");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (isLastStep) {
//       setIsSubmitting(true);
//       try {
//         const formDataToSend = new FormData();
//         Object.entries(formData).forEach(([key, value]) => {
//           if (value !== null) {
//             if (key === "resume" && value instanceof File) {
//               formDataToSend.append("resume", value, value.name);
//             } else {
//               formDataToSend.append(key, value as string);
//             }
//           }
//         });

//         console.log("Sending data to server...");
//         const response = await axios.post(`${BASE_URL}/apply`, formDataToSend, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         });

//         console.log("Response from server:", response);

//         // Check if the status field exists and matches "success"
//         if (response.data && response.data.status === "success") {
//           console.log("Setting showThankYou to true");
//           setShowThankYou(true);
//           setFormData({ ...initialFormData, position, jobType });
//         } else {
//           console.log("Server response status is not success");
//           alert("Failed to submit application. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error submitting application:", error);
//         alert("Failed to submit application. Please try again.");
//       } finally {
//         setIsSubmitting(false);
//       }
//     } else {
//       next();
//     }
//   };

//   const handleClose = () => {
//     setShowThankYou(false);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Job Application: {position}</h1>
//           <button
//             onClick={handleClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <IoMdClose size={24} />
//           </button>
//         </div>
//         {showThankYou ? (
//           <div className="p-6 text-center">
//             <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
//             <p className="mb-4">
//               Your application has been submitted successfully.
//             </p>
//             <button
//               onClick={handleClose}
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//             >
//               Close
//             </button>
//           </div>
//         ) : isSubmitting ? (
//           <div className="p-6 text-center">
//             <p>Submitting your application...</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="p-6">
//             {currentStep === 1 && (
//               <PersonalDetails
//                 formData={formData}
//                 handleInputChange={handleInputChange}
//               />
//             )}
//             {currentStep === 2 && (
//               <ExperienceDetails
//                 formData={formData}
//                 handleInputChange={handleInputChange}
//               />
//             )}
//             {currentStep === 3 && (
//               <FinalDetails
//                 formData={formData}
//                 handleInputChange={handleInputChange}
//                 handleFileChange={handleFileChange}
//               />
//             )}
//             <div className="mt-6 flex justify-between">
//               {!isFirstStep && (
//                 <button
//                   type="button"
//                   onClick={back}
//                   className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
//                 >
//                   Back
//                 </button>
//               )}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${
//                   isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {isSubmitting
//                   ? "Submitting..."
//                   : isLastStep
//                   ? "Submit"
//                   : "Next"}
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiUser, FiBriefcase, FiFileText, FiX } from "react-icons/fi";
// import { PersonalDetails } from "./PersonalDetails";
// import { ExperienceDetails } from "./ExperienceDetails";
// import { FinalDetails } from "./FinalDetails";
// import { ThankYouMessage } from "./ThankYouPopup";

// export interface FormData {
//   name: string;
//   surname: string;
//   location: string;
//   mobile: string;
//   email: string;
//   highestQualification: string;
//   skills: string;
//   portfolioLink: string;
//   companyName: string;
//   designation: string;
//   experienceYears: string;
//   coverLetter: string;
//   resume: File | null;
//   position: string;
//   jobType: string;
// }

// interface ApplicationFormProps {
//   onClose: () => void;
//   position: string;
//   jobType: string;
// }

// const initialFormData: FormData = {
//   name: "",
//   surname: "",
//   location: "",
//   mobile: "",
//   email: "",
//   highestQualification: "",
//   skills: "",
//   portfolioLink: "",
//   companyName: "",
//   designation: "",
//   experienceYears: "",
//   coverLetter: "",
//   resume: null,
//   position: "",
//   jobType: "",
// };

// export function ApplicationForm({
//   onClose,
//   position,
//   jobType,
// }: ApplicationFormProps) {
//   const [formData, setFormData] = useState<FormData>({
//     ...initialFormData,
//     position,
//     jobType,
//   });
//   const [currentStep, setCurrentStep] = useState(1);
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.size <= 2 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//     } else {
//       alert("File size should not exceed 2MB");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (currentStep === 3) {
//       setIsSubmitting(true);
//       // Simulating API call
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setShowThankYou(true);
//       setIsSubmitting(false);
//     } else {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const steps = [
//     { icon: <FiUser />, title: "Personal Details" },
//     { icon: <FiBriefcase />, title: "Experience" },
//     { icon: <FiFileText />, title: "Final Details" },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white rounded-4xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
//       >
//         <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-[#03237b]">
//             Apply for {position}
//           </h1>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             <FiX size={24} />
//           </button>
//         </div>

//         {showThankYou ? (
//           <ThankYouMessage onClose={onClose} />
//         ) : (
//           <form onSubmit={handleSubmit} className="p-6">
//             <div className="flex justify-between mb-8">
//               {steps.map((step, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                       index + 1 <= currentStep
//                         ? "bg-[#fad000] text-[#03237b]"
//                         : "bg-gray-200 text-gray-500"
//                     }`}
//                   >
//                     {step.icon}
//                   </div>
//                   <span className="mt-2 text-sm font-medium text-[#393939]">
//                     {step.title}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentStep}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {currentStep === 1 && (
//                   <PersonalDetails
//                     formData={formData}
//                     handleInputChange={handleInputChange}
//                   />
//                 )}
//                 {currentStep === 2 && (
//                   <ExperienceDetails
//                     formData={formData}
//                     handleInputChange={handleInputChange}
//                   />
//                 )}
//                 {currentStep === 3 && (
//                   <FinalDetails
//                     formData={formData}
//                     handleInputChange={handleInputChange}
//                     handleFileChange={handleFileChange}
//                   />
//                 )}
//               </motion.div>
//             </AnimatePresence>

//             <div className="mt-8 flex justify-between">
//               {currentStep > 1 && (
//                 <button
//                   type="button"
//                   onClick={() => setCurrentStep((prev) => prev - 1)}
//                   className="px-8 py-3 text-[--secound] font-bold bg-[--black] text-base rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--secound] hover:text-[--black] whitespace-nowrap"
//                 >
//                   Back
//                 </button>
//               )}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`px-8 py-3 text-[--black] font-bold bg-[--secound] text-base rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap ${
//                   isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {isSubmitting
//                   ? "Submitting..."
//                   : currentStep === 3
//                   ? "Submit Application"
//                   : "Next"}
//               </button>
//             </div>
//           </form>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiBriefcase, FiFileText, FiX } from "react-icons/fi";
import { PersonalDetails } from "./PersonalDetails";
import { ExperienceDetails } from "./ExperienceDetails";
import { FinalDetails } from "./FinalDetails";
import { ThankYouMessage } from "./ThankYouPopup";
import axios from "axios";
import { BASE_URL } from "../../pages/Service/Api/Api";

export interface FormData {
  name: string;
  surname: string;
  location: string;
  mobile: string;
  email: string;
  highestQualification: string;
  skills: string;
  portfolioLink: string;
  companyName: string;
  designation: string;
  experienceYears: string;
  coverLetter: string;
  resume: File | null;
  position: string;
  jobType: string;
}

interface ApplicationFormProps {
  onClose: () => void;
  position: string;
  jobType: string;
}

const initialFormData: FormData = {
  name: "",
  surname: "",
  location: "",
  mobile: "",
  email: "",
  highestQualification: "",
  skills: "",
  portfolioLink: "",
  companyName: "",
  designation: "",
  experienceYears: "",
  coverLetter: "",
  resume: null,
  position: "",
  jobType: "",
};

export function ApplicationForm({
  onClose,
  position,
  jobType,
}: ApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    position,
    jobType,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, resume: file }));
    } else {
      alert("File size should not exceed 2MB");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 3) {
      setIsSubmitting(true);
      try {
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (value !== null) {
            if (key === "resume" && value instanceof File) {
              formDataToSend.append("resume", value, value.name);
            } else {
              formDataToSend.append(key, value as string);
            }
          }
        });

        const response = await axios.post(`${BASE_URL}/apply`, formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data && response.data.status === "success") {
          setShowThankYou(true);
        } else {
          alert("Failed to submit application. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting application:", error);
        alert("Failed to submit application. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const steps = [
    { icon: <FiUser />, title: "Personal Details" },
    { icon: <FiBriefcase />, title: "Experience" },
    { icon: <FiFileText />, title: "Final Details" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Apply for {position}
          </h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {showThankYou ? (
          <ThankYouMessage onClose={onClose} />
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index + 1 <= currentStep
                        ? "bg-[#fad000] text-[#03237b]"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-600">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 1 && (
                  <PersonalDetails
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                )}
                {currentStep === 2 && (
                  <ExperienceDetails
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                )}
                {currentStep === 3 && (
                  <FinalDetails
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleFileChange={handleFileChange}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="px-8 py-3 text-[--secound] font-bold bg-[--black] text-base rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--secound] hover:text-[--black] whitespace-nowrap"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 text-[--black] font-bold bg-[--secound] text-base rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting
                  ? "Submitting..."
                  : currentStep === 3
                  ? "Submit Application"
                  : "Next"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
