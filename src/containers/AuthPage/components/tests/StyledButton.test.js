import React from 'react';
import { shallow } from 'enzyme';
import StyledButton from '../StyledButton';

describe('# Auth page <StyledButton />', () => {
  it('should should render <button /> tag', () => {
    const renderedComponent = shallow(<StyledButton />).dive();
    expect(renderedComponent.type()).toEqual('button');
    expect(renderedComponent).toMatchSnapshot();
  });
});
