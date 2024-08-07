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
// import "../src/pages/App.css";
// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Footer, Navbar } from "./components";
// import { useScrollToTop } from "./hooks";
// import { Helmet } from "react-helmet";
// // import Favicon from "react-favicon";
// import WhatsAppChat from "./pages/WhatsAppChat/WhatsAppChat";
// import { Toaster } from "react-hot-toast";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported

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

//   // Right-click disable code start
//   useEffect(() => {
//     const handleContextMenu = (e: MouseEvent) => {
//       e.preventDefault();
//     };

//     document.addEventListener("contextmenu", handleContextMenu);

//     return () => {
//       document.removeEventListener("contextmenu", handleContextMenu);
//     };
//   }, []);
//   // Right-click disable code end

//   // Copy disable code start and add also app.css
//   useEffect(() => {
//     const handleCopy = (event: ClipboardEvent) => {
//       event.preventDefault();
//       // toast.error("Copying text is disabled");
//     };

//     document.addEventListener("copy", handleCopy);

//     return () => {
//       document.removeEventListener("copy", handleCopy);
//     };
//   }, []);
//   // Copy disable code end and add also app.css

//   // Favicon update
//   useEffect(() => {
//     const link = document.createElement("link");
//     link.rel = "icon";
//     link.href = faviconUrl;
//     document.head.appendChild(link);

//     return () => {
//       document.head.removeChild(link);
//     };
//   }, [faviconUrl]);

//   return (
//     <>
//       <Helmet>
//         <title>
//           Glass Railing Solutions for Homes and Buildings | Your Company Name
//         </title>
//         <meta
//           name="description"
//           content="Your Company Name offers premium glass railing solutions for homes and buildings. Specializing in glass balconies, stair railings, and custom glass installations. Enhance your space with our stylish and durable glass railings."
//         />
//         <meta
//           name="keywords"
//           content="glass railings, glass balconies, stair railings, glass railing solutions, custom glass railings, home glass railings, building glass railings"
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="icon" href={faviconUrl} />
//       </Helmet>
//       <Toaster />
//       <Navbar />
//       <Outlet />
//       <WhatsAppChat />
//       <Footer />
//       <ToastContainer />
//     </>
//   );
// };

// export default App;

import "../src/pages/App.css";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { useScrollToTop } from "./hooks";
import { Helmet } from "react-helmet"; // Ensure this import is from 'react-helmet'
import WhatsAppChat from "./pages/WhatsAppChat/WhatsAppChat";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import favicondark from "../src/assets/Images/logo/favicondark.ico";

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

  // Copy disable code start
  useEffect(() => {
    const handleCopy = (event: ClipboardEvent) => {
      event.preventDefault();
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);
  // Copy disable code end

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
      <Helmet>
        <title>
          Imperio Railing Systems | Modern Glass Railings for Your Home
        </title>
        <meta
          name="description"
          content="Imperio Railing Systems offers premium glass railing solutions for homes and buildings. Enhance your space with our stylish and durable glass railings, glass balconies,stair railings,black railing with glass,glass handrail cost and glass parapet railing. Specializing in custom glass installations, our products ensure safety and elegance. Discover our range of glass railings and transform your home or building today."
        />
        <meta
          name="keywords"
          content="glass balcony design,glass guardrail,railing with glass,glass with railing,design of glass railing,glass railing for balcony,glass for balcony railing,glass railing design for balcony,glass balcony handrail,glass handrail balcony,modern style glass railing design for balcony,balcony railings with glass,railing glass balcony,glass railing design balcony,steel with glass railing,staircase glass railing design,staircase railing design with glass,ss with glass railing,modern glass balcony,stainless and glass railings,stainless steel glass handrail,glass and stainless steel railings,tuffen glass railing,wooden railings with glass,tuffen glass design for balcony,frameless glass railing,modern balcony glass design,outdoor glass handrail"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={favicondark} />
      </Helmet>
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
