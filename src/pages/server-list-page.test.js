import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import ServerListPage from "./server-list-page";


const component = shallow(<ServerListPage/>);

it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
});
