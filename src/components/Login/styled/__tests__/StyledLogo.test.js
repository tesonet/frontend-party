import React from 'react';
import { shallow } from 'enzyme';

import StyledLogo from '../StyledLogo';

describe('StyledLogo component', () => {
  it('should render the <div /> element.', () => {
    const renderedComponent = shallow(<StyledLogo />).dive();

    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
