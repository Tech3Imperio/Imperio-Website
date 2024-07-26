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
import "../src/pages/App.css";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { useScrollToTop } from "./hooks";
// import Favicon from "react-favicon";
import WhatsAppChat from "./pages/WhatsAppChat/WhatsAppChat";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported

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

  // Right-click disable code start
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  // Right-click disable code end

  // Copy disable code start and add also app.css
  useEffect(() => {
    const handleCopy = (event: ClipboardEvent) => {
      event.preventDefault();
      // toast.error("Copying text is disabled");
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);
  // Copy disable code end and add also app.css

  // Favicon update
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
      <ToastContainer />
    </>
  );
};

export default App;
