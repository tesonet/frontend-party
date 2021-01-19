import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

import ServerListTableBody from "./server-list-table-body";


describe('server list table body', () => {
    const props = {server_list: []};
    const component = shallow(<ServerListTableBody {...props} />);

    it('renders correctly', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});
