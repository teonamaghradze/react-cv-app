import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation Component", () => {
  it("should render the component with navigation shown", () => {
    render(<Navigation />);
    const component = screen.getByRole("main");
    expect(component).toBeInTheDocument();

    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
  });

  it("should hide the navigation when the burger menu is clicked", () => {
    render(<Navigation />);
    const burgerMenu = screen.getByRole("button", { name: "Open navigation" });

    let navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();

    fireEvent.click(burgerMenu);

    navigation = screen.queryByRole("navigation");
    expect(navigation).toBeNull();

    fireEvent.click(burgerMenu);

    navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
  });

  it("should pass scrollToSection and ref props to Panel component", () => {
    const scrollToSectionMock = jest.fn();
    const aboutMeRef = { current: null };
    const educationRef = { current: null };
    const experienceRef = { current: null };
    const skillsRef = { current: null };
    const portfolioRef = { current: null };
    const contactsRef = { current: null };
    const feedbackRef = { current: null };

    render(
      <Navigation
        scrollToSection={scrollToSectionMock}
        aboutMeRef={aboutMeRef}
        educationRef={educationRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
        contactsRef={contactsRef}
        feedbackRef={feedbackRef}
      />
    );

    const panelComponent = screen.getByRole("Panel");

    expect(panelComponent.props.scrollToSection).toBe(scrollToSectionMock);
    expect(panelComponent.props.aboutMeRef).toBe(aboutMeRef);
    expect(panelComponent.props.educationRef).toBe(educationRef);
    expect(panelComponent.props.experienceRef).toBe(experienceRef);
    expect(panelComponent.props.skillsRef).toBe(skillsRef);
    expect(panelComponent.props.portfolioRef).toBe(portfolioRef);
    expect(panelComponent.props.contactsRef).toBe(contactsRef);
    expect(panelComponent.props.feedbackRef).toBe(feedbackRef);
  });
});
