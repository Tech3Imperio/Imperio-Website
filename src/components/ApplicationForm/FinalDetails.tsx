import React from "react";
import { FormData } from "./ApplicationForm";

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
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Final Details</h2>
      <div>
        <label
          htmlFor="coverLetter"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Cover Letter (Optional)
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="resume"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Resume (PDF or DOC, max 2MB)
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
