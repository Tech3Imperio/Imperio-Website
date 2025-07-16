"use client";

import type React from "react";

import { useState, type FormEvent, useEffect, useCallback } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Mail, Loader2 } from "lucide-react";

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

// Optimized API calls with better error handling
const sendPhoneOTP = async (
  phoneNumber: string
): Promise<{ success: boolean; sessionId?: string; error?: string }> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 50000); // 30 second timeout

    const response = await fetch(
      "https://backendimperio-5uku.onrender.com/api/send-phone-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);
    const data = await response.json();

    if (response.ok && data.Status === "Success") {
      return { success: true, sessionId: data.Details };
    } else {
      return { success: false, error: data.Details || "Failed to send OTP" };
    }
  } catch (error) {
    console.error("Error sending phone OTP:", error);
    if (error instanceof Error && error.name === "AbortError") {
      return { success: false, error: "Request timeout. Please try again." };
    }
    return { success: false, error: "Network error occurred" };
  }
};

const verifyPhoneOTP = async (
  sessionId: string,
  otp: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(
      "https://backendimperio-5uku.onrender.com/api/verify-phone-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId, otp }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);
    const data = await response.json();

    if (response.ok && data.Status === "Success") {
      return { success: true };
    } else {
      return {
        success: false,
        error: data.Details || "Invalid OTP",
      };
    }
  } catch (error) {
    console.error("Error verifying phone OTP:", error);
    if (error instanceof Error && error.name === "AbortError") {
      return { success: false, error: "Request timeout. Please try again." };
    }
    return { success: false, error: "Verification failed" };
  }
};

// Optimized loading component with better UX
const LoadingDistraction = ({ step }: { step: number }) => {
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    "💡 Check your phone if you don't see the OTP",
    "⏰ OTP codes are valid for 10 minutes",
    "🔒 We use secure encryption to protect your data",
    "🚀 Almost there! Your quote will be ready soon",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [tips.length]);

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
          Sending OTP...
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

  // Phone OTP related states
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [showPhoneOTPInput, setShowPhoneOTPInput] = useState(false);
  const [phoneOtp, setPhoneOtp] = useState("");
  const [isPhoneOTPSending, setIsPhoneOTPSending] = useState(false);
  const [isPhoneOTPVerifying, setIsPhoneOTPVerifying] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [sessionId, setSessionId] = useState("");
  const [loadingStep, setLoadingStep] = useState(0);

  // Update userData when phone changes
  useEffect(() => {
    setUserData((prev) => ({ ...prev, phone: `+${phone}` }));
  }, [phone]);

  // Timer for OTP resend
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpTimer]);

  // Simulate loading progress
  useEffect(() => {
    if (isPhoneOTPSending) {
      setLoadingStep(0);
      const timer1 = setTimeout(() => setLoadingStep(1), 10000);
      const timer2 = setTimeout(() => setLoadingStep(2), 20000);
      const timer3 = setTimeout(() => setLoadingStep(3), 30000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isPhoneOTPSending]);

  // Optimized validation function
  const validateForm = useCallback((): boolean => {
    const newErrors: Errors = {};

    if (!userData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (userData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!userData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(userData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid phone number format";
    } else if (!isPhoneVerified) {
      newErrors.phone = "Phone number verification required";
    }

    if (!userData.email.trim()) {
      newErrors.email = "Email is required for verification";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(userData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!userData.size || userData.size <= 0) {
      newErrors.size = "Please enter a valid size";
    } else if (userData.size > 10000) {
      newErrors.size = "Size seems too large. Please verify.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [userData, isPhoneVerified]);

  // Optimized form submission
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (validateForm()) {
        const formattedUserData = {
          ...userData,
          email: userData.email.trim().toLowerCase(),
          name: userData.name.trim(),
        };

        onSubmit(formattedUserData);
      }
    },
    [userData, validateForm, onSubmit]
  );

  // Optimized OTP sending
  const handleSendPhoneOTP = useCallback(async () => {
    if (!userData.phone.trim()) {
      setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
      return;
    } else if (!/^\+?\d{10,15}$/.test(userData.phone.replace(/\s/g, ""))) {
      setErrors((prev) => ({ ...prev, phone: "Invalid phone number format" }));
      return;
    }

    setIsPhoneOTPSending(true);
    try {
      const cleanPhone = userData.phone.replace(/^\+/, "").replace(/\s/g, "");
      const result = await sendPhoneOTP(cleanPhone);

      if (result.success && result.sessionId) {
        setSessionId(result.sessionId);
        setPhoneOtpSent(true);
        setShowPhoneOTPInput(true);
        setOtpTimer(60);
        setErrors((prev) => ({ ...prev, phone: undefined }));
      } else {
        setErrors((prev) => ({
          ...prev,
          phone: result.error || "Failed to send OTP",
        }));
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        phone: "Failed to send OTP. Please try again.",
      }));
    } finally {
      setIsPhoneOTPSending(false);
    }
  }, [userData.phone]);

  // Optimized OTP verification
  const handleVerifyPhoneOTP = useCallback(async () => {
    if (!phoneOtp.trim()) {
      setErrors((prev) => ({ ...prev, otp: "OTP is required" }));
      return;
    }

    if (phoneOtp.length !== 4) {
      setErrors((prev) => ({ ...prev, otp: "OTP must be 4 digits" }));
      return;
    }

    setIsPhoneOTPVerifying(true);
    try {
      const result = await verifyPhoneOTP(sessionId, phoneOtp);
      if (result.success) {
        setIsPhoneVerified(true);
        setShowPhoneOTPInput(false);
        setErrors((prev) => ({ ...prev, otp: undefined }));
      } else {
        setErrors((prev) => ({
          ...prev,
          otp: result.error || "Invalid OTP. Please try again.",
        }));
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        otp: "Verification failed. Please try again.",
      }));
    } finally {
      setIsPhoneOTPVerifying(false);
    }
  }, [phoneOtp, sessionId]);

  // Optimized input handlers
  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setUserData((prev) => ({ ...prev, name: value }));
      if (errors.name && value.trim().length >= 2) {
        setErrors((prev) => ({ ...prev, name: undefined }));
      }
    },
    [errors.name]
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setUserData((prev) => ({ ...prev, email: value }));
      if (errors.email && /^[^@]+@[^@]+\.[^@]+$/.test(value)) {
        setErrors((prev) => ({ ...prev, email: undefined }));
      }
    },
    [errors.email]
  );

  const handleSizeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseFloat(e.target.value) || 0;
      setUserData((prev) => ({ ...prev, size: value }));
      if (errors.size && value > 0 && value <= 10000) {
        setErrors((prev) => ({ ...prev, size: undefined }));
      }
    },
    [errors.size]
  );

  const handlePhoneChange = useCallback(
    (phone: string) => {
      setPhone(phone);
      if (isPhoneVerified) {
        setIsPhoneVerified(false);
        setShowPhoneOTPInput(false);
        setPhoneOtpSent(false);
        setPhoneOtp("");
      }
      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: undefined }));
      }
    },
    [isPhoneVerified, errors.phone]
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Navigation Icons */}
      <div className="flex justify-between items-center mb-6">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Go back"
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
          aria-label="Close form"
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
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            value={userData.name}
            onChange={handleNameChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors?.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
          {errors?.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone Input */}
        <div className="mb-4 w-full">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <div className="flex gap-2">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={handlePhoneChange}
              disabled={isPhoneVerified || isSubmitting}
              enableSearch={true}
              autoFormat={true}
              inputStyle={{
                width: "100%",
                height: "42px",
                paddingLeft: "50px",
                fontSize: "16px",
                borderRadius: "5px",
                border: errors?.phone ? "1px solid #dc3545" : "1px solid #ccc",
                backgroundColor: isPhoneVerified ? "#f0f0f0" : "#fff",
              }}
              containerStyle={{ flex: "1" }}
              buttonStyle={{
                borderRadius: "5px 0 0 5px",
                borderRight: "1px solid #ccc",
              }}
              dropdownStyle={{ fontSize: "14px" }}
            />
            <button
              type="button"
              onClick={handleSendPhoneOTP}
              disabled={
                isPhoneOTPSending ||
                isPhoneVerified ||
                otpTimer > 0 ||
                isSubmitting
              }
              className={`px-4 py-2 text-white border-none rounded-md cursor-pointer font-medium text-sm transition-colors ${
                isPhoneVerified
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-blue-500 hover:bg-blue-600"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isPhoneVerified
                ? "✓ Verified"
                : isPhoneOTPSending
                ? "Sending..."
                : otpTimer > 0
                ? `Resend (${otpTimer}s)`
                : phoneOtpSent
                ? "Resend OTP"
                : "Send OTP"}
            </button>
          </div>
          {errors?.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Phone OTP Input */}
        {showPhoneOTPInput && !isPhoneVerified && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Enter Phone OTP *
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={phoneOtp}
                onChange={(e) =>
                  setPhoneOtp(e.target.value.replace(/\D/g, "").substring(0, 4))
                }
                placeholder="4-digit OTP"
                maxLength={4}
                className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  errors?.otp ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={handleVerifyPhoneOTP}
                disabled={
                  isPhoneOTPVerifying || phoneOtp.length !== 4 || isSubmitting
                }
                className="px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPhoneOTPVerifying ? "Verifying..." : "Verify"}
              </button>
            </div>
            {errors?.otp && (
              <p className="text-red-500 text-sm mt-1">{errors.otp}</p>
            )}
            <p className="text-gray-500 text-sm mt-2">
              OTP sent to {userData.phone}. Valid for 10 minutes.
            </p>
          </div>
        )}

        {/* Loading Distraction Component */}
        {isPhoneOTPSending && <LoadingDistraction step={loadingStep} />}

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            value={userData.email}
            onChange={handleEmailChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors?.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Size Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity (Running Feet) *
          </label>
          <input
            type="number"
            value={userData.size}
            onChange={handleSizeChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors?.size ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter quantity in running feet"
            min="1"
            max="10000"
            step="0.1"
            disabled={isSubmitting}
          />
          {errors?.size && (
            <p className="text-red-500 text-sm mt-1">{errors.size}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isPhoneVerified}
          className="w-full py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Get a quote"
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
