import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { imageList } from "../../assets/Images/imagegallery";

// Function to generate album data
const generateAlbums = (imageList: string[]) => {
  return imageList.map((url, index) => ({
    id: index + 1,
    url,
    title: `Album ${index + 1}`,
    artist: `Artist ${index + 1}`,
  }));
};

export default function AlbumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const albums = generateAlbums(imageList); // Generate album data from imported images

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % albums.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + albums.length) % albums.length);
  };

  return (
    <div className="relative w-full h-[800px] flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col w-2/3 justify-center items-center text-center">
        <h2 className="text-[#fad000] text-xl tablet:text-4xl lg:text-5xl max-xl:text-3xl max-2xl:text-4xl">
          Contain Your Space. Unleash Your View.
        </h2>
        <p className="w-full lg:w-[37rem] text-base tablet:text-base lg:text-lg xl:text-xl italic text-[--grey] text-center mt-2">
          Bulky <strong>railings</strong> block your view and ruin the
          atmosphere you’ve worked so hard to cultivate. <strong>Glass</strong>{" "}
          offers all the security, without sacrificing the most important thing:
          <strong> your vision</strong> .
        </p>
      </div>

      <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center mt-20">
        {albums.map((album, index) => {
          // Calculate the position in the carousel
          const distance =
            (index - currentIndex + albums.length) % albums.length;

          // Determine the position and styling based on distance from center
          let xPosition = 0;
          let scale = 1;
          let zIndex = 5;
          let opacity = 1;

          if (distance === 0) {
            // Center album
            xPosition = 0;
            scale = 1;
            zIndex = 10;
          } else if (distance === 1 || distance === albums.length - 1) {
            // Right or left of center
            xPosition = distance === 1 ? 250 : -250;
            scale = 0.8;
            zIndex = 5;
            opacity = 0.6;
          } else if (distance === 2 || distance === albums.length - 2) {
            // Far right or far left
            xPosition = distance === 2 ? 400 : -400;
            scale = 0.6;
            zIndex = 1;
            opacity = 0.2;
          } else {
            // Hidden albums
            xPosition = distance < albums.length / 2 ? 500 : -500;
            scale = 0.4;
            zIndex = 0;
            opacity = 0;
          }

          return (
            <motion.div
              key={album.id}
              className="absolute cursor-pointer"
              style={{ zIndex }}
              initial={{ x: 0, scale: 0, opacity: 0 }}
              animate={{
                x: xPosition,
                scale,
                opacity,
                rotateY: xPosition === 0 ? 0 : xPosition > 0 ? -15 : 15,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="relative w-[500px] h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img src={album.url} className="w-full h-full object-cover" />
                {distance === 0 && (
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white"></div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation buttons */}

      <button
        className="absolute left-4 md:left-10 z-20 bg-white/80 p-2 rounded-full shadow-md"
        onClick={handlePrev}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 md:right-10 z-20 bg-white/80 p-2 rounded-full shadow-md"
        onClick={handleNext}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
