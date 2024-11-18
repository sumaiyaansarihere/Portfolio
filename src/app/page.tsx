import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
// import ProjectList from "./components/ProjectList"; // Uncomment if needed

const Page: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="project">
        <Project />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Page;