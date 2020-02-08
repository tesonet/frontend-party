import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("component", () => {
  it("renders", () => {
    const { getByText } = render(<App />);
    expect(getByText("Testio")).toBeInTheDocument();
  });
});
