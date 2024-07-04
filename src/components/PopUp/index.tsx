import { motion, AnimatePresence } from "framer-motion";

type PopupMessageProps = {
  message: string;
  onClose: () => void;
};

export const PopupMessage: React.FC<PopupMessageProps> = ({
  message,
  onClose,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div className="relative bg-white text-black p-6 rounded shadow-lg max-w-lg w-full">
          <button
            onClick={onClose}
            className="absolute -top-1 right-2 text-2xl text-[--third] hover:text-[--secound]"
          >
            ×
          </button>
          <div>{message}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
