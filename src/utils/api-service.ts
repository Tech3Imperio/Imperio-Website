// This file would contain your actual API implementation
// Replace the mock functions in the form with calls to these methods

/**
 * Sends an OTP to the provided email address
 * @param email The email address to send the OTP to
 * @returns Promise that resolves to true if OTP was sent successfully
 */
export const sendOTP = async (email: string): Promise<boolean> => {
  try {
    // In a real application, this would be an API call to your backend
    const response = await fetch("/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

/**
 * Verifies the OTP for a given email
 * @param email The email address to verify
 * @param otp The OTP code entered by the user
 * @returns Promise that resolves to true if OTP is valid
 */
export const verifyOTP = async (
  email: string,
  otp: string
): Promise<boolean> => {
  try {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();

    if (res.ok) {
      return true; // OTP verified
    } else {
      console.error("Verification error:", data.message);
      return false;
    }
  } catch (err) {
    console.error("Verification request failed:", err);
    throw err;
  }
};
