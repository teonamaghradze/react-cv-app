import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSkill } from "./skillsSlice";

const SkillForm = () => {
  const [skillName, setSkillName] = useState("");
  const [skillRange, setskillRange] = useState("");
  const dispatch = useDispatch();

  const formFieldsAreValid = (name, range) => {
    if (name === "") return false;
    if (range === "") return false;
    if (isNaN(range)) return false;
    if (+range < 10 || +range > 100) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkill({ skillName, skillRange }));
  };

  return (
    <form onSubmit={handleSubmit} style={{ paddingBottom: 50 }}>
      <div>
        <label htmlFor="skill-name">Skill name</label>
        <input
          placeholder="Enter skill name"
          type="text"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="skill-level">Skill level</label>
        <input
          placeholder="Enter skill level"
          type="text"
          value={skillRange}
          onChange={(e) => setskillRange(e.target.value)}
        />
      </div>
      <button
        style={{
          color: "black",
          border: "1px solid green",
          padding: 10,
        }}
        type="submit"
        disabled={!formFieldsAreValid(skillName, skillRange)}
      >
        Add skill
      </button>
    </form>
  );
};

export default SkillForm;
