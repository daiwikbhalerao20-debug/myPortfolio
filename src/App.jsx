import React, { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; 
import "./App.css";

import Hero from "./components/Hero";
const About = lazy(() => import("./Components/About"));
const Skills = lazy(() => import("./Components/Skills"));
const Projects = lazy(() => import("./Components/Projects"));
const Resume = lazy(() => import("./Components/Resume"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
