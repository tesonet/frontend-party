import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoginForm from "./LoginForm";

configure({ adapter: new Adapter() });

describe("LoginForm component", () => {
    it("should render component correctly", () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should have 2 inputs", () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper.find("Input").length).toEqual(2);
    });

    const newLocal = ".submit-button";
    it("should have submit button", () => {
        const wrapper = shallow(<LoginForm />);
        expect(wrapper.find(newLocal).length).toEqual(1);
    });
});
