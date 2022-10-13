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
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* end of uiux design */}
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* end of web development */}
        <article className="services">
          <div className="service__head">
            <h3>Drawings</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>{" "}
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;
