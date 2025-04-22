import { motion } from "framer-motion";
import { FormData } from "./ApplicationForm";

interface PersonalDetailsProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function PersonalDetails({
  formData,
  handleInputChange,
}: PersonalDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-[#393939]">
        Personal Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#393939] mb-1"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-[#fad000]"
          />
        </div>
        <div>
          <label
            htmlFor="surname"
            className="block text-sm font-medium text-[#393939] mb-1"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-[#fad000]"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#393939] mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-[#fad000]"
          />
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-[#393939] mb-1"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-[#fad000]"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-[#393939] mb-1"
          >
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-[#fad000]"
          />
        </div>
      </div>
    </motion.div>
  );
}
export default PersonalDetails;
