import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import LoginError from "./login-error";


const component = shallow(<LoginError/>);

it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
});
