import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Portfolio from "./Portfolio";

const samplePortfolioData = [
  {
    id: 1,
    img: "image1.jpg",
    title: "Project 1",
    txt: "Description for Project 1",
    url: "https://example.com/project1",
  },
  {
    id: 2,
    img: "image2.jpg",
    title: "Project 2",
    txt: "Description for Project 2",
    url: "https://example.com/project2",
  },
  {
    id: 3,
    img: "image3.jpg",
    title: "Project 3",
    txt: "Description for Project 3",
    url: "https://example.com/project3",
  },
];

describe("Portfolio Component", () => {
  it("should render the 'All' button and portfolio items", () => {
    render(<Portfolio />);
    const allButton = screen.getByText("All");
    expect(allButton).toBeInTheDocument();
    samplePortfolioData.forEach((item) => {
      const portfolioItem = screen.getByText(item.title);
      expect(portfolioItem).toBeInTheDocument();
    });
  });

  it("should filter and display 'Code' items when 'Code' button is clicked", () => {
    render(<Portfolio />);
    const codeButton = screen.getByText("Code");
    fireEvent.click(codeButton);
    samplePortfolioData.slice(0, 2).forEach((item) => {
      const portfolioItem = screen.getByText(item.title);
      expect(portfolioItem).toBeInTheDocument();
    });
    samplePortfolioData.slice(2).forEach((item) => {
      const portfolioItem = screen.queryByText(item.title);
      expect(portfolioItem).toBeNull();
    });
  });

  it("should filter and display 'UI' items when 'UI' button is clicked", () => {
    render(<Portfolio />);
    const uiButton = screen.getByText("UI");
    fireEvent.click(uiButton);
    samplePortfolioData.slice(0, 2).forEach((item) => {
      const portfolioItem = screen.queryByText(item.title);
      expect(portfolioItem).toBeNull();
    });
    samplePortfolioData.slice(2).forEach((item) => {
      const portfolioItem = screen.getByText(item.title);
      expect(portfolioItem).toBeInTheDocument();
    });
  });
});
