import React from "react";
import ownself from "../images/banner/ownself.jpg";
import Button from "./Button/Button";

const About = () => {
  return (
    <div className="mt-28" id="about">
      <h1 className="contact">About Me</h1>
      <div className="mt-20 ">
        <div className="min-h-screen ">
          <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center justify-center w-[95%] mx-auto my-auto">
            <div className="">
              <img
                src={ownself}
                className="max-w-sm rounded-lg shadow-2xl rounded-full"
              />
            </div>
            <div className="">
              <h1 className="text-5xl font-bold">I'm a MERN stack Developer</h1>

              <p className="py-6">
                Hello,hope you are well. My name is{" "}
                <span className="text-lg font-bold text-orange-500 px-2 tracking-widest ">
                  Shameem Ahamd.
                </span>{" "}
                <br />I am Junior MERN stack web developer. <br />I have a lot
                of interest in Programming. And also Developing. <br />
                That's why i learned web developing by MERN and core html,
                <br />
                css,Javascript and with another technologies. <br />
                And i'm trying to learn more programming language
                <br /> beside my study and web development.
              </p>
              <a href="#contact">
                <Button>
                  <span className="font-bold">Contact Me</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
