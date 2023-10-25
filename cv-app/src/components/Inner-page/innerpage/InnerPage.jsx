import React, { useRef, useState } from "react";
import "./InnerPage.scss";
import { aboutMe } from "../textData";
import Box from "../box/Box";
import Navigation from "../navigation/Navigation";
import TimeLine from "../timeline/TimeLine";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Contacts from "../contacts/Contacts";
import BackToTopButton from "../../shared/BackToTopButton";
import Feedback from "../feedback/Feedback";

function InnerPage() {
  //// Create refs for each section
  const aboutMeRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactsRef = useRef(null);
  const feedbackRef = useRef(null);

  const [linkClicked, setLinkClicked] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });

    setLinkClicked(() => linkClicked === true);
  };

  return (
    <main className="whole-inner-page">
      <Navigation
        scrollToSection={scrollToSection}
        aboutMeRef={aboutMeRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
        contactsRef={contactsRef}
        feedbackRef={feedbackRef}
      />

      <div className="boxes">
        <section ref={aboutMeRef}>
          <Box title="About me" mainTxt={aboutMe} />
        </section>

        <section ref={educationRef}>
          <Box title="Education" mainTxt={<TimeLine />} />
        </section>

        <section ref={experienceRef}>
          <Box title="Experience" mainTxt={<Experience />} />
        </section>

        <section ref={skillsRef}>
          <Box title={"Skills"} mainTxt={<Skills />} />
        </section>

        <section ref={portfolioRef}>
          <Box title="Portfolio" mainTxt={<Portfolio />} />
        </section>

        <section ref={contactsRef}>
          <Box title="Contacts" mainTxt={<Contacts />} />
        </section>

        <section ref={feedbackRef}>
          <Box title="Feedback" mainTxt={<Feedback />} />
        </section>
      </div>

      <BackToTopButton />
    </main>
  );
}

export default InnerPage;
