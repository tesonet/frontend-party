import React from "react";
import { shallow } from "enzyme";

import Login from "./Login";
import { Redirect } from "react-router";

const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: (): jest.Mock => mockSelector,
  useDispatch: (): jest.Mock => mockDispatch
}));

describe("Login", () => {
  it("should render", () => {
    const component = shallow(<Login />);
    expect(component).toBeTruthy();
  });
});
