// import { useState } from "react";
// import { loginHomeImg } from "../../../assets/Images";
// import { motion } from "framer-motion";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { BASE_URL } from "../../Service/Api/Api";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// interface DealerState {
//   username: string;
//   phone: string;
//   gst: string;
//   email: string;
//   password: string;
// }

// export default function DealerRegistration() {
//   const [dealer, setDealer] = useState<DealerState>({
//     username: "",
//     phone: "",
//     gst: "",
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoader, setIsLoader] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setDealer({
//       ...dealer,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setIsLoader(true); // Show the loader while submitting the form

//     try {
//       const response = await axios.post(
//         `${BASE_URL}/product/dealerregistration`, // API endpoint for registration
//         dealer,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log(response);

//       if (response.status >= 200 && response.status < 300) {
//         alert("Registration successful!");

//         // Reset form data
//         setDealer({
//           username: "",
//           phone: "",
//           gst: "",
//           email: "",
//           password: "",
//         });

//         // Redirect to the login page after successful registration
//         navigate("/dealer-login"); // Adjust the route if needed
//       } else {
//         alert("Error during registration. Please try again.");
//       }
//     } catch (error) {
//       // Handle errors
//       if (axios.isAxiosError(error)) {
//         console.error("Axios Error:", error.message);
//         alert(`An unexpected error occurred: ${error.message}`);
//       } else if (error instanceof Error) {
//         console.error("Error:", error.message);
//         alert(`An unexpected error occurred: ${error.message}`);
//       } else {
//         console.error("Unexpected Error:", error);
//         alert("An unexpected error occurred. Please try again.");
//       }
//     } finally {
//       setIsLoader(false); // Hide the loader once the submission is done
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
//       <main className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-[75rem]">
//         <div className="flex flex-col lg:flex-row">
//           {/* Image Section */}
//           <motion.div
//             className="relative w-full lg:w-1/2 flex justify-center items-center"
//             initial={{ x: "-100vw" }}
//             animate={{ x: 0 }}
//             transition={{ type: "spring", stiffness: 30 }}
//           >
//             <img
//               src={loginHomeImg}
//               alt="Dealer Registration"
//               className="h-[35rem] max-w-xs lg:max-w-[35rem]"
//             />
//           </motion.div>

//           {/* Form Section */}
//           <motion.div
//             className="w-full lg:w-1/2 p-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <h2 className="Title">Dealer Registration</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Username <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={dealer.username}
//                   onChange={handleInput}
//                   placeholder="Enter your username"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Phone <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   id="phone"
//                   name="phone"
//                   value={dealer.phone}
//                   onChange={handleInput}
//                   placeholder="Enter your phone number"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="gst"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   GST Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="gst"
//                   name="gst"
//                   value={dealer.gst}
//                   onChange={handleInput}
//                   placeholder="Enter your GST number"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={dealer.email}
//                   onChange={handleInput}
//                   placeholder="Enter your email"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     name="password"
//                     value={dealer.password}
//                     onChange={handleInput}
//                     placeholder="Enter your password"
//                     required
//                     className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute right-3 top-5 text-gray-600 focus:outline-none"
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="px-8 py-4 text-[--black] font-bold bg-[--secound] rounded-4xl transition-700 cursor-pointer border border-[--secound]  hover:bg-[--black] hover:text-[--secound]"
//                 disabled={isLoader}
//               >
//                 {isLoader ? "Submitting..." : "Register Now"}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </main>
//     </section>
//   );
// }

// import { useState } from "react";
// import { loginHomeImg } from "../../../assets/Images";
// import { motion } from "framer-motion";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { BASE_URL } from "../../Service/Api/Api";
// import { useNavigate } from "react-router-dom";
// import { ErrorPopup } from "../../../components";

// interface DealerState {
//   username: string;
//   phone: string;
//   gst: string;
//   email: string;
//   password: string;
// }

// export default function DealerRegistration() {
//   const [errorMessage, setErrorMessage] = useState<string>("");
//   const [showErrorPopup, setShowErrorPopup] = useState(false);
//   const [dealer, setDealer] = useState<DealerState>({
//     username: "",
//     phone: "",
//     gst: "",
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoader, setIsLoader] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   // Handle input change
//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setDealer({
//       ...dealer,
//       [name]: value,
//     });
//   };

//   // Password validation function
//   const validatePassword = (password: string) => {
//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,15}$/;

//     if (!passwordRegex.test(password)) {
//       return "Password must be between 6 to 15 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
//     }
//     return "";
//   };

//   // Phone number validation function (must be 10 digits)
//   const validatePhoneNumber = (phone: string) => {
//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(phone)) {
//       return "Phone number must be exactly 10 digits.";
//     }
//     return "";
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Validate the password
//     const passwordError = validatePassword(dealer.password);
//     if (passwordError) {
//       setErrorMessage(passwordError);
//       return; // Stop form submission if password is invalid
//     }

//     // Validate the phone number
//     const phoneError = validatePhoneNumber(dealer.phone);
//     if (phoneError) {
//       setErrorMessage(phoneError);
//       return; // Stop form submission if phone number is invalid
//     }

//     setIsLoader(true); // Show the loader while submitting the form

//     try {
//       const response = await axios.post(
//         `${BASE_URL}/product/dealerregistration`, // API endpoint for registration
//         dealer,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log(response);

//       if (response.status >= 200 && response.status < 300) {
//         // Reset form data
//         setDealer({
//           username: "",
//           phone: "",
//           gst: "",
//           email: "",
//           password: "",
//         });

//         navigate(`dealer-message/${dealer.username}`);
//       } else {
//         alert("Error during registration. Please try again.");
//       }
//     } catch (error) {
//       // Handle errors
//       if (axios.isAxiosError(error)) {
//         const errorResponse = error.response?.data;
//         console.log(errorResponse);

//         if (errorResponse.message === "Email already exists") {
//           setErrorMessage("Email already exists");
//           setShowErrorPopup(true);
//         } else if (errorResponse.message === "Phone number already exists") {
//           setErrorMessage("Phone number already exists");
//           setShowErrorPopup(true);
//         }
//       } else if (error instanceof Error) {
//         console.error("Error:", error.message);
//         setErrorMessage(`An unexpected error occurred: ${error.message}`);
//         setShowErrorPopup(true);
//       } else {
//         console.error("Unexpected Error:", error);
//         setErrorMessage("An unexpected error occurred. Please try again.");
//         setShowErrorPopup(true);
//       }
//     } finally {
//       setIsLoader(false);
//     }
//   };

//   const closeErrorPopup = () => {
//     setShowErrorPopup(false);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
//       <main className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-[75rem]">
//         <div className="flex flex-col lg:flex-row">
//           {/* Image Section */}
//           <motion.div
//             className="relative w-full lg:w-1/2 flex justify-center items-center"
//             initial={{ x: "-100vw" }}
//             animate={{ x: 0 }}
//             transition={{ type: "spring", stiffness: 30 }}
//           >
//             <img
//               src={loginHomeImg}
//               alt="Dealer Registration"
//               className="h-[35rem] max-w-xs lg:max-w-[35rem]"
//             />
//           </motion.div>

//           {/* Form Section */}
//           <motion.div
//             className="w-full lg:w-1/2 p-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <h2 className="Title">Dealer Registration</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Username <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={dealer.username}
//                   onChange={handleInput}
//                   placeholder="Enter your username"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Phone <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   id="phone"
//                   name="phone"
//                   value={dealer.phone}
//                   onChange={handleInput}
//                   placeholder="Enter your phone number"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="gst"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   GST Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="gst"
//                   name="gst"
//                   value={dealer.gst}
//                   onChange={handleInput}
//                   placeholder="Enter your GST number"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={dealer.email}
//                   onChange={handleInput}
//                   placeholder="Enter your email"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     name="password"
//                     value={dealer.password}
//                     onChange={handleInput}
//                     placeholder="Enter your password"
//                     required
//                     className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute right-3 top-5 text-gray-600 focus:outline-none"
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                   {showErrorPopup && (
//                     <ErrorPopup
//                       message={errorMessage}
//                       onClose={closeErrorPopup}
//                     />
//                   )}
//                 </div>
//               </div>
//               {errorMessage && (
//                 <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
//               )}

//               <button
//                 type="submit"
//                 className="px-8 py-4 text-[--black] font-bold bg-[--secound] rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound]"
//                 disabled={isLoader}
//               >
//                 {isLoader ? "Submitting..." : "Register Now"}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </main>
//     </section>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaLock,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../../Service/Api/Api";
import { useNavigate } from "react-router-dom";
import { ErrorPopup } from "../../../components";
import { whiteLogo } from "../../../assets/Images";

interface DealerState {
  username: string;
  phone: string;
  gst: string;
  email: string;
  password: string;
}

export default function DealerRegistration() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [dealer, setDealer] = useState<DealerState>({
    username: "",
    phone: "",
    gst: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDealer({ ...dealer, [name]: value });
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,15}$/;
    return passwordRegex.test(password)
      ? ""
      : "Password must be 6-15 characters long, include uppercase, lowercase, number, and special character.";
  };

  const validatePhoneNumber = (phone: string) => {
    return /^[0-9]{10}$/.test(phone)
      ? ""
      : "Phone number must be exactly 10 digits.";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const passwordError = validatePassword(dealer.password);
    const phoneError = validatePhoneNumber(dealer.phone);

    if (passwordError || phoneError) {
      setErrorMessage(passwordError || phoneError);
      return;
    }

    setIsLoader(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/product/dealerregistration`,
        dealer,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setDealer({
          username: "",
          phone: "",
          gst: "",
          email: "",
          password: "",
        });
        navigate(`dealer-message/${dealer.username}`);
      } else {
        throw new Error("Error during registration. Please try again.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorResponse = error.response?.data;
        setErrorMessage(
          errorResponse.message === "Email already exists"
            ? "Email already exists"
            : errorResponse.message === "Phone number already exists"
            ? "Phone number already exists"
            : "An unexpected error occurred. Please try again."
        );
      } else if (error instanceof Error) {
        setErrorMessage(`An unexpected error occurred: ${error.message}`);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      setShowErrorPopup(true);
    } finally {
      setIsLoader(false);
    }
  };

  const closeErrorPopup = () => setShowErrorPopup(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <section className="min-h-screen  flex items-center justify-center px-4 py-12">
      <motion.main
        className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 bg-[--black] flex justify-center items-center p-12"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Join Imperio Store
              </h1>
              <p className="text-[#f5ce02] mb-8">
                Register as a dealer and start your journey with us
              </p>
              <img
                src={whiteLogo}
                alt="Imperio Store Logo"
                className="max-w-[200px] mx-auto"
              />
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="w-full md:w-1/2 p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#03237b] mb-8">
              Dealer Registration
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                icon={<FaUser />}
                type="text"
                id="username"
                name="username"
                value={dealer.username}
                onChange={handleInput}
                placeholder="Enter your username"
                required
              />
              <InputField
                icon={<FaPhone />}
                type="tel"
                id="phone"
                name="phone"
                value={dealer.phone}
                onChange={handleInput}
                placeholder="Enter your phone number"
                required
              />
              <InputField
                icon={<FaFileInvoiceDollar />}
                type="text"
                id="gst"
                name="gst"
                value={dealer.gst}
                onChange={handleInput}
                placeholder="Enter your GST number"
                required
              />
              <InputField
                icon={<FaEnvelope />}
                type="email"
                id="email"
                name="email"
                value={dealer.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required
              />
              <div className="relative">
                <InputField
                  icon={<FaLock />}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={dealer.password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errorMessage && (
                <motion.div
                  className="text-red-500 text-sm mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {errorMessage}
                </motion.div>
              )}
              <motion.button
                type="submit"
                className="px-8 py-4 w-full text-[--black] font-bold bg-[--secound] rounded-4xl transition-700 cursor-pointer border border-[--secound]  hover:bg-[--black] hover:text-[--secound]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoader}
              >
                {isLoader ? (
                  <motion.div
                    className="h-5 w-5 border-t-2 border-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ) : (
                  "Register Now"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.main>
      {showErrorPopup && (
        <ErrorPopup message={errorMessage} onClose={closeErrorPopup} />
      )}
    </section>
  );
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ icon, ...props }) => (
  <div className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      {icon}
    </span>
    <input
      {...props}
      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg "
    />
  </div>
);
