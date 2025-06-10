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

// Updated 2factor API integration functions
const sendPhoneOTP = async (
  phoneNumber: string
): Promise<{ success: boolean; sessionId?: string; error?: string }> => {
  try {
    const response = await fetch(
      "https://backendimperio-5uku.onrender.com/api/send-phone-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      }
    );

    const data = await response.json();

    if (response.ok && data.Status === "Success") {
      return { success: true, sessionId: data.Details };
    } else {
      return { success: false, error: data.Details || "Failed to send OTP" };
    }
  } catch (error) {
    console.error("Error sending phone OTP:", error);
    return { success: false, error: "Network error occurred" };
  }
};

const verifyPhoneOTP = async (
  sessionId: string,
  otp: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch(
      "https://backendimperio-5uku.onrender.com/api/verify-phone-otp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId, otp }),
      }
    );

    const data = await response.json();

    if (response.ok && data.Status === "Success") {
      return { success: true };
    } else {
      return { success: false, error: data.Details || "Invalid OTP" };
    }
  } catch (error) {
    console.error("Error verifying phone OTP:", error);
    return { success: false, error: "Verification failed" };
  }
};

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

  // OTP related states
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showEmailOTPInput, setShowEmailOTPInput] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [isEmailOTPSending, setIsEmailOTPSending] = useState(false);
  const [isEmailOTPVerifying, setIsEmailOTPVerifying] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  // Phone OTP related states
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [showPhoneOTPInput, setShowPhoneOTPInput] = useState(false);
  const [phoneOtp, setPhoneOtp] = useState("");
  const [isPhoneOTPSending, setIsPhoneOTPSending] = useState(false);
  const [isPhoneOTPVerifying, setIsPhoneOTPVerifying] = useState(false);
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    setUserData({ ...userData, phone: `+${phone}` });
  }, [phone]);

  // Timer for OTP resend
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer(otpTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpTimer]);

  // Simulate loading progress
  useEffect(() => {
    if (isEmailOTPSending || isPhoneOTPSending) {
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
  }, [isEmailOTPSending, isPhoneOTPSending]);

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!userData.name.trim()) {
      newErrors.name = "Name is required";
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

  const handleSendEmailOTP = async () => {
    if (!userData.email.trim()) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(userData.email)) {
      setErrors({ ...errors, email: "Invalid email address" });
      return;
    }

    setIsEmailOTPSending(true);
    try {
      const success = await sendOTPToEmail(userData.email);
      if (success) {
        setEmailOtpSent(true);
        setShowEmailOTPInput(true);
        setErrors({ ...errors, email: undefined });
      }
    } catch (error) {
      setErrors({ ...errors, email: "Failed to send OTP. Please try again." });
    } finally {
      setIsEmailOTPSending(false);
    }
  };

  const handleVerifyEmailOTP = async () => {
    if (!emailOtp.trim()) {
      setErrors({ ...errors, otp: "OTP is required" });
      return;
    }

    setIsEmailOTPVerifying(true);
    try {
      const isValid = await verifyOTP(userData.email, emailOtp);
      if (isValid) {
        setIsEmailVerified(true);
        setShowEmailOTPInput(false);
        setErrors({ ...errors, otp: undefined });
      } else {
        setErrors({ ...errors, otp: "Invalid OTP. Please try again." });
      }
    } catch (error) {
      setErrors({ ...errors, otp: "Verification failed. Please try again." });
    } finally {
      setIsEmailOTPVerifying(false);
    }
  };

  const handleSendPhoneOTP = async () => {
    // Validate phone before sending OTP
    if (!userData.phone.trim()) {
      setErrors({ ...errors, phone: "Phone number is required" });
      return;
    } else if (!/^\+?\d{10,15}$/.test(userData.phone.replace(/\s/g, ""))) {
      setErrors({ ...errors, phone: "Invalid phone number format" });
      return;
    }

    setIsPhoneOTPSending(true);
    try {
      // Remove + and any spaces from phone number for 2factor API
      const cleanPhone = userData.phone.replace(/^\+/, "").replace(/\s/g, "");
      const result = await sendPhoneOTP(cleanPhone);

      if (result.success && result.sessionId) {
        setSessionId(result.sessionId);
        setPhoneOtpSent(true);
        setShowPhoneOTPInput(true);
        setOtpTimer(60); // 60 seconds timer
        setErrors({ ...errors, phone: undefined });
      } else {
        setErrors({ ...errors, phone: result.error || "Failed to send OTP" });
      }
    } catch (error) {
      setErrors({ ...errors, phone: "Failed to send OTP. Please try again." });
    } finally {
      setIsPhoneOTPSending(false);
    }
  };

  const handleVerifyPhoneOTP = async () => {
    if (!phoneOtp.trim()) {
      setErrors({ ...errors, otp: "OTP is required" });
      return;
    }

    if (phoneOtp.length !== 6) {
      setErrors({ ...errors, otp: "OTP must be 6 digits" });
      return;
    }

    setIsPhoneOTPVerifying(true);
    try {
      const result = await verifyPhoneOTP(sessionId, phoneOtp);
      if (result.success) {
        setIsPhoneVerified(true);
        setShowPhoneOTPInput(false);
        setErrors({ ...errors, otp: undefined });
      } else {
        setErrors({
          ...errors,
          otp: result.error || "Invalid OTP. Please try again.",
        });
      }
    } catch (error) {
      setErrors({ ...errors, otp: "Verification failed. Please try again." });
    } finally {
      setIsPhoneOTPVerifying(false);
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

        <div style={{ marginBottom: "16px", width: "100%" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
          >
            Phone Number:
          </label>
          <div style={{ display: "flex", gap: "10px" }}>
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => {
                setPhone(phone);
                // Reset verification status when phone changes
                if (isPhoneVerified) {
                  setIsPhoneVerified(false);
                  setShowPhoneOTPInput(false);
                  setPhoneOtpSent(false);
                }
              }}
              disabled={isPhoneVerified}
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
              disabled={isPhoneOTPSending || isPhoneVerified || otpTimer > 0}
              style={{
                padding: "10px 15px",
                backgroundColor: isPhoneVerified ? "#28a745" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor:
                  isPhoneOTPSending || isPhoneVerified || otpTimer > 0
                    ? "not-allowed"
                    : "pointer",
                opacity: isPhoneOTPSending || otpTimer > 0 ? 0.7 : 1,
                whiteSpace: "nowrap",
              }}
            >
              {isPhoneVerified
                ? "Verified"
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
            <div
              style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}
            >
              {errors.phone}
            </div>
          )}
        </div>

        {showPhoneOTPInput && !isPhoneVerified && (
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Enter Phone OTP:
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                value={phoneOtp}
                onChange={(e) =>
                  setPhoneOtp(e.target.value.replace(/\D/g, "").substring(0, 6))
                }
                placeholder="6-digit OTP"
                maxLength={6}
                style={{
                  flex: "1",
                  padding: "10px",
                  borderRadius: "5px",
                  border: errors?.otp ? "1px solid #dc3545" : "1px solid #ccc",
                }}
              />
              <button
                type="button"
                onClick={handleVerifyPhoneOTP}
                disabled={isPhoneOTPVerifying || phoneOtp.length !== 6}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor:
                    isPhoneOTPVerifying || phoneOtp.length !== 6
                      ? "not-allowed"
                      : "pointer",
                  opacity:
                    isPhoneOTPVerifying || phoneOtp.length !== 6 ? 0.7 : 1,
                }}
              >
                {isPhoneOTPVerifying ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
            {errors?.otp && (
              <div
                style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}
              >
                {errors.otp}
              </div>
            )}
            <div
              style={{ fontSize: "14px", marginTop: "8px", color: "#6c757d" }}
            >
              OTP sent to {userData.phone}. Valid for 10 minutes.
            </div>
          </div>
        )}

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
              onClick={handleSendEmailOTP}
              disabled={isEmailOTPSending || isEmailVerified}
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
              ) : isEmailOTPSending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {emailOtpSent ? "Resend" : "Send OTP"}
                </>
              )}
            </button>
          </div>
          {errors?.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Loading Distraction Component */}
        {(isEmailOTPSending || isPhoneOTPSending) && (
          <LoadingDistraction step={loadingStep} />
        )}

        {showEmailOTPInput && !isEmailVerified && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Email OTP
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={emailOtp}
                onChange={(e) =>
                  setEmailOtp(e.target.value.replace(/\D/g, "").substring(0, 6))
                }
                placeholder="6-digit OTP"
                maxLength={6}
                className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors?.otp ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={handleVerifyEmailOTP}
                disabled={isEmailOTPVerifying || emailOtp.length !== 6}
                className="px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isEmailOTPVerifying ? (
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
          disabled={isSubmitting || !isEmailVerified || !isPhoneVerified}
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
