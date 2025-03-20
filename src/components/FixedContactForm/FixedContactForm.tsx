"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import CustomTextarea from "../CustomTextarea/CustomTextarea";

export default function FixedContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkFormSubmission = () => {
      const isFormSubmitted = localStorage.getItem("formSubmitted");
      setIsVisible(!isFormSubmitted); // Hide if form was submitted
    };

    checkFormSubmission(); // Run on mount

    const handleScroll = () => {
      if (window.scrollY > 300) {
        checkFormSubmission(); // Hide if already submitted
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    try {
      const response = await fetch(
        "https://backendimperio.onrender.com/landing-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
          }),
        }
      );

      // Check if response is actually JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server did not return JSON");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      setIsVisible(false);
      localStorage.setItem("formSubmitted", "true");
      setFormData({ name: "", email: "", phone: "", pincode: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-40"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/3">
                <h3 className="text-xl font-bold mb-2">
                  Get Your Free Quote Today
                </h3>
                <p className="text-gray-600">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
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
                <div className="md:col-span-2">
                  <CustomTextarea
                    name="message"
                    placeholder="Tell us about your project (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>
                <div className="md:col-span-2">
                  <CustomButton
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                  </CustomButton>
                </div>
              </form>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
