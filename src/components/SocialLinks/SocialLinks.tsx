import React from "react";
import {
  FaFacebook as Facebook,
  FaTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { SocialLinkProps } from "../../types";

const SocialLink: React.FC<SocialLinkProps> = ({ to, icon: Icon }) => (
  <div className="p-2 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-500">
    <Link to={to} target="_blank">
      <Icon />
    </Link>
  </div>
);

export const SocialLinks: React.FC = () => (
  <>
    <SocialLink to="" icon={Facebook} />
    <SocialLink to="" icon={Instagram} />
    <SocialLink to="" icon={Twitter} />
    <SocialLink to="" icon={Linkedin} />
  </>
);
