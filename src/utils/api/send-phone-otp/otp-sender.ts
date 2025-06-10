"use client";

interface OTPResponse {
  Status: string;
  Details: string;
}

export default function sendOTP(phoneNumber: string): Promise<OTPResponse> {
  return new Promise((resolve, reject) => {
    if (!phoneNumber) {
      reject({ Status: "Error", Details: "Phone number is required" });
      return;
    }

    // Your 2factor API key - store this in environment variables
    const apiKey = process.env.NEXT_PUBLIC_TWOFACTOR_API_KEY;

    if (!apiKey) {
      reject({ Status: "Error", Details: "API key not configured" });
      return;
    }

    // 2factor API endpoint for sending OTP
    const url = `https://2factor.in/API/V1/${apiKey}/SMS/${phoneNumber}/AUTOGEN`;

    // Handle the fetch operation properly
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        // Check if response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((responseText) => {
        // Check if response has content
        if (!responseText || responseText.trim() === "") {
          throw new Error("Empty response from server");
        }

        // Try to parse JSON
        try {
          const data = JSON.parse(responseText);

          if (data.Status === "Success") {
            resolve({
              Status: "Success",
              Details: data.Details, // This is the session ID
            });
          } else {
            reject({
              Status: "Error",
              Details: data.Details || "Failed to send OTP",
            });
          }
        } catch (parseError) {
          console.error("JSON parse error:", parseError);
          console.error("Response text:", responseText);
          throw new Error("Invalid response format from server");
        }
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        reject({
          Status: "Error",
          Details: error.message || "Internal server error",
        });
      });
  });
}
