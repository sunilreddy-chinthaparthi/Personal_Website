import React from "react";
import "./nav.css";

import { BiHomeAlt } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";
import { GiBookmark } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className="{activeNav === '#' ? 'active' : '' }"
      >
        <BiHomeAlt />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className="{activeNav === '#about' ? 'active' : '' }"
      >
        <FaUserAstronaut />
      </a>

      <a href="#projects">
        <GiBookmark />
      </a>

      <a href="#services">
        <RiServiceLine />
      </a>

      <a href="#contact">
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
