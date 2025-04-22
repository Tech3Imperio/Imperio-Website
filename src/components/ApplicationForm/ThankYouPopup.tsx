import { motion } from "framer-motion"; // Tree-shaking works if only used as required
import { FiCheckCircle } from "react-icons/fi"; // Only imports the necessary icon

interface ThankYouMessageProps {
  onClose: () => void;
}

const ThankYouMessage = ({ onClose }: ThankYouMessageProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="p-6 text-center"
  >
    <FiCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
    <h2 className="text-3xl font-bold mb-4 text-[#393939]">Thank You!</h2>
    <p className="text-lg mb-8 text-[#393939]">
      Your application has been submitted successfully. We'll be in touch soon!
    </p>
    <button
      onClick={onClose}
      className="px-8 py-3 text-[--secound] font-bold bg-[--black] text-base rounded-none transition-700 cursor-pointer border border-[--secound] hover:bg-[--secound] hover:text-[--black] whitespace-nowrap"
    >
      Close
    </button>
  </motion.div>
);

export default ThankYouMessage;
