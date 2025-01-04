import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaUserPlus, FaPhone, FaLock } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../../Service/Api/Api";
import { useNavigate, Link } from "react-router-dom";
const ErrorPopup = React.lazy(
  () => import("../../../components/ErrorPopupProps/ErrorPopupProps")
);
import { whiteLogo } from "../../../assets/Images";

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
    setDealer({ ...dealer, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoader(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/product/dealerlogin`,
        dealer,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("token", response.data.token);
      if (response.status >= 200 && response.status < 300) {
        setDealer({ phone: "", password: "" });
        navigate("/products");
      } else {
        throw new Error("Error logging in. Please try again.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error:", error.message);
        setErrorMessage("Please check your credentials.");
      } else {
        setErrorMessage("An unexpected error occurred.");
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
        className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-4xl"
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
                Welcome Back!
              </h1>
              <p className="text-[#fad000] mb-8">
                Log in to access your Imperio Store account
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
              Login to Your Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#03237b] mb-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaPhone />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={dealer.phone}
                    onChange={handleInput}
                    placeholder="Enter your registered phone number"
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#03237b] mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaLock />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={dealer.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg "
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
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
                  "Log In"
                )}
              </motion.button>
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/dealer-registration"
                  className="inline-flex items-center text-[#03237b] font-medium"
                >
                  <FaUserPlus className="mr-2" />
                  New Dealer? Register here
                </Link>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.main>
      {showErrorPopup && (
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorPopup message={errorMessage} onClose={closeErrorPopup} />
        </Suspense>
      )}
    </section>
  );
}
