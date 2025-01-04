import React from "react";
import { motion } from "framer-motion";
import { FormData } from "./ApplicationForm";

interface ExperienceDetailsProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

function ExperienceDetails({
  formData,
  handleInputChange,
}: ExperienceDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-[#393939]">
        Experience Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-[#393939] mb-1"
          >
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
          />
        </div>
        <div>
          <label
            htmlFor="designation"
            className="block text-sm font-medium text-[#393939] mb-1"
          >
            Designation (Optional)
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
          />
        </div>
        <div>
          <label
            htmlFor="experienceYears"
            className="block text-sm font-medium text-[#393939] mb-1"
          >
            Years of Experience
          </label>
          <input
            type="number"
            id="experienceYears"
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
          />
        </div>
        <div>
          <label
            htmlFor="highestQualification"
            className="block text-sm font-medium text-[#393939] mb-1"
          >
            Qualification
          </label>
          <select
            id="highestQualification"
            name="highestQualification"
            value={formData.highestQualification}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
          >
            <option value="">Select Qualification</option>
            <option value="10th pass">10th pass</option>
            <option value="12th pass">12th pass</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Masters</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="skills"
          className="block text-sm font-medium text-[#393939] mb-1"
        >
          Skills
        </label>
        <textarea
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fad000]"
        ></textarea>
      </div>
    </motion.div>
  );
}
export default ExperienceDetails;
