import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";

configure({ adapter: new Adapter() });

describe("NotFound component", () => {
    it("should render component correctly", () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper).toMatchSnapshot();
    });
});
