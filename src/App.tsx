import "../src/pages/App.css";
import React, { useEffect, useState, Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "./components";
const ErrorPopup = React.lazy(
  () => import("./components/ErrorPopupProps/ErrorPopupProps")
);
import { useScrollToTop } from "./hooks";
// Ensure this import is from 'react-helmet'
import WhatsAppChat from "./pages/WhatsAppChat/WhatsAppChat";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure this is imported
// import EnquiryButton from "./components/EnquiryButton/EnquiryButton";

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

  const isLandingPage = location.pathname === "/landing";
  return (
    <>
      {isModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorPopup
            onClose={handleModalChange}
            message="Your Session is Expired! We Kindly request you to please Login again!"
          />
        </Suspense>
      )}
      <Toaster />
      {!isLandingPage && <Navbar />}
      <Outlet />
      {!isLandingPage && <WhatsAppChat />}
      {!isLandingPage && <Footer />}
      <ToastContainer />
    </>
  );
};

export default App;
