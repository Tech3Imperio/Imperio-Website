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
          Imperio Railing Systems | Glass Railing | Balcony Glass Railings |
          Staircase Glass Railings | Glass Railing Handrails
        </title>
        <meta
          name="description"
          content="Discover glass railing aluminium glass railing, balcony glass railing solutions with Imperio Railing Systems in Mumbai, Maharashtra,Punjab, Uttar Pradesh, Jharkhand, Karnataka, Andhra Pradesh India. Our durable, modern and stylish glass railing, including balcony glass railings and staircase glass railing, for any space. Various aluminium accessories available like base, handrails, brackets, spigots, etc. Transform your space with our high-quality glass railings today!. Best suppliers and dealers in India for glass railing"
        />
        <meta
          name="keywords"
          content="premium glass railings, toughened glass manufacturer, durable glass railing systems, modern glass railing, stylish glass railing, balcony glass railing, balcony glass design, glass handrail price, custom glass installation,custom glass railing, Architectural Glass Design, Glass Railing Safety & Maintenance"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.imperiorailing.com/" />
        <meta
          name="instagram:url"
          content="https://www.instagram.com/imperio.railings/?igsh=OWlmaXB6NnJpcWJ0"
        />
        <meta name="twitter:url" content="https://x.com/ImperioRailing" />
        <meta
          name="facebook:url"
          content="https://www.facebook.com/imperiorailingsystem"
        />
        <meta
          name="twitter:title"
          content="glass railing supplier in mumbai and manufacturing"
        />
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
