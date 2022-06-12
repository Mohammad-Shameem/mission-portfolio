import React from "react";
import "./Button.css";
const Button = ({ children }) => {
  return (
    <button className="all-button">
      <article></article>
      {children}
    </button>
  );
};

export default Button;
