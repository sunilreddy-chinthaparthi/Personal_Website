import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>VIDEOGRAPHY</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Marriage Video</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Promotional and Marketing</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Music Videos</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Documentary Filmmaking</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Social Media Content</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Post-Production Services</p>
            </li>
          </ul>
        </article>
        {/* end of uiux design */}
        <article className="services">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Web Design</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Front-End Development</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Back-End Development</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Full-Stack Development</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Performance Optimization</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Maintenance and support</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className="services">
          <div className="service__head">
            <h3>DRAWING</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Graphite Drawings</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Custom Portraits</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>3D Shading</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>People portraits</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Enhanced Depth pictures</p>
            </li>{" "}
            {/* <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
