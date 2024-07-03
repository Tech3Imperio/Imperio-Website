import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { useScrollToTop } from "./hooks";
import Favicon from "react-favicon";

const getFaviconPath = (isDarkMode = false) => {
  return `/favicon-${isDarkMode ? "dark" : "light"}.ico`;
};

const App: React.FC = () => {
  const [faviconUrl, setFaviconUrl] = useState(getFaviconPath());
  useScrollToTop();
  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    setFaviconUrl(getFaviconPath(matcher.matches));
  }, []);

  return (
    <>
      <Favicon url={faviconUrl} />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
