import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../Navigation';

describe('# Server list page <Navigation />', () => {
  it('should should render <div /> tag', () => {
    const renderedComponent = shallow(<Navigation />);
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
