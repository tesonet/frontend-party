import React from "react";
import { shallow } from "enzyme";

import TextField, { Input } from "./TextField";

describe("TextField", () => {
  it("should render", () => {
    const wrapper = shallow(<TextField icon="user" />);
    expect(wrapper).toBeTruthy();
  });

  it("should render an input element", () => {
    const wrapper = shallow(<TextField icon="user" />);
    expect(wrapper.find(Input)).toHaveLength(1);
  });

  it("should pass down props to the input element", () => {
    const wrapper = shallow(
      <TextField data-test="test-field" name="fullname" icon="user" />
    );
    const input = wrapper.find(Input);
    expect(input.prop("name")).toEqual("fullname");
    expect(input.prop("data-test")).toEqual("test-field");
  });
});
