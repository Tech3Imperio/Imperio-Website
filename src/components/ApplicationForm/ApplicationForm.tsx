// import React, { useState, Suspense, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiUser, FiBriefcase, FiFileText, FiX } from "react-icons/fi";
// const PersonalDetails = React.lazy(
//   () => import("../ApplicationForm/PersonalDetails")
// );
// const ExperienceDetails = React.lazy(
//   () => import("../ApplicationForm/ExperienceDetails")
// );
// const FinalDetails = React.lazy(
//   () => import("../ApplicationForm/FinalDetails")
// );
// const ThankYouMessage = React.lazy(() => import("./ThankYouPopup"));
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
//   const [currentStep, setCurrentStep] = useState(1);
//   const [showThankYou, setShowThankYou] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   useEffect(() => {
//     setFormData((prev) => ({ ...prev, position, jobType }));
//   }, [position, jobType]);

//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.size <= 5 * 1024 * 1024) {
//       setFormData((prev) => ({ ...prev, resume: file }));
//     } else {
//       setErrorMessage("File size should not exceed 5MB");
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (currentStep === 3) {
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

//         const response = await axios.post(`${BASE_URL}/apply`, formDataToSend, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         if (response.data.status === "success") {
//           setShowThankYou(true);
//         } else {
//           setErrorMessage("Failed to submit application. Please try again.");
//         }
//       } catch (error) {
//         setErrorMessage(
//           "An error occurred while submitting the form. Please try again."
//         );
//         console.error("Error submitting application:", error);
//       } finally {
//         setIsSubmitting(false);
//       }
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
//         className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
//       >
//         <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
//           <h1 className="text-3xl font-bold text-[#393939]">
//             Apply for {position}
//           </h1>
//           <button
//             onClick={onClose}
//             className="text-[#393939] hover:text-[#393939] transition-colors"
//           >
//             <FiX size={24} />
//           </button>
//         </div>

//         {showThankYou ? (
//           <Suspense fallback={<div>Loading...</div>}>
//             <ThankYouMessage onClose={onClose} />
//           </Suspense>
//         ) : (
//           <form onSubmit={handleSubmit} className="p-6">
//             <div className="flex justify-between mb-8">
//               {steps.map((step, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <div
//                     className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                       index + 1 <= currentStep
//                         ? "bg-[#fad000] text-[#03237b]"
//                         : "bg-gray-200 text-[#393939]"
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

//             {errorMessage && (
//               <div className="text-red-500 mb-4">{errorMessage}</div>
//             )}

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentStep}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {currentStep === 1 && (
//                   <Suspense fallback={<div>Loading...</div>}>
//                     <PersonalDetails
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />
//                   </Suspense>
//                 )}
//                 {currentStep === 2 && (
//                   <Suspense fallback={<div>Loading...</div>}>
//                     <ExperienceDetails
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                     />
//                   </Suspense>
//                 )}
//                 {currentStep === 3 && (
//                   <Suspense fallback={<div>Loading...</div>}>
//                     <FinalDetails
//                       formData={formData}
//                       handleInputChange={handleInputChange}
//                       handleFileChange={handleFileChange}
//                     />
//                   </Suspense>
//                 )}
//               </motion.div>
//             </AnimatePresence>

//             <div className="mt-8 flex justify-between">
//               {currentStep > 1 && (
//                 <button
//                   type="button"
//                   onClick={() => setCurrentStep((prev) => prev - 1)}
//                   className="px-7 py-3 text-[--secound] font-bold bg-[--black] text-base rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--secound] hover:text-[--black] whitespace-nowrap"
//                 >
//                   Back
//                 </button>
//               )}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`px-7 py-3 text-[--black] font-bold bg-[--secound] text-base rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap ${
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
import React, { useState, Suspense, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiBriefcase, FiFileText, FiX } from "react-icons/fi";
const PersonalDetails = React.lazy(
  () => import("../ApplicationForm/PersonalDetails")
);
const ExperienceDetails = React.lazy(
  () => import("../ApplicationForm/ExperienceDetails")
);
const FinalDetails = React.lazy(
  () => import("../ApplicationForm/FinalDetails")
);
const ThankYouMessage = React.lazy(() => import("./ThankYouPopup"));
import axios from "axios";
import { BASE_URL } from "../../pages/Service/Api/Api";

// Updated FormData to allow resume to be null
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
  resume: File | null; // Resume can be null or a file
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
  resume: null, // Initially set to null
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
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    setFormData((prev) => ({ ...prev, position, jobType }));
  }, [position, jobType]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, resume: file }));
    } else {
      setErrorMessage("File size should not exceed 5MB");
    }
  };

  const handleFileRemove = () => {
    setFormData((prev) => ({ ...prev, resume: null })); // Setting resume to null
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
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.data.status === "success") {
          setShowThankYou(true);
        } else {
          setErrorMessage("Failed to submit application. Please try again.");
        }
      } catch (error) {
        setErrorMessage(
          "An error occurred while submitting the form. Please try again."
        );
        console.error("Error submitting application:", error);
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
          <h1 className="text-3xl font-bold text-[#393939]">
            Apply for {position}
          </h1>
          <button
            onClick={onClose}
            className="text-[#393939] hover:text-[#393939] transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {showThankYou ? (
          <Suspense fallback={<div>Loading...</div>}>
            <ThankYouMessage onClose={onClose} />
          </Suspense>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index + 1 <= currentStep
                        ? "bg-[#fad000] text-[#03237b]"
                        : "bg-gray-200 text-[#393939]"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span className="mt-2 text-sm font-medium text-[#393939]">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            {errorMessage && (
              <div className="text-red-500 mb-4">{errorMessage}</div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 1 && (
                  <Suspense fallback={<div>Loading...</div>}>
                    <PersonalDetails
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                  </Suspense>
                )}
                {currentStep === 2 && (
                  <Suspense fallback={<div>Loading...</div>}>
                    <ExperienceDetails
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                  </Suspense>
                )}
                {currentStep === 3 && (
                  <Suspense fallback={<div>Loading...</div>}>
                    <FinalDetails
                      formData={formData}
                      handleInputChange={handleInputChange}
                      handleFileChange={handleFileChange}
                      handleFileRemove={handleFileRemove} // Pass the function here
                    />
                  </Suspense>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                  className="px-7 py-3 text-[--secound] font-bold bg-[--black] text-base rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--secound] hover:text-[--black] whitespace-nowrap"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-7 py-3 text-[--black] font-bold bg-[--secound] text-base rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap ${
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
