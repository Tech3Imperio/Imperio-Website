import type React from "react";
import { useState } from "react";

interface FormData {
  "Installation Area": string;
  "Use Case": string;
  "Design Preference": string;
  "Safety Features": string;
  Budget: string;
  "Avg Adult Height Range": string;
  "Privacy Level": string;
  "Exposed to Corrosion?": string;
}

interface RecommendationFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    "Installation Area": "",
    "Use Case": "",
    "Design Preference": "",
    "Safety Features": "",
    Budget: "",
    "Avg Adult Height Range": "",
    "Privacy Level": "",
    "Exposed to Corrosion?": "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="installationArea"
          className="block text-sm font-medium text-gray-700"
        >
          Installation Area
        </label>
        <select
          id="installationArea"
          name="Installation Area"
          value={formData["Installation Area"]}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        >
          <option value="">Select...</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Indoor">Indoor</option>
        </select>
      </div>

      {/* Other form fields with handleChange applied */}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-none shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Get Recommendation
      </button>
    </form>
  );
};

export default RecommendationForm;
