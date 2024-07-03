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

// import { PiSmileySadLight } from "react-icons/pi";

// export const NotFound = () => {
//   return (
//     <main>
//       <section className="bg-[--white] -mt-7">
//         <div className="flex justify-center text-center">
//           <div className="h-screen w-full max-w-[65rem] mt-20 mb-20 tablet:mt-[10rem] tablet:mb-[20rem] p-4 rounded-4xl">
//             <h3 className="text-[8rem] tablet:text-[11rem] text-[--third] flex justify-center">
//               <PiSmileySadLight />
//             </h3>
//             <h2 className="text-[--third] text-[8rem] tablet:text-[11rem]">404</h2>
//             <p className="text-[--third] text-3xl tablet:text-5xl">
//               Page Not Found
//             </p>
//             <p className="text-[--third] text-xl tablet:text-3xl mt-3">
//               The page you are looking for doesn't exist or an error occurred.
//             </p>
//             <p className="text-[--third] text-xl tablet:text-3xl">
//               Go back, or head over to imperio.com to choose a new direction.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };
