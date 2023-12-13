import React from "react";
import { render } from "@testing-library/react";
import Experience from "./Experience";

describe("Experience Component", () => {
  it("should render the component with data", () => {
    const { container } = render(<Experience />);
    expect(container).toBeTruthy();
  });
});
