import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import Music from "../../assets/music.mp3";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Heelo I'm</h5>
        <div>
          <h1>Sunil Reddy</h1>
          <h5 className="text-light">Full satck developer</h5>

          <div className="music">
            <audio controls src={Music}></audio>
            <h5>Explore with my favorate song !!! 𝄞 </h5>
          </div>
        </div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
