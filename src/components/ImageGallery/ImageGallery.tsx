"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the type for trending items
type TrendingItem = {
  id: number;
  title: string;
  imageUrl: string;
};

// Generate sample data programmatically
const items: TrendingItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `${i + 1}`,
  imageUrl: `images/imagegallery/${i + 1}.jpg`,
}));

export default function ImageGallery() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check if arrows should be displayed based on scroll position
  const checkArrows = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  // Scroll the slider left or right
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 300; // Adjust scroll amount as needed
    const newScrollLeft =
      direction === "left"
        ? sliderRef.current.scrollLeft - scrollAmount
        : sliderRef.current.scrollLeft + scrollAmount;

    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  // Initialize and update arrow visibility
  useEffect(() => {
    checkArrows();
    const slider = sliderRef.current;

    if (slider) {
      slider.addEventListener("scroll", checkArrows);
      window.addEventListener("resize", checkArrows);

      return () => {
        slider.removeEventListener("scroll", checkArrows);
        window.removeEventListener("resize", checkArrows);
      };
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center py-16  bg-white">
      <h2 className="text-[#fad000] text-xl md:text-3xl lg:text-5xl mb-6 tracking-tight">
        Contain Your Space. Unleash Your View.
      </h2>

      <p className="w-full max-w-2xl text-base md:text-lg lg:text-xl italic text-[--grey] mb-12">
        Bulky <strong>railings</strong> block your view and ruin the atmosphere
        you've worked so hard to cultivate. <strong>Glass</strong> offers all
        the security, without sacrificing the most important thing:
        <strong> your vision</strong>.
      </p>

      <div className="trending-section w-full max-w-8xl py-6 px-4 md:px-12">
        <div className="relative group">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 transition-all duration-300 ${
              showLeftArrow ? "opacity-0 group-hover:opacity-100" : "hidden"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-2 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onScroll={checkArrows}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-none w-[200px] md:w-[250px] transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={
                      item.imageUrl || "/placeholder.svg?height=300&width=400"
                    }
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    {/* <p className="p-3 text-white font-medium">{item.title}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 transition-all duration-300 ${
              showRightArrow ? "opacity-0 group-hover:opacity-100" : "hidden"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
