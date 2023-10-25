import React, { useState } from "react";
import Button from "../../shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Skills.scss";
import SkillForm from "./SkillForm";
import { useSelector } from "react-redux";

//WARNING! this component paints over the next component(teona fix this)
function Skills() {
  //pull skills from the redux store
  const skills = useSelector((state) => state.skills);
  //state to show form to add new skills
  const [showForm, setShowForm] = useState(false);

  //toggling form on button click
  const handleShowForm = () => {
    setShowForm((sf) => !sf);
  };

  return (
    <>
      <div onClick={handleShowForm} className="skills-container">
        <Button
          icon={<FontAwesomeIcon icon={faPenToSquare} />}
          btnName="Open edit"
          className="dark-btn edit-btn"
        />
      </div>
      {showForm && <SkillForm />}
      <div style={{ height: 5, paddingBottom: 50 }}>
        <div
          style={{
            paddingBottom: 30,

            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {skills.map((skill) => {
            return (
              <span
                style={{
                  backgroundColor: "#26c17e",
                  color: "white",
                  padding: "8px 25px",
                  width: `${skill.skillRange}%`,
                }}
              >
                {skill.skillName}
              </span>
            );
          })}
        </div>
        <div className="level">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Beginner</span>
          <span>Proficient</span>
          <span>Expert</span>
          <span>Master</span>
        </div>
      </div>
    </>
  );
}

export default Skills;
