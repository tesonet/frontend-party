import React from "react";
import { shallow } from "enzyme";

import Login from "./Login";

describe("Login", () => {
  it("should render", () => {
    const component = shallow(<Login />);
    expect(component).toBeTruthy();
  });
});
