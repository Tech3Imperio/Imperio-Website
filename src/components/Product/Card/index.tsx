import { useState } from "react";
import { ProductCardProps } from "../../../types";
import { useNavigate } from "react-router-dom";

export const ProductCard: React.FC<ProductCardProps> = ({
  img,
  alt = "",
  path,
  data,
  productName,
  productDetail,
}) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(path, { state: data })}
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
          <h1 className="font-normal text-sm">{productName}</h1>
          <p className="text-[9px] pt-5">{productDetail}</p>
        </div>
        <img
          src={img}
          alt={alt}
          title={alt}
          className={`${
            hover ? "scale-x-[-1]" : ""
          } object-contain w-64 transition-700 `}
        />
      </div>
      <div className="text-[--third] font-normal pt-[0.4rem] text-xs">
        {productName}
      </div>
    </div>
  );
};
