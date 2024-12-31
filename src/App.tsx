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
import { Outlet, useNavigate } from "react-router-dom";
import { ErrorPopup, Footer, Navbar } from "./components";
import { useScrollToTop } from "./hooks";
// Ensure this import is from 'react-helmet'
import WhatsAppChat from "./pages/WhatsAppChat/WhatsAppChat";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
import EnquiryButton from "./components/EnquiryButton/EnquiryButton";

const getFaviconPath = (isDarkMode = false) => {
  return `/favicon-${isDarkMode ? "dark" : "light"}.ico`;
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const [faviconUrl, setFaviconUrl] = useState(getFaviconPath());
  const encodedToken = localStorage.getItem("token");

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

  const [isModal, setModal] = useState(false);

  const handleModalChange = () => {
    localStorage.removeItem("token");
    setModal(false);
    navigate("/");
  };

  useEffect(() => {
    if (encodedToken) {
      try {
        const parts = encodedToken.split(".");
        if (parts.length === 3) {
          // Decode the payload
          const decodedPayload = JSON.parse(atob(parts[1]));
          const expirationTime = decodedPayload.exp;

          const intervalId = setInterval(() => {
            const currentTime = Math.floor(Date.now() / 1000);
            if (expirationTime <= currentTime) {
              clearInterval(intervalId); // Stop the timer
              setModal(true);
            }
          }, 1800000); // 30 mins timer
        } else {
          console.error("Invalid token format");
        }
      } catch (error) {
        console.error("Error checking token:", error);
      }
    } else {
      // console.log("No token found");
    }
  }, [encodedToken, navigate]);

  return (
    <>
      {isModal && (
        <ErrorPopup
          onClose={handleModalChange}
          message={
            "Your Session is Expired! We Kindly request you to please Login again!"
          }
        />
      )}
      <Toaster />
      <Navbar />
      <Outlet />
      <WhatsAppChat />
      <EnquiryButton />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
