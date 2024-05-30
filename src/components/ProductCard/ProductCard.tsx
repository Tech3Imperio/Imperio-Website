import { ProductCardProps } from "../../types";

export const ProductCard: React.FC<ProductCardProps> = ({
  img,
  alt = "",
  text,
}) => {
  return (
    <div className="max-w-64 max-h-72">
      <img src={img} alt={alt} className="w-4/5" />
      <div className="text-[--third]">{text}</div>
    </div>
  );
};
