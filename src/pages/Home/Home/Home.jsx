import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contaact";
import Footer from "../Footer/Footer";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
