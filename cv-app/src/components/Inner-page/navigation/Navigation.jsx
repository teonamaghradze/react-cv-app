import React, { useState } from "react";
import PhotoBox from "../../shared/PhotoBox";

import Panel from "./Panel";
import Button from "../../shared/Button";
import "./Navigation.scss";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navigation({
  scrollToSection,
  aboutMeRef,
  educationRef,
  experienceRef,
  skillsRef,
  portfolioRef,
  contactsRef,
  feedbackRef,
}) {
  const [navIsShown, setNavIsShown] = useState(true);

  //hide navigation while clicking burger menu
  function burgerClick() {
    setNavIsShown(() => !navIsShown);
  }

  let fullName = "John Doe";
  return (
    <main className="navigation-burger-container">
      {navIsShown && (
        <section className="navigation-container">
          <PhotoBox
            fullName={fullName}
            className="navigation-photo-box avatar-name avatar"
          />
          <Panel
            scrollToSection={scrollToSection}
            aboutMeRef={aboutMeRef}
            educationRef={educationRef}
            experienceRef={experienceRef}
            skillsRef={skillsRef}
            portfolioRef={portfolioRef}
            contactsRef={contactsRef}
            feedbackRef={feedbackRef}
          />

          <Link to="/">
            <Button
              btnName={
                <div className="goback-btn">
                  <p>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </p>
                  <span className="goback-btn-txt">Go Back</span>
                </div>
              }
              className="dark-btn"
            />
          </Link>
        </section>
      )}
      <FontAwesomeIcon
        onClick={burgerClick}
        icon={faBars}
        className="burger-menu"
      />
    </main>
  );
}

export default Navigation;
