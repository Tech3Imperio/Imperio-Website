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
              <p className="text-[#fad000] mb-8">
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
