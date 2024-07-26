// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Footer, Navbar } from "./components";
// import { useScrollToTop } from "./hooks";
// import Favicon from "react-favicon";
// import WhatsAppChat from "./pages/WhatsAppChat/WhatsAppChat";
// import toast, { Toaster } from "react-hot-toast";

// const getFaviconPath = (isDarkMode = false) => {
//   return `/favicon-${isDarkMode ? "dark" : "light"}.ico`;
// };

// const App: React.FC = () => {
//   const [faviconUrl, setFaviconUrl] = useState(getFaviconPath());
//   useScrollToTop();
//   useEffect(() => {
//     const matcher = window.matchMedia("(prefers-color-scheme: dark)");
//     const updateFavicon = () => setFaviconUrl(getFaviconPath(matcher.matches));
//     updateFavicon();
//     matcher.addEventListener("change", updateFavicon);
//     return () => {
//       matcher.removeEventListener("change", updateFavicon);
//     };
//   }, []);

//   useEffect(() => {
//     document.addEventListener("contextmenu", handlecontextmenu);
//     return () => {
//       document.removeEventListener("contextmenu", handlecontextmenu);
//     };
//   }, []);

//   const handlecontextmenu = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <Toaster />
//       <Favicon url={faviconUrl} />
//       <Navbar />
//       <Outlet />
//       <WhatsAppChat />
//       <Footer />
//     </>
//   );
// };

// export default App;

// below data is new change in this code
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { useScrollToTop } from "./hooks";
// import Favicon from "react-favicon";
import WhatsAppChat from "./pages/WhatsAppChat/WhatsAppChat";
import { Toaster } from "react-hot-toast";

const getFaviconPath = (isDarkMode = false) => {
  return `/favicon-${isDarkMode ? "dark" : "light"}.ico`;
};

const App: React.FC = () => {
  const [faviconUrl, setFaviconUrl] = useState(getFaviconPath());

  useScrollToTop();

  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    const updateFavicon = () => setFaviconUrl(getFaviconPath(matcher.matches));

    updateFavicon();
    matcher.addEventListener("change", updateFavicon);

    return () => {
      matcher.removeEventListener("change", updateFavicon);
    };
  }, []);

  // this is code is right click disable start
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  // this is code is right click disable start

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = faviconUrl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [faviconUrl]);

  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
      <WhatsAppChat />
      <Footer />
    </>
  );
};

export default App;
