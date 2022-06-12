import React, { useEffect, useState } from "react";
import About from "../../About";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Contact from "../Contact/Contact";
import { BiUpArrowCircle } from "react-icons/bi";
import "./Home.css";

import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  const [show, setShow] = useState(false);
  window.onscroll = function () {
    if (window.pageYOffset >= 310) {
      // console.log("this is if", window.pageYOffset);
      setShow(true);
    } else {
      // console.log("thi is else", window.pageYOffset);
      setShow(false);
    }
  };
  function scrollToTop() {
    // window.scrollTo(0, 0);  //without animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }); //with smooth animate
  }
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Blogs></Blogs>
      <button
        id="btnScrollToTop"
        onClick={scrollToTop}
        className={show ? "block" : "hidden"}
      >
        <div className="text-3xl text-black bg- bg-orange-500 w-12 h-12 flex justify-center items-center rounded-bl-lg">
          <BiUpArrowCircle />
        </div>
      </button>
    </div>
  );
};

export default Home;
