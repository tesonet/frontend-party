import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import {ServerListTable} from "./server-list-table";


const component = shallow(<ServerListTable/>);

it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
});
