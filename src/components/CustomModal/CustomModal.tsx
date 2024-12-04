type ModalProps = {
  message: string;
  onClose?: () => void;
};

export default function CustomModal({ onClose, message }: ModalProps) {
  return (
    <div className="text-white w-96 top-[45%] left-[40%] p-10 bg-[--black] fixed z-50 rounded-3xl">
      <p className="text-center text-xl">{message}</p>
      <button
        onClick={onClose}
        className="px-6 py-4 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound] whitespace-nowrap "
      >
        Login
      </button>
    </div>
  );
}
