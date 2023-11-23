// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full h-[646px] top-[-3px] left-0 bg-gradient-to-b from-blue-800 via-blue-400 to-transparent">
        <Navbar />
        <Home />
      </div>
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
