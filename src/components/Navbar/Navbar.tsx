import styles from "./Navbar.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { whiteLogo } from "../../assets/images";
import { MenuItemProps, MobileMenuProps } from "../../types";

const Logo: React.FC = () => (
  <Link to="/home" className="navbar-brand">
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
    className={`fixed top-[8vh] right-0 w-full bg-[--black] text-white z-50 transition-all duration-700 overflow-hidden ${
      isOpen ? "h-[30vh]" : "h-0 "
    }`}
  >
    {/* <header className="w-full flex justify-between pt-6 px-8">
      <Logo />
      <button
        className="text-4xl"
        onClick={handleClose}
        title="Toggle close"
        type="button"
      >
        <RiCloseCircleLine />
      </button>
    </header> */}
    <section>
      <ul className="p-8 text-lg">
        <MenuItems />
      </ul>
    </section>
    <footer
      className={`pt-4 relative transition-all duration-700 ${
        isOpen ? "right-0" : "right-[-150px]"
      }`}
    >
      <SocialLinks className="flex justify-center gap-10 text-2xl text-white" />
    </footer>
  </div>
);

export const Navbar: React.FC = () => {
  const [width, setWidth] = useState<boolean>(window.innerWidth < 1000);
  const [open, setOpen] = useState<boolean>(false);
  const hidden = useRef("hidden");

  const handleToggle = () => {
    setOpen(!open);
    setTimeout(() => {
      hidden.current = hidden.current == "" ? "hidden" : "";
      console.log(hidden.current);
    }, 2000);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`bg-[--black] sticky top-0 z-50 ${
        !open && "rounded-b-[30px]"
      }`}
    >
      <div className="w-full m-auto py-2 flex items-center pl-12 pr-12 max-md:py-5 justify-between">
        <Logo />
        {width ? (
          <button
            className="text-[--white]"
            onClick={handleToggle}
            title="Toggle open"
          >
            <div id={styles.nav_icon3} className={open ? styles.open : ""}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        ) : (
          <>
            <div className="flex-grow flex justify-center">
              <ul className=" text-lg flex gap-16 text-white my-auto hover:border-2 shadow-md hover:shadow-white px-7 rounded-[30px]">
                <MenuItems />
              </ul>
            </div>
            <Link to="/" className="button">
              GET A QUOTE
            </Link>
          </>
        )}
      </div>
      <MobileMenu isOpen={open} />
    </nav>
  );
};
