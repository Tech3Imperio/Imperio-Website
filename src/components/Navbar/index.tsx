import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { whiteLogo } from "../../assets/Images";
import { MenuItemProps, MobileMenuProps, MenuItemsProps } from "../../types";
import { QuoteButton, DealershipButton } from "../Quote/Button/index";
import { SocialLinks } from "../SocialLinks/index";
import styles from "./Navbar.module.css";
// import { SlHandbag } from "react-icons/sl";
import { PiUserCircle } from "react-icons/pi";
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
  <div className="py-0 relative w-max">
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
      { to: "/career", label: "Career" },
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
    className={`fixed z-10 w-screen h-auto left-0 bg-[--black] rounded-b-4xl text-white transition-700 overflow-hidden border-b-4 ${
      isOpen
        ? "top-[5.5rem] pb-6 border-[#f1efe7] shadow-navmobile"
        : "-top-[30rem] pb-0"
    }`}
    aria-hidden={!isOpen}
  >
    <section className="px-8">
      <div className="flex flex-col pt-4 gap-5 text-lg font-light">
        {/* Render mobile menu items */}
        <MenuItems handleClick={handleClick} type="mobile" />
        <div className="flex flex-col justi">
          {/* Social links component */}
          <SocialLinks className="flex py-4 gap-4 text-xs text-white" />
          <div className=" flex items-center gap-2">
            <div onClick={handleClick}>
              <DealershipButton />
            </div>
            <div onClick={handleClick}>
              <QuoteButton />
            </div>
            <Link to="/dealer-login">
              <PiUserCircle size={50} />
            </Link>
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

  // const navigate = useNavigate();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     localStorage.removeItem("LoginToken");
  //   }, 1200);

  //   timer !== null ? navigate("/") : navigate("/products");

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  // const isDealerLogedIn = localStorage.getItem("LoginToken");

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
        isMobileView: window.innerWidth < 1024,
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
      <div className="max-w-7xl mx-auto px-14 pt-2 pb-4 flex gap-0 xl:gap-1 items-center justify-between">
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
              <ul className="text-base flex gap-6 h-11 laptop:gap-10 xl:gap-7 justify-center items-center text-white my-auto px-7 rounded-4xl border border-transparent transition-700 hover:shadow-small hover:shadow-white hover:border-white">
                <MenuItems type="desktop" />
              </ul>
            </div>
            <div className=" flex gap-6 justify-center items-center">
              <DealershipButton />
              <QuoteButton />
              <Link to="/dealer-login" className=" flex justify-center pt-2">
                {/* <span className="text-white">Login</span>{" "} */}
                <PiUserCircle
                  size={50}
                  className="text-white rounded-full flex items-center justify-center hover:bg-[--black] hover:text-[--secound] transition-700 cursor-pointer"
                />{" "}
              </Link>
              {/* {isDealerLogedIn ? (
                <button className="rounded-full h-10 w-10 p-2 text-black bg-white flex justify-center items-center">
                  <SlHandbag size={28} />
                </button>
              ) : (
                <></>
              )} */}
            </div>
          </>
        )}
      </div>
      {/* Render mobile menu */}
      <MobileMenu isOpen={isMenuOpen} handleClick={handleToggle} />
    </nav>
  );
};
