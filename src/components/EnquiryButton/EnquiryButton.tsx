// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiX, FiMessageSquare } from "react-icons/fi";

// const EnquiryButton: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//     source: "",
//   });
//   const [showThankYou, setShowThankYou] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setShowThankYou(true);
//     setTimeout(() => {
//       setShowThankYou(false);
//       setIsOpen(false);
//       setFormData({ fullName: "", phoneNumber: "", email: "", source: "" });
//     }, 3000);
//   };

//   return (
//     <>
//       <motion.button
//         className="fixed left-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-r-md shadow-lg z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(true)}
//       >
//         <span className="transform -rotate-90 inline-block">Enquiry</span>
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: -300 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -300 }}
//             className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 p-6 overflow-y-auto"
//           >
//             <button
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//               onClick={() => setIsOpen(false)}
//             >
//               <FiX size={24} />
//             </button>

//             <h2 className="text-2xl font-bold mb-6 text-center">
//               Enquiry Form
//             </h2>

//             {showThankYou ? (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center text-green-600"
//               >
//                 <FiMessageSquare size={48} className="mx-auto mb-4" />
//                 <p className="text-xl font-semibold">
//                   Thank you for your enquiry!
//                 </p>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="fullName"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="phoneNumber"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="source"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Source
//                   </label>
//                   <select
//                     id="source"
//                     name="source"
//                     value={formData.source}
//                     onChange={handleInputChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                   >
//                     <option value="">Select a source</option>
//                     <option value="Instagram">Instagram</option>
//                     <option value="Facebook">Facebook</option>
//                     <option value="Google">Google</option>
//                   </select>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default EnquiryButton;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMessageSquare } from "react-icons/fi";
// import axios from "axios";

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
    console.log("Form submitted:", formData);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwNxer8GuQT83Orw9z-ghMpayTQ3y31ioHzhg7xJr6aqyAw3Rttm7o7paO6zvrf3SYv/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(
        "Form data successfully submitted to Google Apps Script",
        response
      );
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        setIsOpen(false);
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
      }, 3000);
    } catch (error) {
      console.error("Error submitting form data to Google Apps Script:", error);
    }
  };

  const handleOpenForm = () => {
    setIsOpen(true);
    localStorage.setItem("formOpen", "true");
  };

  const handleCloseForm = () => {
    setIsOpen(false);
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
                  className="text-center text-green-600"
                >
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
                    className="px-6 w-full py-4 text-[--black] font-bold bg-[--secound] text-xl rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap"
                  >
                    Submit
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
