import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BackToTopButton from "./BackToTopButton";

describe("BackToTopButton", () => {
  it("should be hidden initially", () => {
    render(<BackToTopButton />);
    const button = screen.getByRole("button", { name: "^" });

    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass("visible");
  });

  it("should become visible when the user scrolls down", () => {
    render(<BackToTopButton />);
    const button = screen.getByRole("button", { name: "^" });

    fireEvent(window, new Event("scroll"));
    window.scrollY = 400;
    fireEvent(window, new Event("scroll"));

    expect(button).toHaveClass("visible");
  });

  it("should scroll to the top when clicked", () => {
    window.scrollTo = jest.fn();
    render(<BackToTopButton />);
    const button = screen.getByRole("button", { name: "^" });

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
