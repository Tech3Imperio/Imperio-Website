// import React, { useState, useEffect, useRef } from "react";
// import { phoneview, laptopview } from "../../assets/Images";

// interface VideoProps {
//   altText: string;
// }

// const HeroVideo: React.FC<VideoProps> = ({ altText }) => {
//   const [isDesktop, setIsDesktop] = useState<boolean>(false);
//   const mobileVideoRef = useRef<HTMLVideoElement>(null);
//   const desktopVideoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       const newIsDesktop = window.innerWidth >= 1024;
//       setIsDesktop(newIsDesktop);

//       // Pause both videos
//       if (mobileVideoRef.current) mobileVideoRef.current.pause();
//       if (desktopVideoRef.current) desktopVideoRef.current.pause();

//       // Play the appropriate video
//       if (newIsDesktop) {
//         if (desktopVideoRef.current) {
//           desktopVideoRef.current.play();
//         }
//       } else {
//         if (mobileVideoRef.current) {
//           mobileVideoRef.current.play();
//         }
//       }
//     };

//     checkScreenSize(); // Initial check
//     window.addEventListener("resize", checkScreenSize);

//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-screen">
//       {/* Mobile Video */}
//       <video
//         ref={mobileVideoRef}
//         src={phoneview}
//         className={`absolute -top-[24px] left-0 w-full h-full object-cover ${
//           isDesktop ? "hidden" : "block"
//         }`}
//         muted
//         playsInline
//         loop
//         preload="auto"
//       />

//       {/* Desktop Video */}
//       <video
//         ref={desktopVideoRef}
//         src={laptopview}
//         className={`absolute -top-[24px] left-0 w-full h-full object-cover ${
//           isDesktop ? "block" : "hidden"
//         }`}
//         muted
//         playsInline
//         loop
//         preload="auto"
//       />

//       {/* Black gradient overlay */}
//       <div className="absolute -top-[24px] left-0 w-full h-full bg-gradient-to-t from-black via-black to-transparent opacity-25"></div>

//       {/* Overlay content */}
//       <div className="absolute flex items-center justify-center w-full h-full">
//         <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
//           {altText}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default HeroVideo;

import React, { useState, useEffect, useRef } from "react";
import { phoneview, laptopview } from "../../assets/Images";

interface VideoProps {
  altText: string;
}

const HeroVideo: React.FC<VideoProps> = ({ altText }) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= 1024
  );
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const newIsDesktop = window.innerWidth >= 1024;
      setIsDesktop(newIsDesktop);

      // Pause both videos when resizing
      if (mobileVideoRef.current) mobileVideoRef.current.pause();
      if (desktopVideoRef.current) desktopVideoRef.current.pause();

      // Load the appropriate video
      if (newIsDesktop) {
        if (desktopVideoRef.current) {
          desktopVideoRef.current.load(); // Load desktop video only when needed
          desktopVideoRef.current
            .play()
            .catch(() => console.warn("Autoplay failed."));
        }
      } else {
        if (mobileVideoRef.current) {
          mobileVideoRef.current.load(); // Load mobile video only when needed
          mobileVideoRef.current
            .play()
            .catch(() => console.warn("Autoplay failed."));
        }
      }
    };

    checkScreenSize(); // Initial check for video type
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
        preload="none" // Avoid preloading the mobile video by default
        // loading="lazy" // Lazy load for mobile video
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
        preload="none" // Avoid preloading the desktop video by default
        // loading="lazy" // Lazy load for desktop video
      />

      {/* Black gradient overlay */}
      <div className="absolute -top-[24px] left-0 w-full h-full bg-gradient-to-t from-black via-black to-transparent opacity-0"></div>

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
