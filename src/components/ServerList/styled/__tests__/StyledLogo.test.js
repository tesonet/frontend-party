import React from 'react';
import { shallow } from 'enzyme';

import StyledLogo from '../StyledLogo';

describe('StyledLogo component', () => {
  it('should render the <img /> element.', () => {
    const renderedComponent = shallow(<StyledLogo />).dive();

    expect(renderedComponent.type()).toEqual('img');
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should contain a default image source attribute.', () => {
    const renderedComponent = shallow(<StyledLogo />);

    expect(renderedComponent.prop('src')).toBeDefined();
  });
});
