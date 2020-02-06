import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

configure({ adapter: new Adapter() });

describe("Header component", () => {
    it("should render component correctly", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render logo", () => {
        const wrapper = shallow(<Header />);
        const value = wrapper.find(".header-logo").length;
        expect(value).toEqual(1);
    });

    it("should render logout button", () => {
        const wrapper = shallow(<Header />);
        const value = wrapper.find(".logout-link").length;
        expect(value).toBe(1);
    });
});
