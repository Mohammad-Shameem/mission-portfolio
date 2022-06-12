import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../Button/Button";
import bannerImg from "../../images/banner/Blog-Banner-Head-2.webp";

const Banner = () => {
  const { text } = useTypewriter({
    words: ["MERN Stack Developer", "Full-Stack Developer", "React Developer"],
    loop: 0,
    delaySpeed: 1500,
    typeSpeed: 150,
    deleteSpeed: 150,
  });
  return (
    <div className=" grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 min-h-screen w-[100%] justify-center items-center bg-[#121827]">
      <div className="mr-10 ml-5 mt-14 md:mx-auto sm:mx-auto ">
        <h1 className="text-3xl font-bold mb-3">
          Wellcome to my{" "}
          <span className="text-4xl text-orange-500 font-bold">Portfolio</span>
        </h1>
        <h1 className="text-3xl mb-3">
          My Name is{" "}
          <span className="text-orange-500 font-bold text-4xl">
            Shameem Ahmad
          </span>
        </h1>
        <h1 className="text-2xl font-bold mb-5">
          I'm a
          {
            <sapn className="text-3xl text-orange-500 font-bold">
              {" "}
              {text} <Cursor></Cursor>
            </sapn>
          }
        </h1>

        <a
          href="https://drive.google.com/file/d/1iEKrmXdvyfLF1tHsMNDbqPn_SC17W1Nx/view?usp=sharing"
          target="_blank"
        >
          {" "}
          <Button>
            <span className="font-bold">Download Resume</span>
          </Button>
        </a>
      </div>
      <div className="sm:m-10 md:m-10 lg:m-0">
        <img
          className="  "
          // src="https://thumbs.gfycat.com/ColorlessBitesizedKob-max-1mb.gif"
          src="https://portfolio-99f0c.web.app/static/media/animation_500_l48kv2qd.82d8a843ba46ed058961.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
