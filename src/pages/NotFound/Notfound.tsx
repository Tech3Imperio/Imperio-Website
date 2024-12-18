import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { PiSmileySadLight } from "react-icons/pi";

export const NotFound: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100 text-[--third] p-4">
      <title>NotFound - Imperio Railing Systems</title>
      <h1 className="text-6xl font-[Raleway] font-semibold mb-8 flex flex-col items-center ">
        <PiSmileySadLight className="text-[10rem]" />
        404
      </h1>
      <h2 className="text-3xl font-[Raleway] font-medium mb-4 text-center ">
        Page Not Found
      </h2>
      <p className="text-lg mb-8 text-center text-[--black]">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="flex items-center text-lg font-medium text-[--black] bg-[--secound] px-6 py-3 rounded-4xl hover:bg-[--black] hover:text-[--secound] transition-500"
      >
        <HiOutlineHome className="mr-2" /> Go Back Home
      </Link>
    </main>
  );
};
