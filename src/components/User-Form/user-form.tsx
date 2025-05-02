"use client";

import { useState, type FormEvent, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ConfirmationDialog from "../Conformation/Confirmation-dialogue";

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
    const res = await fetch("https://backendimperio.onrender.com/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error("Failed to send OTP");
    return true;
  } catch (error) {
    console.error("Error sending OTP:", error);
    return false;
  }
};

const verifyOTP = async (email: string, otp: string): Promise<boolean> => {
  try {
    const res = await fetch("https://backendimperio.onrender.com/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        otp: otp,
      }),
    });

    const data = await res.json();
    console.log("Verify OTP Response:", data);
    return res.ok && data.message === "OTP verified successfully";
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return false;
  }
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
  const [phone, setPhone] = useState("91"); // Default to India (+91)

  // OTP related states
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOTPSending, setIsOTPSending] = useState(false);
  const [isOTPVerifying, setIsOTPVerifying] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    setUserData({ ...userData, phone: `+${phone}` });
  }, [phone]);

  // Validate inputs
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
    // Validate email before sending OTP
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
      console.log("Sending OTP for verification:", otp);
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
    <div style={{ position: "relative" }}>
      {/* Navigation Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        {/* Back arrow */}
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          style={{
            background: "none",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            opacity: isSubmitting ? 0.7 : 1,
            fontSize: "24px",
          }}
        >
          &#8592;
        </button>

        {/* Home icon */}
        <button
          type="button"
          onClick={() => setShowConfirmDialog(true)}
          disabled={isSubmitting}
          style={{
            background: "none",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            opacity: isSubmitting ? 0.7 : 1,
            fontSize: "24px",
          }}
        >
          &#10006;
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
          >
            Name:
          </label>
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: errors?.name ? "1px solid #dc3545" : "1px solid #ccc",
            }}
          />
          {errors?.name && (
            <div
              style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}
            >
              {errors.name}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "16px", width: "100%" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
          >
            Phone:
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
              borderRadius: "5px",
              border: errors?.phone ? "1px solid #dc3545" : "1px solid #ccc",
              backgroundColor: "#fff",
            }}
            containerStyle={{ width: "100%" }}
            buttonStyle={{
              borderRadius: "5px 0 0 5px",
              borderRight: "1px solid #ccc",
            }}
            dropdownStyle={{ fontSize: "14px" }}
          />
          {errors?.phone && (
            <div
              style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}
            >
              {errors.phone}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
          >
            Email:
          </label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="email"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
                // Reset verification status when email changes
                if (isEmailVerified) {
                  setIsEmailVerified(false);
                }
              }}
              disabled={isEmailVerified}
              style={{
                flex: "1",
                padding: "10px",
                borderRadius: "5px",
                border: errors?.email ? "1px solid #dc3545" : "1px solid #ccc",
                backgroundColor: isEmailVerified ? "#f0f0f0" : "#fff",
              }}
            />
            <button
              type="button"
              onClick={handleSendOTP}
              disabled={isOTPSending || isEmailVerified}
              style={{
                padding: "10px 15px",
                backgroundColor: isEmailVerified ? "#28a745" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor:
                  isOTPSending || isEmailVerified ? "not-allowed" : "pointer",
                opacity: isOTPSending ? 0.7 : 1,
              }}
            >
              {isEmailVerified
                ? "Verified"
                : isOTPSending
                ? "Sending..."
                : otpSent
                ? "Resend OTP"
                : "Send OTP"}
            </button>
          </div>
          {errors?.email && (
            <div
              style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}
            >
              {errors.email}
            </div>
          )}
        </div>

        {showOTPInput && !isEmailVerified && (
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}
            >
              Enter OTP:
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").substring(0, 6))
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
                onClick={handleVerifyOTP}
                disabled={isOTPVerifying || otp.length !== 6}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor:
                    isOTPVerifying || otp.length !== 6
                      ? "not-allowed"
                      : "pointer",
                  opacity: isOTPVerifying || otp.length !== 6 ? 0.7 : 1,
                }}
              >
                {isOTPVerifying ? "Verifying..." : "Verify OTP"}
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
              Didn't receive the OTP? Check your spam folder or click "Resend
              OTP".
            </div>
          </div>
        )}

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
          >
            Quantity (Running Feet):
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
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: errors?.size ? "1px solid #dc3545" : "1px solid #ccc",
            }}
          />
          {errors?.size && (
            <div
              style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}
            >
              {errors.size}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            flexDirection: window.innerWidth < 500 ? "column" : "row",
          }}
        >
          <button
            type="submit"
            disabled={isSubmitting || !isEmailVerified}
            style={{
              flex: "1",
              padding: "12px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor:
                isSubmitting || !isEmailVerified ? "not-allowed" : "pointer",
              opacity: isSubmitting || !isEmailVerified ? 0.7 : 1,
              fontWeight: "500",
            }}
          >
            {isSubmitting ? "Submitting..." : "Get Quote on WhatsApp"}
          </button>
        </div>
      </form>
      <ConfirmationDialog
        isOpen={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={() => (window.location.href = "/")}
        title="Leave Quotation Maker"
        message="Are you sure you want to leave the quotation maker?"
        confirmText="Yes"
        cancelText="No"
      />
    </div>
  );
};

export default UserForm;
