import React from "react";
import { shallow, mount } from "enzyme";

import Servers from "./Servers";
import { useSelector } from "react-redux";

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
    expect(wrapper.find('[data-test="server"]')).toHaveLength(2);

    expect(
      wrapper.find('[data-test="server-name"]').get(0).props.children
    ).toEqual("one");

    expect(
      wrapper.find('[data-test="server-distance"]').get(0).props.children
    ).toEqual(30);

    expect(
      wrapper.find('[data-test="server-name"]').get(1).props.children
    ).toEqual("two");

    expect(
      wrapper.find('[data-test="server-distance"]').get(1).props.children
    ).toEqual(50);
  });

  it("should render a logout button", () => {
    const wrapper = shallow(<Servers />);
    expect(wrapper.find('button[data-test="logout"]')).toHaveLength(1);
  });
});
