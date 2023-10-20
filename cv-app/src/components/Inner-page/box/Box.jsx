import React from "react";
import "./Box.scss";

function Box({ title, mainTxt }) {
  return (
    <>
      <header>{title}</header>
      <main>{mainTxt}</main>
    </>
  );
}

export default Box;
