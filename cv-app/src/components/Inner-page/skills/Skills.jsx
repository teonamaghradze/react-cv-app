import React, { useEffect } from "react";
import Button from "../../shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Skills.scss";
import SkillForm from "./SkillForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkillsFromServer,
  toggleForm,
  toggleSkillsLoading,
} from "./skillsSlice";
import { ClipLoader } from "react-spinners";

function Skills() {
  const dispatch = useDispatch();
  //pull skills from the redux store
  const skills = useSelector((state) => state.skills.skills);
  const isLoading = useSelector((state) => state.skills.isLoading);
  const isFormShowing = useSelector((state) => state.skills.isFormShowing);

  useEffect(() => {
    if (skills && skills.length === 0) {
      dispatch(toggleSkillsLoading());
      fetch("api/skills")
        .then((res) => res.json())
        .then((data) => {
          addSkillsFromServer(data.skills);
          dispatch(toggleSkillsLoading());
        })
        .catch((err) => {
          console.error(err);
          dispatch(toggleSkillsLoading());
        });
    }
  }, [skills, dispatch]);

  //toggling form on button click
  const handleShowForm = () => {
    dispatch(toggleForm());
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
      {isFormShowing && <SkillForm />}
      <div className="skills-level">
        <div
          style={{
            paddingBottom: 30,

            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {isLoading ? (
            <ClipLoader color="#36d7b7" />
          ) : (
            skills.map((skill) => {
              return (
                <span
                  key={skill.skillName}
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
            })
          )}
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
