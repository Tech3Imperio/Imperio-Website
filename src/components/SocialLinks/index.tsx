import React from "react";
// Importing social media icons from react-icons library
import {
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
} from "react-icons/fa6";
import { RiFacebookCircleLine as Facebook } from "react-icons/ri";
import { FiYoutube as Youtube } from "react-icons/fi";
// Importing Link component from react-router-dom for navigation
import { Link } from "react-router-dom";
// Importing custom types for props
import { SocialLinkProps, SocialLinksProps } from "../../types";

// Functional component for individual social link
const SocialLink: React.FC<SocialLinkProps> = ({
  to, // URL to navigate to
  icon: Icon, // Icon component to display
  className = "", // Additional CSS classes
}) => (
  <div
    className={
      `rounded-full hover:text-[--secound] transition-700 ` + className // Applying classes for styling and hover effect
    }
  >
    <Link to={to} target="_blank">
      {" "}
      {/* Link to the social media URL */}
      <Icon /> {/* Render the icon component */}
    </Link>
  </div>
);

// Functional component for rendering multiple social links
export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "", // Additional CSS classes for container
  objectClassName = "", // Additional CSS classes for individual social link
}) => (
  <div className={className} aria-label="social-links">
    <SocialLink
      aria-label="facebook btn"
      to="https://www.facebook.com/imperiorailingsystem" // Facebook URL
      icon={Facebook} // Facebook icon component
      className={objectClassName + "text-3xl pb-2"} // Additional styling for Facebook link
    />
    <SocialLink
      aria-label="instagram btn"
      to="https://www.instagram.com/imperio.railings/?igsh=OWlmaXB6NnJpcWJ0" // Instagram URL
      icon={Instagram} // Instagram icon component
      className={objectClassName + "text-2xl pt-1"} // Additional styling for Instagram link
    />
    <SocialLink
      aria-label="youtube btn"
      to="https://www.youtube.com/channel/UCfc7xvEAq7E1KPy6xFA_msg" // YouTube URL
      icon={Youtube} // YouTube icon component
      className={objectClassName + "text-2xl pt-1"} // Additional styling for YouTube link
    />
    <SocialLink
      aria-label="x btn"
      to="https://x.com/ImperioRailing" // Twitter URL
      icon={Twitter} // Twitter icon component
      className={objectClassName + "text-2xl pt-1"} // Additional styling for Twitter link
    />
  </div>
);
