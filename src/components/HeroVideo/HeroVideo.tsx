import React, { useState, useEffect, useRef } from "react";
import { desktopvideo, phonevideo } from "../../assets/Herovideo";

interface VideoProps {
  posterSrc: string;
  altText: string;
}

const HeroVideo: React.FC<VideoProps> = ({ posterSrc, altText }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check screen size for responsive video selection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px breakpoint for desktop
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Ensure the video plays correctly
  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current && !isVideoPlaying) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay was prevented:", error);
        });
        setIsVideoPlaying(true);
      }
    };

    if (isVideoLoaded) {
      playVideo();
    }
  }, [isVideoLoaded, isVideoPlaying]);

  // Handle video load
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  // Handle video end (if you want to stop the video from looping automatically)
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Video player */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onLoadedData={handleVideoLoaded}
        onEnded={handleVideoEnd} // This ensures that you handle end events manually
        className="absolute -top-[24px] left-0 w-full h-full object-cover"
        poster={posterSrc} // Image to show before the video plays
      >
        <source src={isDesktop ? desktopvideo : phonevideo} type="video/mp4" />
      </video>

      {/* Black gradient overlay */}
      <div className="absolute -top-[24px] left-0 w-full h-full bg-gradient-to-t from-black via-black to-transparent opacity-50"></div>

      {/* Overlay content */}
      <div className="absolute flex items-center justify-center w-full h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          {altText} {/* Title/Heading */}
        </h1>
      </div>
    </div>
  );
};

export default HeroVideo;
