"use client";

import { useState, type FormEvent, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Mail, CheckCircle, Loader2, Send } from "lucide-react";

interface UserData {
  name: string;
  phone: string;
  email: string;
  size: number;
}

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  size?: string;
  otp?: string;
}

interface UserFormProps {
  onSubmit: (userData: UserData) => void;
  isSubmitting: boolean;
  onBack: () => void;
}

const sendOTPToEmail = async (email: string): Promise<boolean> => {
  try {
    const res = await fetch(
      "https://backendimperio-5uku.onrender.com/api/send-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!res.ok) throw new Error("Failed to send OTP");
    return true;
  } catch (error) {
    console.error("Error sending OTP:", error);
    return false;
  }
};

const verifyOTP = async (email: string, otp: string): Promise<boolean> => {
  try {
    const res = await fetch(
      "https://backendimperio-5uku.onrender.com/api/verify-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          otp: otp,
        }),
      }
    );

    const data = await res.json();
    console.log("Verify OTP Response:", data);
    return res.ok && data.message === "OTP verified successfully";
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return false;
  }
};

const LoadingDistraction = ({ step }: { step: number }) => {
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    "💡 Check your spam folder if you don't see the email",
    "⏰ OTP codes are valid for 10 minutes",
    "🔒 We use secure encryption to protect your data",
    "📧 Make sure your email address is correct",
    "🚀 Almost there! Your quote will be ready soon",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-4">
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <Mail className="h-12 w-12 text-blue-500" />
          <div className="absolute -top-1 -right-1">
            <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
          </div>
        </div>
      </div>

      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          Sending OTP to your email...
        </h3>
        <div className="flex justify-center items-center space-x-2 mb-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 w-8 rounded-full transition-all duration-500 ${
                step >= i ? "bg-blue-500" : "bg-blue-200"
              }`}
            />
          ))}
        </div>
        <p className="text-blue-600 text-sm">
          This usually takes 10-30 seconds
        </p>
      </div>

      <div className="bg-white rounded-md p-3 border border-blue-100">
        <div className="flex items-start space-x-2">
          <div className="flex-shrink-0 mt-0.5">
            <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
          <p className="text-sm text-gray-700 transition-all duration-500">
            {tips[currentTip]}
          </p>
        </div>
      </div>
    </div>
  );
};

const UserForm = ({ onSubmit, isSubmitting, onBack }: UserFormProps) => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    size: 50,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [phone, setPhone] = useState("91");

  // OTP related states
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOTPSending, setIsOTPSending] = useState(false);
  const [isOTPVerifying, setIsOTPVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    setUserData({ ...userData, phone: `+${phone}` });
  }, [phone]);

  // Simulate loading progress
  useEffect(() => {
    if (isOTPSending) {
      setLoadingStep(0);
      const timer1 = setTimeout(() => setLoadingStep(1), 1000);
      const timer2 = setTimeout(() => setLoadingStep(2), 2000);
      const timer3 = setTimeout(() => setLoadingStep(3), 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isOTPSending]);

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!userData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!userData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(userData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number format";
    }

    if (!userData.email.trim()) {
      newErrors.email = "Email is required for verification";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(userData.email)) {
      newErrors.email = "Invalid email address";
    } else if (!isEmailVerified) {
      newErrors.email = "Email verification required";
    }

    if (!userData.size || userData.size <= 0) {
      newErrors.size = "Please enter a valid size";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const formattedUserData = {
        ...userData,
        email: userData.email.trim(),
      };

      onSubmit(formattedUserData);
    }
  };

  const handleSendOTP = async () => {
    if (!userData.email.trim()) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(userData.email)) {
      setErrors({ ...errors, email: "Invalid email address" });
      return;
    }

    setIsOTPSending(true);
    try {
      const success = await sendOTPToEmail(userData.email);
      if (success) {
        setOtpSent(true);
        setShowOTPInput(true);
        setErrors({ ...errors, email: undefined });
      }
    } catch (error) {
      setErrors({ ...errors, email: "Failed to send OTP. Please try again." });
    } finally {
      setIsOTPSending(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp.trim()) {
      setErrors({ ...errors, otp: "OTP is required" });
      return;
    }

    setIsOTPVerifying(true);
    try {
      const isValid = await verifyOTP(userData.email, otp);
      if (isValid) {
        setIsEmailVerified(true);
        setShowOTPInput(false);
        setErrors({ ...errors, otp: undefined });
      } else {
        setErrors({ ...errors, otp: "Invalid OTP. Please try again." });
      }
    } catch (error) {
      setErrors({ ...errors, otp: "Verification failed. Please try again." });
    } finally {
      setIsOTPVerifying(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Navigation Icons */}
      <div className="flex justify-between items-center mb-6">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setShowConfirmDialog(true)}
          disabled={isSubmitting}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors?.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your full name"
          />
          {errors?.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            enableSearch={true}
            autoFormat={true}
            inputStyle={{
              width: "100%",
              height: "42px",
              paddingLeft: "50px",
              fontSize: "16px",
              borderRadius: "6px",
              border: errors?.phone ? "1px solid #ef4444" : "1px solid #d1d5db",
              backgroundColor: "#fff",
            }}
            containerStyle={{ width: "100%" }}
            buttonStyle={{
              borderRadius: "6px 0 0 6px",
              borderRight: "1px solid #d1d5db",
            }}
          />
          {errors?.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
                if (isEmailVerified) {
                  setIsEmailVerified(false);
                }
              }}
              disabled={isEmailVerified}
              className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors?.email ? "border-red-500" : "border-gray-300"
              } ${isEmailVerified ? "bg-gray-50" : "bg-white"}`}
              placeholder="Enter your email"
            />
            <button
              type="button"
              onClick={handleSendOTP}
              disabled={isOTPSending || isEmailVerified}
              className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                isEmailVerified
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isEmailVerified ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Verified
                </>
              ) : isOTPSending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {otpSent ? "Resend" : "Send OTP"}
                </>
              )}
            </button>
          </div>
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Loading Distraction Component */}
        {isOTPSending && <LoadingDistraction step={loadingStep} />}

        {showOTPInput && !isEmailVerified && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter OTP
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").substring(0, 6))
                }
                placeholder="6-digit OTP"
                maxLength={6}
                className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors?.otp ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={handleVerifyOTP}
                disabled={isOTPVerifying || otp.length !== 6}
                className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isOTPVerifying ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify"
                )}
              </button>
            </div>
            {errors?.otp && (
              <p className="text-red-500 text-sm mt-1">{errors.otp}</p>
            )}
            <p className="text-gray-500 text-sm mt-2">
              {
                "Didn't receive the OTP? Check your spam folder or click 'Resend OTP'."
              }
            </p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity (Running Feet)
          </label>
          <input
            type="number"
            value={userData.size}
            onChange={(e) =>
              setUserData({
                ...userData,
                size: Number.parseFloat(e.target.value) || 0,
              })
            }
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors?.size ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter quantity in running feet"
          />
          {errors?.size && (
            <p className="text-red-500 text-sm mt-1">{errors.size}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isEmailVerified}
          className="w-full py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Get Quote on WhatsApp"
          )}
        </button>
      </form>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h3 className="text-lg font-semibold mb-2">
              Leave Quotation Maker
            </h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to leave the quotation maker?
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                No
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="flex-1 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
