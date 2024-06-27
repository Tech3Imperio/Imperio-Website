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
      className="max-w-28 transition ease-out duration-500 hover:translate-y-1 hover:scale-125"
      alt="Imperio Logo"
      title="Imperio Logo"
    />
  </Link>
);

const MenuItem: React.FC<MenuItemProps> = ({ to, label }) => (
  <div className="py-2 relative w-max">
    <Link to={to} className={styles.Link}>
      {label}
    </Link>
  </div>
);

const MenuItems: React.FC = () =>
  window.innerWidth < 1000 ? (
    <>
      <MenuItem to="/products" label="Our Products" />
      <MenuItem to="/blog" label="Blog" />
      <MenuItem to="/" label="Home" />
      <MenuItem to="/aboutus" label="About Us" />
      <MenuItem to="/contactus" label="Contact Us" />
    </>
  ) : (
    <>
      <MenuItem to="/" label="Home" />
      <MenuItem to="/products" label="Our Products" />
      <MenuItem to="/aboutus" label="About Us" />
      <MenuItem to="/contact" label="Contact Us" />
      <MenuItem to="/blog" label="Blog" />
    </>
  );

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => (
  <div
    className={`fixed w-screen top-20 pb-4 max-tablet:top-[5.5rem] left-0 bg-[--black] rounded-b-4xl text-white transition-700 overflow-hidden ${
      isOpen ? "h-max" : "h-0"
    }`}
    aria-hidden={!isOpen}
  >
    <section className="px-8">
      <div className="flex flex-col gap-4 text-lg font-light">
        <div className={"flex flex-col gap-4 text-lg"}>
          <MenuItems />
        </div>
        <div className="flex justify-between item-center">
          <SocialLinks className="flex justify-center gap-4 text-xs text-white " />
          <QuoteButton />
        </div>
      </div>
    </section>
  </div>
);

export const Navbar: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth < 1000
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
      setIsMobileView(window.innerWidth < 1000);
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
      <div className="w-full m-auto pt-2 pb-4 flex gap-0 xl:gap-10 items-center px-8 tablet:px-20 laptop:px-36 xl:px-56 2xl:px-72 justify-between">
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
              <ul className="text-base flex gap-10 2xl:gap-16 text-white my-auto px-7 rounded-4xl border border-transparent transition-700 hover:shadow-small hover:shadow-white  hover:border-white">
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
