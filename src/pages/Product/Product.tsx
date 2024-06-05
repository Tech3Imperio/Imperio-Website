import { useState } from "react";
import {
  GoChevronLeft,
  GoChevronRight,
  GoRepoForked,
  GoShieldCheck,
} from "react-icons/go";
import { HiOutlineLightBulb } from "react-icons/hi";
// import { useParams } from "react-router-dom";

export const Product = () => {
  // const { productID } = useParams<{ productID: string }>();

  const images = [
    "https://www.squareyards.com/blog/wp-content/uploads/2023/09/Balcony-with-Glass-Railing-on-Rooftop.png",
    "https://media.istockphoto.com/id/1146096609/photo/metal-railings-and-glass-wall.jpg?s=612x612&w=0&k=20&c=eWyuZdJaJtxwK8_tjwFquvXSUMFQI_LLVLeZsbfw9dU=",
    "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/08/Stainless-Steel-Accents.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-beautiful-stairs-and-glass-railings-in-a-modern-lobby-image_2976238.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getPreviousIndex = () =>
    (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <main>
      <header className="text-[40px] ml-[19.2rem] mt-10 font-light text-[#03247B]">
        Imperio ACE (series name).
      </header>
      <section className="flex justify-center gap-20 w-auto relative mb-[8rem] mt-[3rem]">
        <div className="h-24 w-44">
          <GoRepoForked className="text-[#03247B] text-2xl" />
          <p className="text-base mt-1 font-normal">Durable</p>

          <HiOutlineLightBulb className="text-[#03247B] text-2xl mt-2" />
          <p className="text-base mt-1 w-max font-normal">
            Heavy duty railing system.
          </p>

          <GoShieldCheck className="text-[#03247B] text-2xl mt-2" />
          <p className="text-base mt-1 font-normal">Fire rated gaskets.</p>
          <hr className="max-w-36 mt-3"></hr>
          <p className="text-base mt-4 font-normal">Suitable for glass up to</p>
          <br />
          <p className="text-5xl text-[#03247B] font-light">12mm.</p>
          <div className="h-[270px] w-[270px] mt-14">
            <img
              className="rounded-4xl object-cover w-[270px] h-[270px] cursor-pointer"
              src={images[getPreviousIndex()]}
              alt="previous image"
              onClick={() => handleImageClick(getPreviousIndex())}
            />
          </div>
        </div>

        <div className="relative flex items-center mr-80">
          <button
            onClick={handlePrevious}
            className="text-black font-medium text-2xl rounded-full h-10 w-8 flex items-center justify-center -mr-4"
          >
            <GoChevronLeft />
          </button>
          <img
            className="rounded-4xl object-cover w-[600px] h-[620px] ml-10"
            src={images[currentIndex]}
            alt="middle image"
          />
          <button
            onClick={handleNext}
            className="text-black font-medium text-2xl rounded-full h-10 w-8 flex items-center justify-center ml-4"
          >
            <GoChevronRight />
          </button>
        </div>

        <div className="mt-4 absolute ml-[57rem]">
          <p className="text-base w-[15rem] font-normal text-[#03247B]">
            Short description of the product. At Imperio, we specialize in
            creating beautiful, durable glass railing systems that enhance any
            space.
          </p>
          <button className="bg-black text-white rounded-4xl text-base h-8 w-auto px-3 mt-10 ml-10">
            View other products
          </button>
          <div className="h-[270px] w-[270px] mt-36">
            <img
              className="rounded-4xl object-cover w-[270px] h-[270px] cursor-pointer"
              src={images[getNextIndex()]}
              alt="next image"
              onClick={() => handleImageClick(getNextIndex())}
            />
          </div>
        </div>
      </section>
    </main>
  );
};
