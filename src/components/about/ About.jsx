import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { TiSortNumericallyOutline } from "react-icons/ti";
import { BsFillDice2Fill } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>my Projects</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About " />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__icon">
              <a href="https://sunilreddy-chinthaparthi.github.io/Dise_Game/">
                <BsFillDice2Fill className="icon" />
              </a>
              <h5>Dice Game</h5>
            </article>

            <article className="about__icon">
              <a href="https://sunilreddy-chinthaparthi.github.io/Guess-my-number/">
                <TiSortNumericallyOutline className="icon" />
              </a>
              <h5>Guess My Number</h5>
            </article>

            <article className="about__icon">
              <a href="https://sunilreddy-chinthaparthi.github.io/State-Bank-Of-India/">
                <BsBank className="icon" />
              </a>
              <h5>State Bank Of India</h5>
            </article>
          </div>

          <p>
            Fascinated by data and the cognisance it provides. Relish solving
            challenging problems. Passionate about implementing and launching
            new projects. Open to learn and experience new things.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
