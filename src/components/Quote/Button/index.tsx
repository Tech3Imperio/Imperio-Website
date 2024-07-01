import { Link } from "react-router-dom";
import { QuoteButtonProps } from "../../../types";

export const QuoteButton: React.FC<QuoteButtonProps> = ({ className }) => {
  return (
    <Link
      to="/quote"
      className={
        "py-4 px-6 text-[--black] font-bold bg-[--secound] text-xs rounded-4xl transition-700 cursor-pointer border border-[--secound]  hover:bg-[--black] hover:text-[--secound] " +
        className
      }
    >
      GET A QUOTE
    </Link>
  );
};
