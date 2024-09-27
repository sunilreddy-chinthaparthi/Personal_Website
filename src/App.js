import React from "react";
import "./app.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/ About";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Particles from "./Particles";
const App = () => {
  return (
    <div>
      <Particles />
      <Header />
      <Nav />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
