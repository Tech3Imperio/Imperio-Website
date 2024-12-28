// import React, { useState, useEffect } from "react";
// import { useMultiStepForm } from "../../hooks/useMultiStepForm/useMultiStepForm";
// import { PersonalDetails } from "./PersonalDetails";
// import { ExperienceDetails } from "./ExperienceDetails";
// import { FinalDetails } from "./FinalDetails";
// import { ThankYouPopup } from "./ThankYouPopup";

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
//   resume: File | null | { fileName: string; mimeType: string; data: string };
//   position: string;
//   jobType: string;
// }

// interface ApplicationFormProps {
//   onClose: () => void;
//   position: string;
//   jobType: string;
// }

// export function ApplicationForm({
//   onClose,
//   position,
//   jobType,
// }: ApplicationFormProps) {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     surname: "",
//     location: "",
//     mobile: "",
//     email: "",
//     highestQualification: "",
//     skills: "",
//     portfolioLink: "",
//     companyName: "",
//     designation: "",
//     experienceYears: "",
//     coverLetter: "",
//     resume: null,
//     position: position,
//     jobType: jobType,
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
//         for (const [key, value] of Object.entries(formData)) {
//           if (value !== null) {
//             if (key === "resume" && value instanceof File) {
//               formDataToSend.append("resume", value, value.name);
//             } else {
//               formDataToSend.append(key, value as string);
//             }
//           }
//         }

//         const response = await fetch(
//           "https://script.google.com/macros/s/AKfycbz6depPaJeKch7uQ_cWL_atpPcmmleNAnutN6kqvNOa55uCXFvBK8uy5YIwDuHqvIZ67w/exec",
//           {
//             method: "POST",
//             body: formDataToSend,
//             mode: "no-cors", // This prevents CORS errors
//           }
//         );

//         // Since we're using no-cors, we can't check response.ok
//         // We'll assume it's successful if there's no error
//         setShowThankYou(true);
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

//   const handleCloseThankYou = () => {
//     setShowThankYou(false);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Job Application: {position}</h1>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         <form onSubmit={handleSubmit} className="p-6">
//           {currentStep === 1 && (
//             <PersonalDetails
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />
//           )}
//           {currentStep === 2 && (
//             <ExperienceDetails
//               formData={formData}
//               handleInputChange={handleInputChange}
//             />
//           )}
//           {currentStep === 3 && (
//             <FinalDetails
//               formData={formData}
//               handleInputChange={handleInputChange}
//               handleFileChange={handleFileChange}
//             />
//           )}
//           <div className="mt-6 flex justify-between">
//             {!isFirstStep && (
//               <button
//                 type="button"
//                 onClick={back}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
//               >
//                 Back
//               </button>
//             )}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${
//                 isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {isSubmitting ? "Submitting..." : isLastStep ? "Submit" : "Next"}
//             </button>
//           </div>
//         </form>
//       </div>
//       {showThankYou && <ThankYouPopup onClose={handleCloseThankYou} />}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm/useMultiStepForm";
import { PersonalDetails } from "./PersonalDetails";
import { ExperienceDetails } from "./ExperienceDetails";
import { FinalDetails } from "./FinalDetails";
import { ThankYouPopup } from "./ThankYouPopup";

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

export function ApplicationForm({
  onClose,
  position,
  jobType,
}: ApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
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
    position: position,
    jobType: jobType,
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentStep, next, back, isFirstStep, isLastStep } =
    useMultiStepForm(3);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
    if (isLastStep) {
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

        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbziEWu6OSZJfg6kpVN4H0KimFUGeNImye3WX3EvPo6oSfsdPIyMoS6hG7nwOXMNTFvC/exec",
          {
            method: "POST",
            body: formDataToSend,
            // mode: "no-cors",
          }
        );

        // Since we're using no-cors, we can't check response.ok
        // We'll assume it's successful if there's no error
        setShowThankYou(true);
      } catch (error) {
        console.error("Error submitting application:", error);
        alert("Failed to submit application. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      next();
    }
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h1 className="text-2xl font-bold">Job Application: {position}</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
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
          <div className="mt-6 flex justify-between">
            {!isFirstStep && (
              <button
                type="button"
                onClick={back}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
      {showThankYou && <ThankYouPopup onClose={handleCloseThankYou} />}
    </div>
  );
}
