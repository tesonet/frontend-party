import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import LoginInput from "./login-input";


const component = shallow(<LoginInput/>);

it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
});
