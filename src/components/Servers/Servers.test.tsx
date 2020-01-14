import React from "react";
import { shallow, mount } from "enzyme";

import Servers from "./Servers";
import { useSelector } from "react-redux";
import { Table } from "../Table/Table";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

describe("Servers", () => {
  it("should render", () => {
    (useSelector as jest.Mock).mockImplementationOnce(() => null);
    const component = mount(<Servers />);
    expect(component).toBeTruthy();
  });

  it("should display the server list from the store", () => {
    (useSelector as jest.Mock).mockImplementationOnce(() => [
      { name: "one", distance: 30 },
      { name: "two", distance: 50 }
    ]);
    const wrapper = shallow(<Servers />);
    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it("should render a logout button", () => {
    const wrapper = shallow(<Servers />);
    expect(wrapper.find(`[data-test="logout"]`)).toHaveLength(1);
  });
});
