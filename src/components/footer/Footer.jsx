import React from "react";
import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { GiSittingDog } from "react-icons/gi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <GiSittingDog />
        <h2>Designer World</h2>
      </a>

      <ul className="permailinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Projects</a>
        </li>
        <li>
          <a href="#projects">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Coontact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/i_sunil_reddy/" target="blank">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/I_Sunil_Reddy" target="_blank">
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://www.linkedin.com/in/sunilreddy-chinthaparthi/"
          target="blank"
        >
          <FaLinkedin />
        </a>
      </div>

      <div>
        <small>&copy; sunilreddy chinthaparthi </small>
      </div>
    </footer>
  );
};
export default Footer;
