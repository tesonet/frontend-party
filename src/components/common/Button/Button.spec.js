import React from "react";
import * as Enzyme from "enzyme";
import { Button } from "./Button";

describe("Button", () => {
  const setup = (_props) => {
    const props = Object.assign({}, {
      onClick: jest.fn(),
    }, _props);
    const wrapper = Enzyme.mount(<Button {...props} />);

    return {
      wrapper,
      props
    };
  };

  it("should display leading icon if it is passed", () => {
    const {wrapper} = setup({
      leadingIcon: <div>leading icon</div>
    });
    expect(wrapper.find('[data-testid="button-leading-icon"]').length).toBe(1);
  });

  it("should execute onClick when button is clicked", () => {
    const {wrapper, props} = setup();
    wrapper.find('[data-testid="button"]').simulate('click');
    expect(props.onClick).toBeCalled();
  });

  it("should render children if they are passed", () => {
    const {wrapper} = setup({
      children: <div data-testid="children-test" />
    });
    expect(wrapper.find('[data-testid="children-test"]').length).toBe(1);
  });
});