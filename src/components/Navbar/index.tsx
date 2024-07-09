import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { whiteLogo } from "../../assets/Images";
import { MenuItemProps, MobileMenuProps, MenuItemsProps } from "../../types";
import { SocialLinks, QuoteButton } from "..";
import styles from "./Navbar.module.css";

// Logo component with a link to home
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

// Individual menu item component
const MenuItem: React.FC<MenuItemProps> = ({ to, label, handleClick }) => (
  <div className="py-2 relative w-max">
    <Link to={to} className={styles.Link} onClick={handleClick}>
      {label}
    </Link>
  </div>
);

// Component for rendering all menu items
const MenuItems: React.FC<MenuItemsProps> = ({ handleClick, type }) => (
  <>
    {[
      { to: "/", label: "Home" },
      { to: "/products", label: "Our Products" },
      { to: "/aboutus", label: "About Us" },
      { to: "/blog", label: "Blog" },
      { to: "/contactus", label: "Contact Us" },
    ].map((item) => (
      <MenuItem
        key={item.to}
        to={item.to}
        label={item.label}
        handleClick={type === "mobile" ? handleClick : () => {}}
      />
    ))}
  </>
);

// Mobile menu component
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, handleClick }) => (
  <div
    className={`fixed z-10 w-screen h-fit left-0 bg-[--black] rounded-b-4xl text-white transition-700 overflow-hidden border-b-4 ${
      isOpen
        ? "top-[5.5rem] pb-6 border-[#f1efe7] shadow-navmobile"
        : "-top-[25rem] pb-0"
    }`}
    aria-hidden={!isOpen}
  >
    <section className="px-8">
      <div className="flex flex-col gap-4 text-lg font-light">
        {/* Render mobile menu items */}
        <MenuItems handleClick={handleClick} type="mobile" />
        <div className="flex justify-between items-center">
          {/* Social links component */}
          <SocialLinks className="flex justify-center gap-4 text-xs text-white" />
          {/* Quote button component */}
          <div onClick={handleClick}>
            <QuoteButton />
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Main Navbar component
export const Navbar: React.FC = () => {
  // State for mobile view and menu open/close
  const [state, setState] = useState({
    isMobileView: window.innerWidth < 1000,
    isMenuOpen: false,
  });

  // Ref for handling hidden class toggle
  const hidden = useRef("hidden");

  // Toggle mobile menu open/close
  const handleToggle = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
    // Toggle hidden class after a delay
    setTimeout(() => {
      hidden.current = hidden.current === "" ? "hidden" : "";
    }, 2000);
  }, []);

  // Effect for updating mobile view based on window resize
  useEffect(() => {
    const handleResize = () => {
      setState((prevState) => ({
        ...prevState,
        isMobileView: window.innerWidth < 1000,
      }));
    };
    window.addEventListener("resize", handleResize as EventListener);

    return () => {
      window.removeEventListener("resize", handleResize as EventListener);
    };
  }, []);

  const { isMobileView, isMenuOpen } = state;

  return (
    <nav
      className={`bg-[--black] sticky top-0 z-50 transition-700 border-b-4 border-transparent hover:border-[#f1efe7] hover:shadow-navbar ${
        !isMenuOpen ? "rounded-b-4xl" : "rounded-b-[0px]"
      }`}
    >
      <div className="w-full m-auto pt-2 pb-4 flex gap-0 xl:gap-10 items-center px-8 tablet:px-20 laptop:px-28 xl:px-[13rem] 2xl:px-64 justify-between">
        {/* Logo component */}
        <Logo />
        {/* Render hamburger menu icon for mobile view */}
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
          // Render desktop menu items and quote button
          <>
            <div className="flex-grow flex justify-center">
              <ul className="text-base flex gap-6 laptop:gap-10 xl:gap-16 text-white my-auto px-7 rounded-4xl border border-transparent transition-700 hover:shadow-small hover:shadow-white hover:border-white">
                <MenuItems type="desktop" />
              </ul>
            </div>
            <QuoteButton />
          </>
        )}
      </div>
      {/* Render mobile menu */}
      <MobileMenu isOpen={isMenuOpen} handleClick={handleToggle} />
    </nav>
  );
};
