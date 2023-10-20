import React from "react";
import { experienceData } from "../textData";
import "./Experience.scss";

function Experience() {
  const dataElements = experienceData.map((el, id) => (
    <main key={id} className="experience-container">
      <section className="company-date">
        <h4>{el.info.company}</h4>
        <p>{el.date}</p>
      </section>
      <section>
        <h4>{el.info.job}</h4>
        <p>{el.info.description}</p>
      </section>
    </main>
  ));

  return <div>{dataElements}</div>;
}

export default Experience;
