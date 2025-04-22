type ErrorPopupProps = {
  message: string;
  onClose: () => void;
};

const ErrorPopup = ({ message, onClose }: ErrorPopupProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-10 rounded-none shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold text-[#03237b]">Error!</h2>
        <p className="mt-4 text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="px-8 py-2 mt-8 text-[--black] font-bold bg-[--secound] rounded-none transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound]"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default ErrorPopup;
