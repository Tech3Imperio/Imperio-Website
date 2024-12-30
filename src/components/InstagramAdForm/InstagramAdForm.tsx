import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaCogs, FaBuilding } from "react-icons/fa";

type FormData = {
  name: string;
  contactNo: string;
  source: string;
};

const InstagramAdForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contactNo: "",
    source: "Instagram",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Opens the modal when the component mounts
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsOpen(false); // Close the modal after form submission
  };

  return (
    <>
      {/* Form Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-50"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#03237b]">
                Enquiry Details
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#393939]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="contactNo"
                  className="block text-sm font-medium text-[#393939]"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="source"
                  className="block text-sm font-medium text-[#393939]"
                >
                  Source
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  readOnly
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-4 text-[--black] font-bold bg-[--secound] text-xl w-full rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Glass Railing Sections */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-12">
          Discover Our Elegant Glass Railing Solutions
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Section 1: Premium Glass Railing Designs */}
          <div className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <FaRegLightbulb className="text-indigo-600 text-4xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Premium Glass Railing Designs
              </h2>
              <p className="text-gray-600 text-lg">
                Elevate your home with our stylish glass railings, designed to
                provide safety without compromising on elegance. Perfect for
                balconies, stairs, and decks, offering both clear views and
                strong protection.
              </p>
            </div>
          </div>

          {/* Section 2: Tailored Custom Glass Railings */}
          <div className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <FaCogs className="text-green-500 text-4xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Tailored Custom Glass Railings
              </h2>
              <p className="text-gray-600 text-lg">
                Our custom solutions allow you to design the perfect glass
                railing for your space. Whether frameless or framed, we cater to
                your exact needs with high-quality craftsmanship and attention
                to detail.
              </p>
            </div>
          </div>

          {/* Section 3: Glass Railing Solutions for Commercial Spaces */}
          <div className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <FaBuilding className="text-gray-800 text-4xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Glass Railing Solutions for Commercial Spaces
              </h2>
              <p className="text-gray-600 text-lg">
                Our glass railings are ideal for commercial properties,
                including office buildings and malls, offering a sleek, modern
                design while meeting high safety standards. Enhance your space
                with a functional yet stylish solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramAdForm;
