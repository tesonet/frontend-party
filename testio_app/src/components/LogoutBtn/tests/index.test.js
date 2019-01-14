/**
 * Testing our LogoutBtn component
 */

import React from 'react';
import { mount } from 'enzyme';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import LogoutBtn from '../index';

const handleRoute = () => {};
const href = 'http://google.com';
const children = <h1>Test</h1>;
const renderComponent = (props = {}) =>
  mount(
    <LogoutBtn href={href} {...props}>
      {children}
    </LogoutBtn>,
  );

describe('<LogoutBtn />', () => {
  it('should render an <a> tag if no route is specified', () => {
    const renderedComponent = renderComponent({ href });
    expect(renderedComponent.find('a').length).toEqual(0);
  });

  it('should render a <button> tag to change route if the handleRoute prop is specified', () => {
    const renderedComponent = renderComponent({ handleRoute });
    expect(renderedComponent.find('button').length).toEqual(1);
  });


  it('should not adopt a type attribute when rendering a button', () => {
    const type = 'submit';
    const renderedComponent = renderComponent({ handleRoute, type });
    expect(renderedComponent.find('button').props('type')).toBeDefined();
  });
});
