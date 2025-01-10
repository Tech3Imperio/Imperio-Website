import React, { useState } from "react";
import { RiLoader2Fill } from "react-icons/ri";

const FulltimeHiringForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl rounded-lg  overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Full-time Hiring Application
          </h1>
          <p className="text-gray-600 mb-6">
            Please fill out the form below to apply for a full-time position.
          </p>
        </div>
        <div
          className="relative w-full"
          style={{ height: "calc(100vh - 16rem)" }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
              <RiLoader2Fill className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd5lISK-j0sUqcX4j4qmEdlyUz2DLXTUdaTxuW_soOOLDvE4Q/viewform?embedded=true"
            className="w-full h-full border-0"
            title="Full-time Hiring Application Form"
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FulltimeHiringForm;
