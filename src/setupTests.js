import React from 'react';
import Enzyme, { render, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';


expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;