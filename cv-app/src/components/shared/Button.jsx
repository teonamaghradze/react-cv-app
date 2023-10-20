import React from "react";
import "./Button.scss";

function Button({ btnName, className, icon }) {
  return (
    <button className={className}>
      {icon} <span>{btnName}</span>
    </button>
  );
}

export default Button;
