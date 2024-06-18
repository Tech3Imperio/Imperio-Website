import styles from "./Navbar.module.css";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { debounce } from "../../utils";
import { Link } from "react-router-dom";
import { whiteLogo } from "../../assets/Images";
import { MenuItemProps, MobileMenuProps } from "../../types";
import { SocialLinks, QuoteButton } from "..";

const Logo: React.FC = () => (
  <Link to="/" className="navbar-brand" aria-label="PowerHouse Home">
    <img
      src={whiteLogo}
      className="max-w-28 max-tablet:pl-3 transition ease-out duration-500 hover:translate-y-1 hover:scale-125"
      alt="Imperio Logo"
      title="Imperio Logo"
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
    <MenuItem to="/" label="Home" />
    <MenuItem to="/products" label="Our Products" />
    <MenuItem to="/aboutus" label="About Us" />
    <MenuItem to="/blog" label="Blog" />
  </>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => (
  <div
    className={`fixed w-screen top-20 max-tablet:top-[4.5rem] left-0 bg-[--black] rounded-b-4xl text-white transition-700 overflow-hidden ${
      isOpen ? "h-[35vh]" : "h-0"
    }`}
    aria-hidden={!isOpen}
  >
    <section>
      <ul className="p-8 pt-4 text-xl">
        <MenuItems />
      </ul>
    </section>
    <footer
      className={`relative transition-700 ${
        isOpen ? "right-0" : "right-[-150px]"
      }`}
    >
      <SocialLinks className="flex justify-center gap-10 text-2xl text-white" />
    </footer>
  </div>
);

export const Navbar: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth < 1400
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
      setIsMobileView(window.innerWidth < 1400);
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
      className={`bg-[--black] sticky top-0 z-50 transition-200 ${
        !isMenuOpen ? "rounded-b-4xl" : "rounded-b-[0px]"
      }`}
    >
      <div className="w-full m-auto pt-2 pb-4 flex items-center px-8 sm:px-32 lg:px-52 2xl:px-72 justify-between">
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
              <ul className="text-base flex gap-16 text-white my-auto px-7 rounded-4xl border border-transparent transition-700 hover:shadow-small hover:shadow-white  hover:border-white">
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
