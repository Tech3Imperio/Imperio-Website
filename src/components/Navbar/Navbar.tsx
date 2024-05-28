import styles from "./Navbar.module.css";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { debounce } from "../../utils";
import { Link } from "react-router-dom";
import { whiteLogo } from "../../assets/images";
import { MenuItemProps, MobileMenuProps } from "../../interface";
import { SocialLinks, QuoteButton } from "../../components";

const Logo: React.FC = () => (
  <Link to="/home" className="navbar-brand" aria-label="PowerHouse Home">
    <img
      src={whiteLogo}
      className="max-w-28 max-md:pl-3 transition ease-out duration-500 hover:translate-y-1 hover:scale-125"
      alt="PowerHouse Logo"
    />
  </Link>
);

const MenuItem: React.FC<MenuItemProps> = ({ to, label }) => (
  <li className="py-2 relative w-max">
    <Link to={to} className={styles.Link}>
      {label}
    </Link>
  </li>
);

const MenuItems: React.FC = () => (
  <>
    <MenuItem to="/home" label="Home" />
    <MenuItem to="/products" label="Our Products" />
    <MenuItem to="/aboutus" label="About Us" />
    <MenuItem to="/blog" label="Blog" />
  </>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => (
  <div
    className={`w-full bg-[--black] text-white transition-all duration-700 overflow-hidden ${
      isOpen ? "h-[32vh]" : "h-0"
    }`}
    aria-hidden={!isOpen}
  >
    <section>
      <ul className="p-8 pt-4 text-lg">
        <MenuItems />
      </ul>
    </section>
    <footer
      className={`relative transition-all duration-700 ${
        isOpen ? "right-0" : "right-[-150px]"
      }`}
    >
      <SocialLinks className="flex justify-center gap-10 text-2xl text-white" />
    </footer>
  </div>
);

export const Navbar: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth < 1200
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const hidden = useRef("hidden");

  const handleToggle = useCallback(() => {
    setIsMenuOpen((prevOpen) => !prevOpen);
    setTimeout(() => {
      hidden.current = hidden.current === "" ? "hidden" : "";
    }, 2000);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1200);
    };

    const debouncedResizeHandler = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResizeHandler as EventListener);

    return () => {
      window.removeEventListener(
        "resize",
        debouncedResizeHandler as EventListener
      );
    };
  }, []);

  return (
    <nav
      className={`bg-[--black] sticky top-0 z-50 transition-all duration-200 ease ${
        !isMenuOpen ? "rounded-b-4xl" : "rounded-b-[0px]"
      }`}
    >
      <div className="w-full m-auto py-2 flex items-center px-44 max-lg:px-16 justify-between">
        <Logo />
        {isMobileView ? (
          <button
            className="text-[--white]"
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            <div
              id={styles.nav_icon3}
              className={isMenuOpen ? styles.open : ""}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        ) : (
          <>
            <div className="flex-grow flex justify-center">
              <ul className="text-lg flex gap-16 text-white my-auto px-7 rounded-4xl shadow-shadow shadow-black transition-all duration-700 ease hover:shadow-white">
                <MenuItems />
              </ul>
            </div>
            <QuoteButton />
          </>
        )}
      </div>
      <MobileMenu isOpen={isMenuOpen} />
    </nav>
  );
};
