import React from 'react';
import { shallow } from 'enzyme';
import StyledFormControl from '../StyledFormControl';

describe('# Auth page <StyledFormControl />', () => {
  it('should should render <input /> tag', () => {
    const renderedComponent = shallow(<StyledFormControl />).dive();
    expect(renderedComponent.type()).toEqual('input');
    expect(renderedComponent).toMatchSnapshot();
  });
});
