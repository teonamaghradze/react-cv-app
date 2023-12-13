import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  it("renders MainPage when the root path is accessed", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const mainPageElement = screen.getByText("John Doe");
    expect(mainPageElement).toBeInTheDocument();

    const innerPageElement = screen.queryByText("dsa");
    expect(innerPageElement).not.toBeInTheDocument();
  });

  it("renders InnerPage when the /inner path is accessed", () => {
    render(
      <MemoryRouter initialEntries={["/inner"]}>
        <App />
      </MemoryRouter>
    );

    const innerPageElement = screen.getByText("Inner Page");
    expect(innerPageElement).toBeInTheDocument();

    const mainPageElement = screen.queryByText("John Doe");
    expect(mainPageElement).not.toBeInTheDocument();
  });
});
