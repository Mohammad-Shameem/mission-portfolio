import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="h-40 w-[100%] footer ">
      <div className="w-[50%] ml-[46%] ">
        <div className=" grid grid-cols-3 gap-10 mt-5 ">
          <a href="https://www.facebook.com/Mehmetsaki778/" target="_blank">
            <span className="text-2xl">
              <BsFacebook></BsFacebook>
            </span>
          </a>
          <a
            href="https://github.com/Mohammad-Shameem?tab=repositories"
            target="_blank"
          >
            <span className="text-2xl">
              <BsGithub></BsGithub>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/shameem-ahmad-a1b285241/"
            target="_blank"
          >
            <span className="text-2xl">
              <BsLinkedin></BsLinkedin>
            </span>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center footer-text w-1/4 mx-auto">
        <span>
          <BiCopyright />
        </span>{" "}
        <p>
          Shameem Ahmad Portfolio {new Date().getFullYear()}. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
