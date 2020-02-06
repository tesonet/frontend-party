import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Spinner from "./Spinner";

configure({ adapter: new Adapter() });

describe("Spinner component", () => {
    it("should render component correctly", () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render loader", () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper.find(".loading").length).toEqual(1);
    });
});
