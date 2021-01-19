import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import {LoginForm} from "./login-form";


const component = shallow(<LoginForm/>);

it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
});
