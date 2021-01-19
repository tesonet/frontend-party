import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import {ServerListHeader} from "./server-list-header";


const component = shallow(<ServerListHeader/>);

it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
});
