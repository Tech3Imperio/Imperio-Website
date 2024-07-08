import { ProductCardProps } from "../../../types"; // Importing ProductCardProps type from types file
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom

export const ProductCard: React.FC<ProductCardProps> = ({
  // ProductCard component accepting ProductCardProps
  img, // Image source for the product card
  alt = "", // Alternate text for the image (defaulting to an empty string if not provided)
  path, // Path to navigate when the card is clicked
  data, // Data object containing additional product information
  productName, // Name of the product
}) => {
  const navigate = useNavigate(); // Initializing the navigate function using useNavigate hook from react-router-dom

  return (
    <div
      tabIndex={0} // Setting tabindex to make the div focusable
      role="button" // Setting role to button for accessibility
      onClick={() => navigate(path, { state: data })} // Navigate to specified path with additional data on click
      className="max-w-64 max-h-72 h-72 flex flex-col items-center rounded-xl overflow-hidden group shadow-sm hover:shadow-none cursor-pointer transition-700 outline-none" // Styling classes for the product card
    >
      <div className="relative overflow-hidden w-full h-full">
        {/* Absolute positioned overlay for displaying product details on hover */}
        <div className="absolute h-full w-full p-5 text-white bg-gradient-to-r from-black to-black z-10 flex flex-col justify-center opacity-0 group-hover:opacity-70 transition-700">
          <h1 className="font-normal text-sm">{productName}</h1>{" "}
          {/* Product name */}
          <p className="text-sm pt-5">{data["Product Finish"]}</p>{" "}
          {/* Product finish information from data object */}
        </div>
        <img
          src={img} // Image source
          alt={alt} // Alternate text for the image
          title={alt} // Title attribute for the image
          className="w-full h-full object-cover group-hover:scale-x-[-1] transition-700" // Image styling with hover effect
        />
      </div>
      {/* Product name and finish displayed below the image */}
      <h3 className="text-[--third] font-normal py-2 text-sm">
        {productName} - {data["Product Finish"]}
      </h3>
    </div>
  );
};
