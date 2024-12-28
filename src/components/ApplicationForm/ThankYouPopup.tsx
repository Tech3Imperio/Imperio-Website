import React from "react";

interface ThankYouPopupProps {
  onClose: () => void;
}

export function ThankYouPopup({ onClose }: ThankYouPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="mb-6">
          Your application has been submitted successfully.
        </p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
