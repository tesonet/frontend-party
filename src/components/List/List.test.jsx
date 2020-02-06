import * as React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import List from "./List";

configure({ adapter: new Adapter() });

describe("List component", () => {
    const headers = [
        {
            name: "NAME",
            key: "name",
            action: () => {}
        },
        {
            name: "DISTANCE",
            key: "distance",
            action: () => {}
        }
    ];

    const body = [
        { name: "Lithuania", distance: "1" },
        { name: "Latvia", distance: "2" },
        { name: "Estonia", distance: "3" }
    ];

    it("should render component correctly", () => {
        const wrapper = shallow(<List headers={headers} body={body} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should receive 2 headers", () => {
        const wrapper = mount(<List headers={headers} body={body} />);
        expect(wrapper.props().headers).toHaveLength(headers.length);
    });

    it("should show 3 list items", () => {
        const wrapper = mount(<List headers={headers} body={body} />);
        expect(wrapper.props().body).toHaveLength(body.length);
    });
});
