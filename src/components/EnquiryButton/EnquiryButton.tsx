import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMessageSquare } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "../../pages/Service/Api/Api";

// Function to fetch address details based on the pin code
const fetchAddressDetails = async (pinCode: string) => {
  try {
    const response = await fetch(
      `https://api.postalpincode.in/pincode/${pinCode}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data[0].Status === "Success" && data[0].PostOffice.length > 0) {
      const address = data[0].PostOffice[0];
      return {
        city: address.District,
        state: address.State,
        location: address.Name,
      };
    } else {
      return {
        city: "",
        state: "",
        location: "",
      };
    }
  } catch (error) {
    console.error("Error fetching address details:", error);
    return {
      city: "",
      state: "",
      location: "",
    };
  }
};

const EnquiryButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    source: "Website",
    pinCode: "",
    city: "",
    state: "",
    location: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const openFormTimer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    const savedFormState = localStorage.getItem("formOpen");
    if (savedFormState === "true") {
      setIsOpen(true);
    }

    return () => clearTimeout(openFormTimer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePinCodeChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const pinCode = e.target.value;
    setFormData((prevData) => ({ ...prevData, pinCode }));

    if (pinCode.length === 6) {
      const address = await fetchAddressDetails(pinCode);
      setFormData((prevData) => ({
        ...prevData,
        city: address.city,
        state: address.state,
        location: address.location,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple validation
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
      formData.email
    );
    const isValidPhoneNumber = /^[0-9]{10}$/.test(formData.phoneNumber);

    if (!isValidEmail || !isValidPhoneNumber) {
      alert("Please enter a valid email or phone number.");
      return;
    }

    // Check if the address is correctly populated (especially if the pin code is valid)
    if (!formData.city || !formData.state || !formData.location) {
      alert("Could not fetch address details based on the pin code.");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/enquiry`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      // console.log("Form data successfully submitted to MongoDB", response.data);

      // Check if the response contains a success message
      if (
        response.data &&
        (response.data.message === "Dealer inquiry submitted successfully." ||
          response.data.result === "success")
      ) {
        setShowThankYou(true);
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          source: "Website",
          pinCode: "",
          city: "",
          state: "",
          location: "",
        });
      } else {
        // If the response doesn't indicate success, throw an error
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("There was an error submitting your form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenForm = () => {
    setIsOpen(true);
    localStorage.setItem("formOpen", "true");
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setShowThankYou(false);
    localStorage.setItem("formOpen", "false");
  };

  return (
    <>
      {/* Enquiry Button (Vertical, Left-Side) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={handleOpenForm}
        className="fixed top-1/2 w-12 py-12 text-[--black] font-bold  left-0 transform -translate-y-1/2  bg-[--secound] transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] text-center flex items-center justify-center rounded-4xl z-50 whitespace-nowrap"
      >
        <span className="transform -rotate-90">Contact now</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white max-w-4xl mx-4 p-6 rounded-lg shadow-lg drop-shadow-xl relative"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-60"
                onClick={handleCloseForm}
                aria-label="Close Form"
              >
                <FiX size={28} />
              </button>

              <h2 className="text-3xl font-bold mb-6 text-center text-[#03237b]">
                Contact Form
              </h2>

              {showThankYou ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-600 relative"
                >
                  <button
                    className="absolute top-0 right-0 text-gray-600 hover:text-gray-800"
                    onClick={handleCloseForm}
                    aria-label="Close Thank You Message"
                  >
                    {/* <FiX size={24} /> */}
                  </button>
                  <FiMessageSquare size={48} className="mx-auto mb-4" />
                  <p className="text-xl font-semibold">
                    Thank you for your enquiry!
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 overflow-y-auto max-h-[60vh]  md:max-h-[90vh]"
                >
                  <div className="grid grid-cols-2 lg:grid-cols-2 gap-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="mt-2 block w-full border rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50 p-3"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className="mt-2 block w-full border rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50 p-3"
                      />
                    </div>
                  </div>

                  {/* Pin Code Field */}
                  <div>
                    <label
                      htmlFor="pinCode"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handlePinCodeChange}
                      maxLength={6}
                      required
                      className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50 p-3"
                    />
                  </div>
                  {/* City, State, Location (Only Show if Pin Code is Provided) */}
                  {formData.city && formData.state && formData.location && (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-600"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          disabled
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50 p-3 bg-gray-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-600"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          disabled
                          className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50 p-3 bg-gray-200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          disabled
                          className="mt-2 block w-full rounded-md  border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50 p-3 bg-gray-200"
                        />
                      </div>
                    </div>
                  )}

                  {/* Email */}
                  <div className=" grid grid-cols-2 gap-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600  mt-[20px] md:mt-0"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 block w-full border rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50 p-3"
                      />
                    </div>

                    {/* Source */}
                    <div>
                      <label
                        htmlFor="source"
                        className="block text-sm font-medium text-gray-600"
                      >
                        How did you find out about us?
                      </label>
                      <select
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleInputChange}
                        required
                        className="mt-2 block w-full border rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50 p-3"
                      >
                        <option value="Website">Website</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Google">Google</option>
                        <option value="Walk-in">Walk-in</option>
                        <option value="Advertisement">Advertisement</option>
                        <option value="Existing Customer">
                          Existing Customer
                        </option>
                        <option value="Friends">Friends</option>
                        <option value="Event/Conference">
                          Event/Conference
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 w-full py-4 text-[--black] font-bold bg-[--secound] text-xl rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnquiryButton;
