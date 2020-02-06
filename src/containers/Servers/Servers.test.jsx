import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Servers from "./Servers";

jest.mock("react-redux");

configure({ adapter: new Adapter() });

describe("Servers component", () => {
    it("should render component correctly", () => {
        const wrapper = shallow(<Servers />);
        expect(wrapper).toMatchSnapshot();
    });
});
