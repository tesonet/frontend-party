import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import App from '../index';

describe('<App />', () => {

  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route).length).not.toBe(0);
  });
});