// import { motion } from "framer-motion";
// import { FormData } from "./ApplicationForm";
// import { FiUpload } from "react-icons/fi";

// interface FinalDetailsProps {
//   formData: FormData;
//   handleInputChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
//   handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// function FinalDetails({
//   formData,
//   handleInputChange,
//   handleFileChange,
// }: FinalDetailsProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <h2 className="text-2xl font-semibold mb-6 text-[#393939]">
//         Final Details
//       </h2>
//       <div className="mb-6">
//         <label
//           htmlFor="portfolioLink"
//           className="block text-sm font-medium text-[#393939] mb-1"
//         >
//           Portfolio Link (Optional)
//         </label>
//         <input
//           type="url"
//           id="portfolioLink"
//           name="portfolioLink"
//           value={formData.portfolioLink}
//           onChange={handleInputChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
//         />
//       </div>
//       <div className="mb-6">
//         <label
//           htmlFor="coverLetter"
//           className="block text-sm font-medium text-[#393939] mb-1"
//         >
//           Cover Letter
//         </label>
//         <textarea
//           id="coverLetter"
//           name="coverLetter"
//           value={formData.coverLetter}
//           onChange={handleInputChange}
//           rows={5}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
//         ></textarea>
//       </div>
//       <div className="mb-6">
//         <label
//           htmlFor="resume"
//           className="block text-sm font-medium text-[#393939] mb-1"
//         >
//           Resume
//         </label>
//         <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//           <div className="space-y-1 text-center">
//             <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
//             <div className="flex text-sm text-[#393939]">
//               <label
//                 htmlFor="resume"
//                 className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
//               >
//                 <span>Upload a file</span>
//                 <input
//                   id="resume"
//                   name="resume"
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleFileChange}
//                   className="sr-only"
//                 />
//               </label>
//               <p className="pl-1">or drag and drop</p>
//             </div>
//             <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
// export default FinalDetails;
// import { motion } from "framer-motion";
// import { FormData } from "./ApplicationForm";
// import { FiUpload, FiX } from "react-icons/fi";

// interface FinalDetailsProps {
//   formData: FormData;
//   handleInputChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
//   handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// function FinalDetails({
//   formData,
//   handleInputChange,
//   handleFileChange,
// }: FinalDetailsProps) {
//   const handleFileRemove = () => {
//     handleInputChange({ target: { name: "resume", value: null } });
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <h2 className="text-2xl font-semibold mb-6 text-[#393939]">
//         Final Details
//       </h2>
//       <div className="mb-6">
//         <label
//           htmlFor="portfolioLink"
//           className="block text-sm font-medium text-[#393939] mb-1"
//         >
//           Portfolio Link (Optional)
//         </label>
//         <input
//           type="url"
//           id="portfolioLink"
//           name="portfolioLink"
//           value={formData.portfolioLink}
//           onChange={handleInputChange}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
//         />
//       </div>
//       <div className="mb-6">
// <label
//   htmlFor="coverLetter"
//   className="block text-sm font-medium text-[#393939] mb-1"
// >
//   Cover Letter <span className="text-red-500">*</span>
// </label>
//         <textarea
//           id="coverLetter"
//           name="coverLetter"
//           value={formData.coverLetter}
//           onChange={handleInputChange}
//           rows={5}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
//         ></textarea>
//       </div>
//       <div className="mb-6">
//         <label
//           htmlFor="resume"
//           className="block text-sm font-medium text-[#393939] mb-1"
//         >
//           Resume <span className="text-red-500">*</span>
//         </label>
// <p className="text-sm text-[#393939] mb-2">
//   Note: Resume name should be without spaces, For example, use
//   firstname-lastname.pdf
// </p>
//         {formData.resume && (
// <div className="flex items-center justify-between mb-2 p-2 bg-gray-100 border border-gray-300 rounded-md">
//   <p className="text-sm text-[#393939]">{formData.resume.name}</p>
//   <FiX
//     className="cursor-pointer text-[#393939]"
//     size={20}
//     onClick={handleFileRemove}
//   />
// </div>
//         )}
//         <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//           <div className="space-y-1 text-center">
//             <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
//             <div className="flex text-sm text-[#393939]">
//               <label
//                 htmlFor="resume"
//                 className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
//               >
//                 <span>Upload a file</span>
//                 <input
//                   id="resume"
//                   name="resume"
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleFileChange}
//                   className="sr-only"
//                 />
//               </label>
//               <p className="pl-1">or drag and drop</p>
//             </div>
//             <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default FinalDetails;
import React from "react";
import { FormData } from "../ApplicationForm/ApplicationForm"; // Adjust the path if necessary
import { FiUpload, FiX } from "react-icons/fi";
export interface FinalDetailsProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileRemove: () => void;
}

const FinalDetails: React.FC<FinalDetailsProps> = ({
  formData,
  handleInputChange,
  handleFileChange,
  handleFileRemove,
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Final Details</h2>

      <div className="mb-6">
        <label
          htmlFor="coverLetter"
          className="block text-sm font-medium text-[#393939] mb-1"
        >
          Cover Letter <span className="text-red-500">*</span>
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleInputChange}
          rows={5}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="portfolioLink"
          className="block text-sm font-medium text-[#393939]"
        >
          Portfolio Link (Optional)
        </label>
        <input
          type="url"
          id="portfolioLink"
          name="portfolioLink"
          value={formData.portfolioLink}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-[#393939]"
        >
          Resume (PDF, DOC, DOCX) <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-[#393939] mb-2">
          Note: Resume name should be without spaces, For example, use
          firstname-lastname.pdf
        </p>
        {/* Resume file input or file display */}
        {formData.resume ? (
          <div className="flex items-center justify-between mb-2 p-2 bg-gray-100 border border-gray-300 rounded-md">
            <p className="text-sm text-[#393939]">{formData.resume.name}</p>
            <FiX
              className="cursor-pointer text-[#393939]"
              size={20}
              onClick={handleFileRemove}
            />
          </div>
        ) : (
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-[#393939]">
                <label
                  htmlFor="resume"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalDetails;
