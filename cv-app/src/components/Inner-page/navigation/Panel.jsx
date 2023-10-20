import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPencil,
  faSuitcase,
  faLocationArrow,
  faComment,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

import "./Panel.scss";

function Panel({
  scrollToSection,
  aboutMeRef,
  educationRef,
  experienceRef,
  skillsRef,
  portfolioRef,
  contactsRef,
  feedbackRef,
}) {
  return (
    <main className="panel-container">
      <section onClick={() => scrollToSection(aboutMeRef)}>
        <FontAwesomeIcon icon={faUser} className="icon" />
        <p>About Me</p>
      </section>
      <section onClick={() => scrollToSection(educationRef)}>
        <FontAwesomeIcon icon={faGraduationCap} className="icon" />
        <p className="education">Education</p>
      </section>
      <section onClick={() => scrollToSection(experienceRef)}>
        <FontAwesomeIcon icon={faPencil} className="icon" />
        <p>Experience</p>
      </section>
      <section onClick={() => scrollToSection(skillsRef)}>
        <FontAwesomeIcon icon={faGem} className="icon" />
        <p>Skills</p>
      </section>
      <section onClick={() => scrollToSection(portfolioRef)}>
        <FontAwesomeIcon icon={faSuitcase} className="icon" />
        <p>Portfolio</p>
      </section>
      <section onClick={() => scrollToSection(contactsRef)}>
        <FontAwesomeIcon icon={faLocationArrow} className="icon" />
        <p>Contacts</p>
      </section>
      <section onClick={() => scrollToSection(feedbackRef)}>
        <FontAwesomeIcon icon={faComment} className="icon" />
        <p>Feedback</p>
      </section>
    </main>
  );
}

export default Panel;
