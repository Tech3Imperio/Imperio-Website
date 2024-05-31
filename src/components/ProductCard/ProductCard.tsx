import { useState } from "react";
import { ProductCardProps } from "../../types";

export const ProductCard: React.FC<ProductCardProps> = ({
  img,
  alt = "",
  productName,
  productDetail,
  text,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${
        hover ? "" : "shadow-sm"
      } max-w-64 max-h-72 h-72 flex flex-col items-center rounded-xl overflow-hidden transition-700`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden">
        <div
          className={`${
            hover ? "opacity-50" : "opacity-0"
          } absolute h-full w-full p-5 text-white bg-gradient-to-r from-black to-black z-50 transition-700`}
        >
          <header className="font-normal text-sm">{productName}</header>
          <p className="text-[9px] pt-5">{productDetail}</p>
        </div>
        <img
          src={img}
          alt={alt}
          className={`${
            hover ? "scale-x-[-1]" : ""
          } object-contain w-64 transition-700 `}
        />
      </div>
      <div className="text-[--third] font-normal pt-[0.4rem] text-xs">
        {text}
      </div>
    </div>
  );
};
