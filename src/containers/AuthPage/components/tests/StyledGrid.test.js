import React from 'react';
import { shallow } from 'enzyme';
import StyledGrid from '../StyledGrid';

describe('# Auth page <StyledGrid />', () => {
  it('should should render <div /> tag', () => {
    const renderedComponent = shallow(<StyledGrid />).dive();
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
