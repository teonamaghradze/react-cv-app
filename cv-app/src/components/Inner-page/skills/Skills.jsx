import React from "react";
import Button from "../../shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Skills.scss";

function Skills() {
  return (
    <div>
      <div className="skills-container">
        <Button
          icon={<FontAwesomeIcon icon={faPenToSquare} />}
          btnName="Open edit"
          className="dark-btn edit-btn"
        />
      </div>

      <div className="level">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>
        <span>Beginner</span>
        <span>Proficient</span>
        <span>Expert</span>
        <span>Master</span>
      </div>
    </div>
  );
}

export default Skills;
