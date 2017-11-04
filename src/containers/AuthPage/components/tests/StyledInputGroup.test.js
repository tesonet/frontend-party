import React from 'react';
import { shallow } from 'enzyme';
import StyledInputGroup from '../StyledInputGroup';

describe('# Auth page <StyledInputGroup />', () => {
  it('should should render <span /> tag', () => {
    const renderedComponent = shallow(<StyledInputGroup />).dive();
    expect(renderedComponent.type()).toEqual('span');
    expect(renderedComponent).toMatchSnapshot();
  });
});
