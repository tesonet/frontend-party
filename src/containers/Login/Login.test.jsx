import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "./Login";

jest.mock("react-redux");

configure({ adapter: new Adapter() });

describe("Login component", () => {
    it("should render component correctly", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
});
