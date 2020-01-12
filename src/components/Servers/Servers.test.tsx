import React from "react";
import { shallow } from "enzyme";

import Servers from "./Servers";

describe("Servers", () => {
  it("should render", () => {
    const component = shallow(<Servers />);
    expect(component).toBeTruthy();
  });
});
