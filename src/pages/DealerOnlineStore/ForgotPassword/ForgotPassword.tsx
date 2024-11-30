// // import { useState } from "react";
// // import axios from "axios";
// // import { BASE_URL } from "../../Service/Api/Api";

// // export default function ForgotPassword() {
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setEmail(e.target.value);
// //   };

// //   const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsLoading(true);

// //     try {
// //       const response = await axios.post(
// //         `${BASE_URL}/product/dealer/forgot-password`,
// //         { email }
// //       );

// //       if (response.status === 200) {
// //         setMessage("Password reset link sent to your email.");
// //       }
// //     } catch (error) {
// //       setMessage("Error sending password reset link.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleForgotPasswordSubmit}>
// //         <input
// //           type="email"
// //           placeholder="Enter your email"
// //           value={email}
// //           onChange={handleInputChange}
// //         />
// //         <button type="submit" disabled={isLoading}>
// //           {isLoading ? "Sending..." : "Send Reset Link"}
// //         </button>
// //       </form>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "../../Service/Api/Api";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         `${BASE_URL}/product/dealer/forgot-password`,
//         { email }
//       );

//       if (response.status === 200) {
//         setMessage("Password reset link sent to your email.");
//       }
//     } catch (error) {
//       setMessage("Error sending password reset link.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
//       <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="p-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             Forgot Password
//           </h2>
//           <form onSubmit={handleForgotPasswordSubmit} className="space-y-6">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold transition duration-200 ${
//                 isLoading
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               }`}
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center">
//                   <svg
//                     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     ></path>
//                   </svg>
//                   Sending...
//                 </span>
//               ) : (
//                 "Send Reset Link"
//               )}
//             </button>
//           </form>
//           {message && (
//             <div
//               className={`mt-4 p-3 rounded-md text-center ${
//                 message.includes("Error")
//                   ? "bg-red-100 text-red-700"
//                   : "bg-green-100 text-green-700"
//               }`}
//             >
//               {message}
//             </div>
//           )}
//         </div>
//         <div className="bg-gray-50 px-8 py-4">
//           <p className="text-center text-gray-500 text-sm">
//             Remember your password?{" "}
//             <a href="/login" className="text-blue-500 hover:underline">
//               Log in
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
