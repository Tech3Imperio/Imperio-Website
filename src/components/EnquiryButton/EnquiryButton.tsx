import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMessageSquare } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "../../pages/Service/Api/Api";
import { useLocation } from "react-router-dom";
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

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
    address: "",
  });
  const useIsHomePage = () => {
    const location = useLocation();
    console.log(location.pathname);
    return location.pathname === "/";
  };
  const isHomePage = useIsHomePage();

  useEffect(() => {
    const openFormTimer = setTimeout(() => {
      console.log(isHomePage);
      if (isHomePage) {
        setIsOpen(true);
      }
    }, 20000);

    const savedFormState = localStorage.getItem("formOpen");
    if (savedFormState === "true") {
      setIsOpen(true);
    }

    return () => clearTimeout(openFormTimer);
  }, [isHomePage]);

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

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
      formData.email
    );
    const isValidPhoneNumber = /^[0-9]{10}$/.test(formData.phoneNumber);

    let emailError = "";
    let phoneError = "";
    let addressError = "";

    if (!isValidEmail) {
      emailError = "Please enter a valid email address.";
    }

    if (!isValidPhoneNumber) {
      phoneError = "Please enter a valid phone number.";
    }

    if (!formData.city || !formData.state || !formData.location) {
      addressError = "Could not fetch address details based on the pin code.";
    }

    if (emailError || phoneError || addressError) {
      setErrors({
        email: emailError,
        phoneNumber: phoneError,
        address: addressError,
      });
      setIsSubmitting(false);
      return;
    }

    // Clear errors if validation is successful
    setErrors({
      email: "",
      phoneNumber: "",
      address: "",
    });

    try {
      const response = await axios.post(`${BASE_URL}/enquiry`, formData, {
        headers: { "Content-Type": "application/json" },
      });

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
        aria-label="Contact button"
        className="fixed top-[55%] w-12 py-11 text-[--black] font-bold  -left-1 transform -translate-y-1/2  bg-[--secound] transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] text-center flex items-center justify-center rounded-4xl z-50 whitespace-nowrap"
      >
        <span className="transform -rotate-90 text-[14px]">Contact now</span>
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
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-60"
                onClick={handleCloseForm}
                aria-label="Close Form"
              >
                <FiX size={28} />
              </button>

              {showThankYou ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-black-600 relative"
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
                    Thank you, our team will get in touch with you !!
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 overflow-y-auto max-h-[60vh]  md:max-h-[90vh]"
                >
                  <h2 className="flex justify-center items-center  text-blue-800 text-2xl font-bold">
                    Get Special Offer
                  </h2>
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
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">
                          {errors.phoneNumber}
                        </p>
                      )}
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

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-600"
                    >
                      Email Address
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
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 text-white py-3 rounded-l hover:bg-yellow-300 transition duration-300"
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
