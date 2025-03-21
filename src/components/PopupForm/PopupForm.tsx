"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import { useNavigate } from "react-router-dom";

export default function PopupForm() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setHasBeenOpened] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpenPopup = () => {
      setIsOpen(true);
    };

    window.addEventListener("openPopupForm", handleOpenPopup);

    return () => {
      window.removeEventListener("openPopupForm", handleOpenPopup);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasBeenOpened(true);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!formData.pincode || formData.pincode.length !== 6) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    try {
      const response = await fetch(
        "https://backendimperio.onrender.com/landing-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      // Check if response is actually JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server did not return JSON");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      localStorage.setItem("formSubmitted", "true");
      localStorage.setItem("fixedForm", "false");
      setFormData({
        name: "",
        email: "",
        phone: "",
        pincode: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/thanks");
      setFormData({
        name: "",
        email: "",
        phone: "",
        pincode: "",
        message: "",
      });
      handleClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Request Your Free Quote</h3>
                <button
                  onClick={handleClose}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <CustomInput
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                </div>

                <div>
                  <CustomInput
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                <div>
                  <CustomInput
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                  />
                </div>

                <div>
                  <CustomInput
                    name="pincode"
                    placeholder="Pincode *"
                    value={formData.pincode}
                    onChange={handleChange}
                    error={errors.pincode}
                    required
                  />
                </div>

                <div>
                  <CustomTextarea
                    name="message"
                    placeholder="Tell us about your requirements"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <CustomButton
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                </CustomButton>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
