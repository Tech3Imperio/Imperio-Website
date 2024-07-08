import { motion, AnimatePresence } from "framer-motion";

// Define the type for the props that PopupMessage component will receive
type PopupMessageProps = {
  message: string;
  onClose: () => void;
};

// Define the PopupMessage component using React functional component syntax
export const PopupMessage: React.FC<PopupMessageProps> = ({
  message,
  onClose,
}) => {
  return (
    // Wrap the popup in AnimatePresence to handle the mounting and unmounting animations
    <AnimatePresence>
      {/* Use motion.div for the animated popup container */}
      <motion.div
        // Initial state of the popup when it first renders
        initial={{ opacity: 0, y: -50 }}
        // Animation state when the popup is visible
        animate={{ opacity: 1, y: 0 }}
        // Animation state when the popup is exiting
        exit={{ opacity: 0, y: -50 }}
        // Styling for the popup container
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        {/* Inner container for the popup message */}
        <div className="relative bg-white text-black p-6 rounded shadow-lg max-w-lg w-full">
          {/* Close button for the popup */}
          <button
            onClick={onClose}
            className="absolute -top-1 right-2 text-2xl text-[--third] hover:text-[--secound]"
          >
            ×
          </button>
          {/* Display the message passed as a prop */}
          <div>{message}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
