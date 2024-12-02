// import { useState } from "react";
// import { loginHomeImg } from "../../../assets/Images";
// import { motion } from "framer-motion";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { BASE_URL } from "../../Service/Api/Api";

// interface DealerState {
//   email: string;
//   password: string;
// }

// export default function DealerLogin() {
//   const [dealer, setDealer] = useState<DealerState>({
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setDealer({
//       ...dealer,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // console.log(dealer);
//     try {
//       const response = await axios.post(
//         `${BASE_URL}/dealerlogin`, // Use the relative path for the proxy
//         dealer,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response);

//       if (response.status >= 200 && response.status < 300) {
//         alert("Data submitted successfully!");

//         // Reset form data
//         setDealer({
//           email: "",
//           password: "",
//         });
//       } else {
//         alert("Error sending data. Please try again.");
//       }
//     } catch (error) {
//       // Type guard to handle error safely
//       if (axios.isAxiosError(error)) {
//         console.error("Axios Error:", error.message);
//         alert(`An unexpected error occurred: ${error.message}`);
//       } else if (error instanceof Error) {
//         // Error is an instance of Error
//         console.error("Error:", error.message);
//         alert(`An unexpected error occurred: ${error.message}`);
//       } else {
//         // Handle unexpected error types
//         console.error("Unexpected Error:", error);
//         alert("An unexpected error occurred. Please try again.");
//       }
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
//             className="relative w-full lg:w-1/2  flex justify-center items-center"
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
//             animate={{ opacity: 10 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <h2 className="Title">Welcome To Imperio Store</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
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
//                     {showPassword ? <FaEye /> : <FaEyeSlash />}
//                   </button>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//               >
//                 Login
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </main>
//     </section>
//   );
// }

import { useState } from "react";
import { loginHomeImg } from "../../../assets/Images";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../../Service/Api/Api";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { ErrorPopup } from "../../../components";

interface DealerState {
  phone: string;
  password: string;
}

export default function DealerLogin() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [dealer, setDealer] = useState<DealerState>({
    phone: "",
    password: "",
  });
  const [isLoader, setIsLoader] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDealer({
      ...dealer,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoader(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/product/dealerlogin`,
        dealer,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data.token);

      localStorage.setItem("token", response.data.token);

      if (response.status >= 200 && response.status < 300) {
        // alert("Login successful!");

        setDealer({
          phone: "",
          password: "",
        });

        navigate("/home");
      } else {
        alert("Error logging in. Please try again.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.message);
        setErrorMessage("Please check your credentials.");
        setShowErrorPopup(true);
      } else {
        setErrorMessage("An unexpected error occurred.");
        setShowErrorPopup(true);
      }
    } finally {
      setIsLoader(false);
    }
  };
  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <main className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-[75rem]">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center items-center"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            <img
              src={loginHomeImg}
              alt="Dealer Registration"
              className="h-[35rem] max-w-xs lg:max-w-[35rem]"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="w-full lg:w-1/2 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="Title">Welcome To Imperio Store</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={dealer.phone}
                  onChange={handleInput}
                  placeholder="Enter your Register Phone No"
                  required
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={dealer.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-5 text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                  {showErrorPopup && (
                    <ErrorPopup
                      message={errorMessage}
                      onClose={closeErrorPopup}
                    />
                  )}
                </div>
              </div>
              <div className=" flex justify-center p-4">
                <button
                  type="submit"
                  className="px-12 py-3 text-[--black] font-bold bg-[--secound] rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound]"
                  disabled={isLoader}
                >
                  {isLoader ? "Loging..." : "Log In"}
                </button>
              </div>
              <Link
                to="/dealer-registration"
                className="flex items-center justify-center text-[#03237b] text-lg font-semibold hover:[#03237b] hover:underline transition-all duration-300"
              >
                <FaUserPlus className="mr-2" /> New Dealer Registration!
              </Link>
            </form>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
