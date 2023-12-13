import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InnerPage from "./InnerPage";

describe("InnerPage Component", () => {
  it("should render the component", () => {
    render(<InnerPage />);
    const component = screen.getByRole("main");
    expect(component).toBeInTheDocument();
  });

  it("should render all sections", () => {
    render(<InnerPage />);
    const sections = screen.getAllByRole("region");
    expect(sections).toHaveLength(7); // Adjust the number of sections as needed
  });

  it("should scroll to the 'About Me' section when a link is clicked", () => {
    render(<InnerPage />);
    const aboutMeLink = screen.getByText("About me");
    // const aboutMeSection = screen.getByText("About me").closest("section");
    const aboutMeSection = screen.getByRole("region", { name: "About me" });

    const scrollToSpy = jest
      .spyOn(window, "scrollTo")
      .mockImplementation(() => {});

    fireEvent.click(aboutMeLink);

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: aboutMeSection.offsetTop,
      behavior: "smooth",
    });

    scrollToSpy.mockRestore();
  });

  it("should scroll to the 'Education' section when a link is clicked", () => {
    render(<InnerPage />);
    const eduLink = screen.getByText("Education");
    const eduSection = screen.getByRole("region", { name: "Education" });

    const scrollToSpy = jest
      .spyOn(window, "scrollTo")
      .mockImplementation(() => {});

    fireEvent.click(eduLink);

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: eduSection.offsetTop,
      behavior: "smooth",
    });

    scrollToSpy.mockRestore();
  });
});
