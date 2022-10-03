import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => (
  <div className="header__socials">
    <a href="https://www.instagram.com/i_sunil_reddy/" target="blank">
      <GrInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/sunilreddy-chinthaparthi/"
      target="blank"
    >
      <BsLinkedin />
    </a>
    <a href="https://github.com/sunilreddy-chinthaparthi" target="blank">
      <BsGithub />
    </a>
  </div>
);

export default HeaderSocials;
