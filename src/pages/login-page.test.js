import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import LoginPage from "./login-page";


const component = shallow(<LoginPage/>);

it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
});
