import { ProductCardProps } from "../../../types";
import { useNavigate } from "react-router-dom";

export const ProductCard: React.FC<ProductCardProps> = ({
  img,
  alt = "",
  path,
  data,
  productName,
}) => {
  const navigate = useNavigate();
  return (
    <div
      tabIndex={0}
      role="button"
      onClick={() => navigate(path, { state: data })}
      className="max-w-64 max-h-72 h-72 flex flex-col items-center rounded-xl overflow-hidden group shadow-sm hover:shadow-none cursor-pointer transition-700 outline-none"
    >
      <div className="relative overflow-hidden w-full h-full">
        <div className="absolute h-full w-full p-5 text-white bg-gradient-to-r from-black to-black z-10 flex flex-col justify-center opacity-0 group-hover:opacity-70 transition-700">
          <h1 className="font-normal text-sm">{productName}</h1>
          <p className="text-sm pt-5">{data["Product Finish"]}</p>
        </div>
        <img
          src={img}
          alt={alt}
          title={alt}
          className="w-full h-full object-cover group-hover:scale-x-[-1] transition-700 "
        />
      </div>
      <h3 className="text-[--third] font-normal py-2 text-sm">
        {productName} - {data["Product Finish"]}
      </h3>
    </div>
  );
};
