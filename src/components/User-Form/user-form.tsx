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
}

interface UserFormProps {
  onSubmit: (userData: UserData) => void;
  isSubmitting: boolean;
  onBack: () => void;
}

const UserForm = ({ onSubmit, isSubmitting, onBack }: UserFormProps) => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    size: 50,
  });

  const [errors, setErrors] = useState<Errors>();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

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

    // if (!userData.email.trim()) {
    //   newErrors.email = "Email is required";
    // } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(userData.email)) {
    //   newErrors.email = "Invalid email address";
    // }

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
        email: userData.email.trim() || "", // Ensure email is always defined
      };

      onSubmit(formattedUserData);
    }
  };

  const [phone, setPhone] = useState(userData.phone || "91"); // Default to India (+91)

  useEffect(() => {
    setUserData({ ...userData, phone: `+${phone}` });
  }, [phone]);

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
            country={"in"} // Default country: India (+91)
            value={phone}
            onChange={(phone) => setPhone(phone)} // Updates phone state
            enableSearch={true} // Allows searching for countries
            autoFormat={true} // Auto-formats the number
            inputStyle={{
              width: "100%",
              height: "42px",
              paddingLeft: "50px", // Prevents text overlap with country code
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
            Email: (optional)
          </label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: errors?.email ? "1px solid #dc3545" : "1px solid #ccc",
            }}
          />
          {errors?.email && (
            <div
              style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}
            >
              {errors.email}
            </div>
          )}
        </div>

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
            disabled={isSubmitting}
            style={{
              flex: "1",
              padding: "12px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.7 : 1,
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
