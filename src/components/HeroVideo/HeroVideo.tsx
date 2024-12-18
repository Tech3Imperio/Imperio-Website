import React, { useState, useEffect, useRef } from "react";
import { phoneview, laptopview } from "../../assets/Images";

interface VideoProps {
  altText: string;
}

const HeroVideo: React.FC<VideoProps> = ({ altText }) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsDesktop = window.innerWidth >= 1024;
      setIsDesktop(newIsDesktop);

      // Pause both videos
      if (mobileVideoRef.current) mobileVideoRef.current.pause();
      if (desktopVideoRef.current) desktopVideoRef.current.pause();

      // Play the appropriate video
      if (newIsDesktop) {
        if (desktopVideoRef.current) {
          desktopVideoRef.current.play();
        }
      } else {
        if (mobileVideoRef.current) {
          mobileVideoRef.current.play();
        }
      }
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Mobile Video */}
      <video
        ref={mobileVideoRef}
        src={phoneview}
        className={`absolute -top-[24px] left-0 w-full h-full object-cover ${
          isDesktop ? "hidden" : "block"
        }`}
        muted
        playsInline
        loop
      />

      {/* Desktop Video */}
      <video
        ref={desktopVideoRef}
        src={laptopview}
        className={`absolute -top-[24px] left-0 w-full h-full object-cover ${
          isDesktop ? "block" : "hidden"
        }`}
        muted
        playsInline
        loop
      />

      {/* Black gradient overlay */}
      <div className="absolute -top-[24px] left-0 w-full h-full bg-gradient-to-t from-black via-black to-transparent opacity-25"></div>

      {/* Overlay content */}
      <div className="absolute flex items-center justify-center w-full h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          {altText}
        </h1>
      </div>
    </div>
  );
};

export default HeroVideo;
