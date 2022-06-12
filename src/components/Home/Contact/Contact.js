import React from "react";
import Button from "../../Button/Button";
import "./Contact.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import emailjs from "emailjs-com";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8tn26qc",
        "template_ll52ffk",
        e.target,
        "gBqWI39kw6u9B64VY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div id="contact">
        <h1 className="contact mt-14 ">Contact Me</h1>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 mt-16">
        <div className="sm:mx-auto sm:mb-5 md:mx-auto md:mb-5 lg:mx-auto w-1/2">
          <div>
            <h1 className="text-lg font-bold xs:ml-10">Get in Touch</h1>
            <p className="font-semibold mb-6 sm:text-center">
              If you have any query want to ask me or want to give me any
              important message, you can send me a message at any time and yes,
              I will try to reply to your message in your email.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center mb-5 ">
            <span className="text-3xl">
              {" "}
              <FaPhone />
            </span>
            <div>
              <p className="mb-1 font-semibold">Cell</p>
              <p className="font-semibold">(+088) 01637575916</p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center mb-5">
            <span className="text-3xl">
              {" "}
              <MdEmail />
            </span>
            <div>
              <p className="mb-1 font-semibold">Email</p>
              <p className="font-semibold">shameemahmad.sa7@gmail.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center mb-5">
            <span className="text-3xl">
              {" "}
              <BsWhatsapp />
            </span>
            <div>
              {" "}
              <p className="mb-1 font-semibold">WhatsApp</p>
              <p className="font-semibold">(+088) 01637575916</p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <span className="text-3xl ">
              {" "}
              <GoLocation />
            </span>
            <div>
              <p className="mb-1 font-semibold">Address</p>
              <p className="font-semibold">
                Hospital road/South Mandari/Lakshmipur/Chittgong <br />
                BANGLADESH
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ border: "1px solid gold", height: "470px" }}
          className="card shadow-2xl mx-w-sm w-1/2 sm:mx-auto md:mx-auto"
        >
          <div className="card-body">
            <form onSubmit={handleContact} className="flex flex-col" action="">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered input-secondary "
                name="name"
                required
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-secondary "
                name="email"
                required
              />
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered input-secondary "
                name="subject"
                required
              />
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                className="textarea textarea-info"
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <div className="mt-6 mx-auto">
                <Button type="submit" className=" mx-auto">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
