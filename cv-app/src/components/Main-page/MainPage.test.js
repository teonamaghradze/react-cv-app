import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

describe("MainPage Component", () => {
  it("renders the full name, profession, and description", () => {
    const fullName = "John Doe";
    const profession = "Programmer. Creative. Innovator";
    const description =
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque";
    const btnName = "Know more";

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const fullNameElement = screen.getByText(fullName);
    const professionElement = screen.getByText(profession);
    const descriptionElement = screen.getByText(description);
    const btnElement = screen.getByText(btnName);

    expect(fullNameElement).toBeInTheDocument();
    expect(professionElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
  });

  it('navigates to the inner page when the "Know more" button is clicked', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const btnElement = screen.getByText("Know more");
    expect(btnElement).toBeInTheDocument();

    btnElement.click();
  });
});
