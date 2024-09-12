// import { Link } from "react-router-dom"; // Import the Link component from react-router-dom for navigation
// import { DealershipButtonProps, QuoteButtonProps } from "../../../types"; // Import the QuoteButtonProps type for prop validation

// // Define the QuoteButton component using the React.FC (Function Component) type, with props of type QuoteButtonProps
// export const QuoteButton: React.FC<QuoteButtonProps> = ({ className }) => {
//   return (
//     // Use the Link component to create a navigational link to the "/quote" route
//     <Link
//       to="/quote"
//       className={
//         // Combine static class names with the dynamic className prop using template literals
//         "px-6 py-4 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer border border-[--secound]  hover:bg-[--black] hover:text-[--secound] " +
//         className
//       }
//     >
//       {/* Set the button text */}
//       GET A QUOTE
//     </Link>
//   );
// };

// // Delership button
// export const DealershipButton: React.FC<DealershipButtonProps> = ({ className }) => {
//   return (
//     // Use the Link component to create a navigational link to the "/quote" route
//     <Link
//       to="/dealership"
//       className={
//         // Combine static class names with the dynamic className prop using template literals
//         "py-4 px-6 text-[--black] font-bold bg-white text-xs rounded-4xl transition-700 cursor-pointer border border-white  hover:bg-[--black] hover:text-[--secound] " +
//         className
//       }
//     >
//       {/* Set the button text */}
//       DEALERSHIP
//     </Link>
//   );
// };

import { Link } from "react-router-dom";
import { DealershipButtonProps, QuoteButtonProps } from "../../../types";

// Define the QuoteButton component using the React.FC (Function Component) type, with props of type QuoteButtonProps
export const QuoteButton: React.FC<QuoteButtonProps> = ({ className }) => {
  return (
    <Link
      to="/quote"
      className={
        "px-6 py-4 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap " +
        className
      }
    >
      GET A QUOTE
    </Link>
  );
};

// Dealership button
export const DealershipButton: React.FC<DealershipButtonProps> = ({
  className,
}) => {
  return (
    <Link
      to="/dealership"
      className={
        "py-4 px-6 text-[--black] font-bold bg-white text-xs rounded-4xl transition-700 cursor-pointer border border-white hover:bg-[--black] hover:text-[--secound] " +
        className
      }
    >
      DEALERSHIP
    </Link>
  );
};
