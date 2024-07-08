import { Link } from "react-router-dom"; // Import the Link component from react-router-dom for navigation
import { QuoteButtonProps } from "../../../types"; // Import the QuoteButtonProps type for prop validation

// Define the QuoteButton component using the React.FC (Function Component) type, with props of type QuoteButtonProps
export const QuoteButton: React.FC<QuoteButtonProps> = ({ className }) => {
  return (
    // Use the Link component to create a navigational link to the "/quote" route
    <Link
      to="/quote"
      className={
        // Combine static class names with the dynamic className prop using template literals
        "py-4 px-6 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer border border-[--secound]  hover:bg-[--black] hover:text-[--secound] " +
        className
      }
    >
      {/* Set the button text */}
      GET A QUOTE
    </Link>
  );
};
