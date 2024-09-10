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
        className={activeNav === "#" ? "active" : " "}
      >
        <BiHomeAlt />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : " "}
      >
        <GiBookmark />
      </a>

      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : " "}
      >
        <FaUserAstronaut />
      </a>

      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : " "}
      >
        <RiServiceLine />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : " "}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
