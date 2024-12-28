import React from "react";
import { FormData } from "./ApplicationForm";

interface ExperienceDetailsProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ExperienceDetails({
  formData,
  handleInputChange,
}: ExperienceDetailsProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Experience Details</h2>
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Company Name (Optional)
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="designation"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Designation (Optional)
        </label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="experienceYears"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Experience (in years)
        </label>
        <input
          type="number"
          id="experienceYears"
          name="experienceYears"
          value={formData.experienceYears}
          onChange={handleInputChange}
          required
          min="0"
          step="0.1"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
