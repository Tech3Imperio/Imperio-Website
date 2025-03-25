"use client";

import { useState, FormEvent } from "react";

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

  // Validate inputs
  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!userData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!userData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(userData.phone)) {
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
      onSubmit(userData);
    }
  };

  return (
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
          <div style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}>
            {errors.name}
          </div>
        )}
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
        >
          Phone:
        </label>
        <input
          type="text"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: errors?.phone ? "1px solid #dc3545" : "1px solid #ccc",
          }}
        />
        {errors?.phone && (
          <div style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}>
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
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: errors?.email ? "1px solid #dc3545" : "1px solid #ccc",
          }}
        />
        {errors?.email && (
          <div style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}>
            {errors.email}
          </div>
        )}
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}
        >
          Size (ft):
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
          <div style={{ color: "#dc3545", fontSize: "14px", marginTop: "4px" }}>
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

        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          style={{
            flex: "1",
            padding: "12px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            opacity: isSubmitting ? 0.7 : 1,
            fontWeight: "500",
          }}
        >
          Back
        </button>
      </div>
    </form>
  );
};

export default UserForm;
