import React from "react";
import "./Skills.css";
import { FaGlobe } from "react-icons/fa";
import { SiAnchor } from "react-icons/si";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaCommentDollar } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skill">
      <h1 className=" text-4xl font-bold tracking-widest text-center mb-16 mt-28 ">
        MY <span className="text-orange-500">SKILLS</span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-[90%] mx-auto">
        <div className="card card-compact w-96  shadow-xl card-style">
          <figure>
            <div className="avatar placeholder mt-5 mb-5">
              <div className="bg-blue-100 text-neutral-content rounded-full w-24">
                <span className="text-5xl text-orange-500">
                  <FaGlobe />
                </span>
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-lg font-bold">Web Development</h2>
            <p className=" pt-5 pb-10 text-center ">
              As a Web Developer, I'm responsible for <br />
              making and maintaining a website. I can develop your <br />
              website and make your website fast .
            </p>
          </div>
        </div>
        <div className="card card-compact w-96  shadow-xl card-style">
          <figure>
            <div className="avatar placeholder mt-5 mb-5">
              <div className="bg-blue-100 text-neutral-content rounded-full w-24">
                <span className="text-5xl text-orange-400">
                  <SiAnchor />
                </span>
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-lg font-bold">Creative Design</h2>
            <p className=" pt-5 pb-10 text-center ">
              We have new creativity in every website <br />
              design. You can easily get any kind of <br />
              website from us for your work.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96  shadow-xl card-style">
          <figure>
            <div className="avatar placeholder mt-5 mb-5">
              <div className="bg-blue-100 text-neutral-content rounded-full w-24">
                <span className="text-5xl text-orange-500">
                  <FaPaintBrush />
                </span>
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-lg font-bold">Bug Cleaning</h2>
            <p className=" pt-5 pb-10 text-center ">
              A simple Bug can destroy your website it <br />
              can make your site useless.Hire me if <br />
              there any bugs in your website . <br />I will take care of them.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96  shadow-xl card-style">
          <figure>
            <div className="avatar placeholder mt-5 mb-5">
              <div className="bg-blue-100 text-neutral-content rounded-full w-24">
                <span className="text-5xl text-orange-500">
                  <MdOutlineBrandingWatermark />
                </span>
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-lg font-bold">SPA Using React</h2>
            <p className=" pt-5 pb-10 text-center ">
              These days SPA is much popular. <br />
              It can make your website too fast. <br />
              It can reduce your code and reduce waiting <br />
              time.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96  shadow-xl card-style">
          <figure>
            <div className="avatar placeholder mt-5 mb-5">
              <div className="bg-blue-100 text-neutral-content rounded-full w-24">
                <span className="text-5xl text-orange-500">
                  <FaAccessibleIcon />
                </span>
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-lg font-bold">
              Responsive Website Design
            </h2>
            <p className=" pt-5 pb-10 text-center ">
              We leverage the concept of mobile-first design. <br />
              Through our work, we focus on designing an <br />
              experience that works across different screen <br />
              sizes.
            </p>
          </div>
        </div>
        <div className="card card-compact w-96  shadow-xl card-style">
          <figure>
            <div className="avatar placeholder mt-5 mb-5">
              <div className="bg-blue-100 text-neutral-content rounded-full w-24">
                <span className="text-5xl text-orange-500">
                  <FaCommentDollar />
                </span>
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className=" text-center text-lg font-bold">UX Consultation</h2>
            <p className=" pt-5 pb-10 text-center ">
              If you don’t know what kind of service to <br />
              request from us, don’t worry. We can help and see what fits your
              business and your budget. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
