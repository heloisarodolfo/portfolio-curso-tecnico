// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full py-10 left-0 bg-customBlueRoyal">
        <Navbar />
        <Home />
      </div>
      <div className=" w-full py10 bg-customBlue">
      <About />
      </div>
      <div className="w-full py-10 left-0 bg-customBlueRoyal">
      <Skills />
      </div>
      <div className='w-full py10 bg-customBlue'>
      <Projects />
      </div>
      <div className="w-full py-10 left-0 bg-customBlueRoyal">
      <Contact />
      </div>
      <div className='w-full py10 bg-customBlue'>
      <Footer />
      </div>
      
    </>
  );
}

export default App;
