import React from "react";
import {shallow} from "enzyme";
import toJson from 'enzyme-to-json';

import LoginButton from "./login-button";


const component = shallow(<LoginButton/>);

it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
});
