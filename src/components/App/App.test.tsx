import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  it("should render", () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
  });

  it("should render a router", () => {
    const component = shallow(<App />);
    expect(component.find(Router)).toHaveLength(1);
  });
});
