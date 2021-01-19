import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import {RouterOutlet} from "./router-outlet";


const component = shallow(<RouterOutlet/>);

it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
});
