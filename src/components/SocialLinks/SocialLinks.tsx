import React from "react";
import {
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
} from "react-icons/fa6";
import { RiFacebookCircleLine as Facebook } from "react-icons/ri";
import { FiYoutube as Youtube } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SocialLinkProps, SocialLinksProps } from "../../interface";

const SocialLink: React.FC<SocialLinkProps> = ({
  to,
  icon: Icon,
  className = "",
}) => (
  <div
    className={
      `rounded-full hover:text-[--secound] transition-all duration-500 ` +
      className
    }
  >
    <Link to={to} target="_blank">
      <Icon />
    </Link>
  </div>
);

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  objectClassName = "",
}) => (
  <div className={className}>
    <SocialLink
      to=""
      icon={Facebook}
      className={objectClassName + "text-3xl pb-2"}
    />
    <SocialLink
      to=""
      icon={Instagram}
      className={objectClassName + "text-2xl pt-1"}
    />
    <SocialLink
      to=""
      icon={Youtube}
      className={objectClassName + "text-2xl pt-1"}
    />
    <SocialLink
      to=""
      icon={Twitter}
      className={objectClassName + "text-2xl pt-1"}
    />
  </div>
);
