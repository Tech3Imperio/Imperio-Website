import { useState } from "react";
import { ProductProps } from "../../types";
import { BlackButton, BlackButton2 } from "../../components";
import { FaMinus, FaPlus } from "react-icons/fa6";

type ImageData = {
  img: string;
  alt: string;
};

type FeatureData = {
  icon: ({ size, color }: { size?: number; color?: string }) => JSX.Element;
  feature: string;
};

interface NewProductsProps {
  productData: ProductProps;
  featureData: React.MutableRefObject<FeatureData[]>;
  imageData: ImageData[];
}

const NewProducts = ({ productData, featureData }: NewProductsProps) => {
  const [addToCart, setCartCounter] = useState(0);

  return (
    <main className="flex w-screen gap-10">
      <section className="flex flex-col w-[25vw] relative items-center justify-around h-screen px-4 overflow-y-scroll sidebar-container">
        <header className="pb-8 w-full ">
          <h2 className="YellowText text-[1.75rem] tablet:text-4xl xl:text-[2.5rem]">
            {productData["Product Category"]}
          </h2>
          <h1 className="Raleway text-[--third] text-xl tablet:text-[2.8rem] xl:text-xl">
            {productData["Product Name"] + " " + productData["Product Code"]}
          </h1>
        </header>
        <div className="flex flex-col text-sm gap-2 justify-center">
          {featureData.current.map((item, index) => (
            <div key={index} className="flex justify-between gap-3">
              <p className="font-semibold text-base">
                {item.feature.toUpperCase()}
              </p>
              <item.icon size={36} color="#03247b" />
            </div>
          ))}
          <div className="border-t-2 border-t-[--third] max-xl:space-y-8 max-xl:w-1/2">
            <p className="text-sm font-semibold mt-2 lg:text-sm">
              SUITABLE FOR GLASS UP TO
            </p>
            <h2 className="text-5xl text-[--third] lg:text-3xl">
              {productData["Glass Thickness"]}
            </h2>
          </div>
        </div>
        <p className="text-[--third]">{productData["Short Description"]}</p>
        <div className="flex flex-col w-full ">
          <p className="text-xl text-[--grey]">Available in 4 finishes</p>
          <p className="text-sm text-[--grey]">Choose a Finish</p>
          <ul className="flex gap-4 ">
            <li>Silver</li>
            <li>Champagne</li>
            <li>Black</li>
            <li>Wood</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex">
            <button
              className="bg-[--secound] rounded-l-3xl h-14 w-10 flex justify-center items-center p-1"
              onClick={() => setCartCounter(addToCart - 1)}
            >
              <FaMinus size={20} />
            </button>
            <p className="bg-gray-200 text-xl h-14 p-4 w-24 flex justify-center items-center ">
              {addToCart}
            </p>
            <button
              className="bg-[--secound] rounded-r-3xl h-14 w-10 flex justify-center items-center p-1"
              onClick={() => setCartCounter(addToCart + 1)}
            >
              <FaPlus size={20} />
            </button>
          </div>
          <BlackButton2>Add To Cart</BlackButton2>
        </div>
        <div className="flex w-full gap-2">
          <BlackButton className="hidden xl:block max-w-48" path="/products">
            View other products
          </BlackButton>
          <BlackButton className="w-full" path="/projects">
            View Projects
          </BlackButton>
        </div>
      </section>
    </main>
  );
};

export default NewProducts;
