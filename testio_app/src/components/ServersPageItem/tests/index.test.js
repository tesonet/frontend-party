import React from 'react';
import { mount } from 'enzyme';

import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ServersPageItem from '../index';

describe('<ServersPageItem />', () => {

  it('should render the content passed to it', () => {
    const name = <div>Hello world!</div>;
    const distance = <div>1000km</div>;
    const renderedComponent = mount(<ServersPageItem name={name} distance={distance} />);
    expect(renderedComponent.contains({name, distance})).toBe(true);
  });
});