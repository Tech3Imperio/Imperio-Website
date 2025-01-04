import { motion } from "framer-motion";
import { FormData } from "./ApplicationForm";
import { FiUpload } from "react-icons/fi";

interface FinalDetailsProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FinalDetails({
  formData,
  handleInputChange,
  handleFileChange,
}: FinalDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-[#393939]">
        Final Details
      </h2>
      <div className="mb-6">
        <label
          htmlFor="portfolioLink"
          className="block text-sm font-medium text-[#393939] mb-1"
        >
          Portfolio Link (Optional)
        </label>
        <input
          type="url"
          id="portfolioLink"
          name="portfolioLink"
          value={formData.portfolioLink}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="coverLetter"
          className="block text-sm font-medium text-[#393939] mb-1"
        >
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-[#393939] mb-1"
        >
          Resume
        </label>
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
      </div>
    </motion.div>
  );
}
