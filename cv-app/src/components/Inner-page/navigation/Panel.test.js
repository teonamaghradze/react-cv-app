import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Panel from "./Panel";

describe("Panel Component", () => {
  it("should render the component", () => {
    render(<Panel />);
    const component = screen.getByRole("main");
    expect(component).toBeInTheDocument();
  });

  it("should render sections with icons and labels", () => {
    render(<Panel />);
    const sections = screen.getAllByRole("button");

    expect(sections).toHaveLength(7);

    const sectionLabels = [
      "About Me",
      "Education",
      "Experience",
      "Skills",
      "Portfolio",
      "Contacts",
      "Feedback",
    ];

    const sectionIcons = [
      "fa-user",
      "fa-graduation-cap",
      "fa-pencil",
      "fa-gem",
      "fa-suitcase",
      "fa-location-arrow",
      "fa-comment",
    ];

    sections.forEach((section, index) => {
      const icon = screen.getByRole("img", { name: /icon/i });

      const label = screen.getByText(sectionLabels[index]);

      expect(icon).toHaveClass(`fa ${sectionIcons[index]}`);
      expect(label).toBeInTheDocument();
    });
  });

  it("should call scrollToSection when a section is clicked", () => {
    const scrollToSectionMock = jest.fn();
    render(
      <Panel
        scrollToSection={scrollToSectionMock}
        aboutMeRef={null}
        educationRef={null}
        experienceRef={null}
        skillsRef={null}
        portfolioRef={null}
        contactsRef={null}
        feedbackRef={null}
      />
    );

    const sections = screen.getAllByRole("button");

    sections.forEach((section, index) => {
      fireEvent.click(section);
      expect(scrollToSectionMock).toHaveBeenCalledWith(expect.any(HTMLElement));
    });
  });
});
