import React from 'react';
import { shallow } from 'enzyme';
import StyledAddon from '../StyledAddon';

describe('# Auth page <StyledAddon />', () => {
  it('should should render <span /> tag', () => {
    const renderedComponent = shallow(<StyledAddon />).dive();
    expect(renderedComponent.type()).toEqual('span');
    expect(renderedComponent).toMatchSnapshot();
  });
});
