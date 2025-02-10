import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import imageList from "../../assets/Images/imagegallery";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  // const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsDesktop(window.innerWidth > 1024);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedImage]);

  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold">
        Contain Your Space. Unleash Your View.
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Bulky railings block your view and ruin the atmosphere you’ve worked so
        hard to cultivate. Glass offers all the security, without sacrificing
        the most important thing: your vision.
      </p>

      <div className="grid grid-cols-4 gap-4 max-w-[648px] mx-auto mt-6">
        {imageList.slice(0, 11).map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt="Gallery Item"
            className="cursor-pointer rounded-md shadow-md hover:shadow-lg transition w-[150px]"
            style={{ aspectRatio: 1 / 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(index)}
          />
        ))}
        <div
          className="flex items-center justify-center cursor-pointer bg-gray-300 rounded-md shadow-md hover:shadow-lg transition"
          style={{ aspectRatio: 1 / 1 }}
          onClick={() => setSelectedImage(15)}
        >
          <Plus size={40} className="text-gray-600" />
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-[75%]">
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={imageList[selectedImage]}
              className="w-full md:w-[100%] rounded-md"
              alt="Selected"
            />
            <div
              className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer text-black p-2 bg-gray-100 rounded-full"
              onClick={() =>
                setSelectedImage(
                  selectedImage > 0 ? selectedImage - 1 : imageList.length - 1
                )
              }
            >
              <ChevronLeft size={24} />
            </div>
            <div
              className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-black p-2 bg-gray-100 rounded-full"
              onClick={() =>
                setSelectedImage(
                  selectedImage < imageList.length - 1 ? selectedImage + 1 : 0
                )
              }
            >
              <ChevronRight size={24} />
            </div>
            <div className="absolute top-4 left-4 text-white text-sm">
              {selectedImage + 1} / {imageList.length}
            </div>
          </div>
          {/* {isDesktop ? (
            <div className="fixed right-32 grid grid-cols-2 my-auto h-[80%] w-[10%] bg-white overflow-y-auto scrollbar-hide gap-2 p-2 slider rounded-lg">
              {imageList.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Thumbnail"
                  className={`cursor-pointer rounded-md ${
                    selectedImage === index ? "border-2 border-white" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          ) : (
            <></>
          )} */}
        </div>
      )}
    </div>
  );
}
