"use client";

import { useState } from "react";
import sendOTP from "../send-phone-otp/otp-sender";

interface OTPState {
  loading: boolean;
  error: string | null;
  sessionId: string | null;
}

export function useOTP() {
  const [state, setState] = useState<OTPState>({
    loading: false,
    error: null,
    sessionId: null,
  });

  const sendOtpToPhone = async (phoneNumber: string) => {
    setState({ loading: true, error: null, sessionId: null });

    try {
      const response = await sendOTP(phoneNumber);
      setState({
        loading: false,
        error: null,
        sessionId: response.Details,
      });
      return response;
    } catch (error: unknown) {
      let errorMessage = "Failed to send OTP";
      if (typeof error === "object" && error !== null && "Details" in error) {
        errorMessage = (error as { Details?: string }).Details || errorMessage;
      }
      setState({
        loading: false,
        error: errorMessage,
        sessionId: null,
      });
      throw error;
    }
  };

  return {
    ...state,
    sendOtpToPhone,
  };
}
