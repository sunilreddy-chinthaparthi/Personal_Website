import React from "react";
import "./projects.css";
import CTA from "./CTA";
import { BsFillPatchCheckFill } from "react-icons/bs";
const projects = () => {
  return (
    <section id="projects">
      <h5>List of </h5>
      <h2>Skills I Have</h2>
      <div className="container projects__container">
        <div className="software__languages">
          <h3>programming languages</h3>
          <div className="programs__contant">
            <article
              className="
            language"
            >
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
            </article>
            <article
              className="
            language"
            >
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
            </article>{" "}
            <article
              className="
            language"
            >
              <BsFillPatchCheckFill />
              <h4>BOOATSTRAP</h4>
            </article>{" "}
            <article
              className="
            language"
            >
              <BsFillPatchCheckFill />
              <h4>JAVASCRIPT</h4>
            </article>{" "}
            <article
              className="
            language"
            >
              <BsFillPatchCheckFill />
              <h4>REACT</h4>
            </article>{" "}
            <article
              className="
            language"
            >
              <BsFillPatchCheckFill />
              <h4>PYTHON</h4>
            </article>
          </div>
        </div>
        <div className="designingAndEditing">
          <h3>Software Tools & Designning</h3>
          <div className="tool__content">
            <article className="Tools">
              <BsFillPatchCheckFill />
              <h4>Git</h4>
            </article>{" "}
            <article className="Tools">
              <BsFillPatchCheckFill />
              <h4>VS Code</h4>
            </article>{" "}
            <article className="Tools">
              <BsFillPatchCheckFill />
              <h4>Pycharm</h4>
            </article>{" "}
            <article className="Tools">
              <BsFillPatchCheckFill />
              <h4>Photoshop</h4>
            </article>
            <article className="Tools">
              <BsFillPatchCheckFill />
              <h4>Light Room</h4>
            </article>{" "}
            <article className="Tools">
              <BsFillPatchCheckFill />
              <h4>fusion360</h4>
            </article>
          </div>
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default projects;
