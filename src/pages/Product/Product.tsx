import { useState, useEffect } from "react";
import axios from "axios";
import {
  GoChevronLeft,
  GoChevronRight,
  GoRepoForked,
  GoShieldCheck,
} from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";

// Define an interface for the product data
interface Product {
  seriesName: string;
  feature1: string;
  feature2: string;
  feature3: string;
  suitableFor: string;
  glassThickness: string;
  shortDescription: string;
  images: string;
}

export const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data from SheetDB when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sheetdb.io/api/v1/tbeqr4mmvqa39"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data from SheetDB:", error);
      }
    };
    fetchData();
  }, []);

  const handleNextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePreviousProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  const currentProduct = products[currentIndex];
  const images = currentProduct.images.split(","); // Assuming images are a comma-separated string

  return (
    <main>
      <header className="text-[40px] ml-[19.2rem] mt-10 font-light text-[#03247B]">
        {currentProduct.seriesName}
      </header>
      <section className="flex justify-center gap-20 w-auto relative mb-[8rem] mt-[3rem]">
        <div className="h-24 w-44">
          <GoRepoForked className="text-[#03247B] text-2xl" />
          <p className="text-base mt-1 font-normal">
            {currentProduct.feature1}
          </p>

          <HiOutlineLightBulb className="text-[#03247B] text-2xl mt-2" />
          <p className="text-base mt-1 w-max font-normal">
            {currentProduct.feature2}
          </p>

          <GoShieldCheck className="text-[#03247B] text-2xl mt-2" />
          <p className="text-base mt-1 font-normal">
            {currentProduct.feature3}
          </p>
          <hr className="max-w-36 mt-3"></hr>
          <p className="text-base mt-4 font-normal">
            {currentProduct.suitableFor}
          </p>
          <br />
          <p className="text-5xl text-[#03247B] font-light">
            {currentProduct.glassThickness}
          </p>
          <div className="h-[270px] w-[270px] mt-14">
            <img
              className="rounded-4xl object-cover w-[270px] h-[270px] cursor-pointer"
              src={images[0]}
              alt="previous image"
              onClick={() => handleImageClick(0)}
            />
          </div>
        </div>

        <div className="relative flex items-center mr-80">
          <button
            onClick={handlePreviousProduct}
            className="text-black font-medium text-2xl rounded-full h-10 w-8 flex items-center justify-center -mr-4"
          >
            <GoChevronLeft />
          </button>
          <img
            className="rounded-4xl object-cover w-[600px] h-[620px] ml-10"
            src={images[1]}
            alt="middle image"
          />
          <button
            onClick={handleNextProduct}
            className="text-black font-medium text-2xl rounded-full h-10 w-8 flex items-center justify-center ml-4"
          >
            <GoChevronRight />
          </button>
        </div>

        <div className="mt-4 absolute ml-[57rem]">
          <p className="text-base w-[15rem] font-normal text-[#03247B]">
            {currentProduct.shortDescription}
          </p>
          <button className="bg-black text-white rounded-4xl text-base h-8 w-auto px-3 mt-10 ml-10">
            View other products
          </button>
          <div className="h-[270px] w-[270px] mt-36">
            <img
              className="rounded-4xl object-cover w-[270px] h-[270px] cursor-pointer"
              src={images[2]}
              alt="next image"
              onClick={() => handleImageClick(2)}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
