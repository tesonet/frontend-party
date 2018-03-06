import React from 'react';
import { shallow } from 'enzyme';

import StyledAlert from '../StyledAlert';

describe('StyledAlert component', () => {
  const props = {
    isOpen: true,
    children: <span>Test</span>,
  };

  it('should render the <div /> element.', () => {
    const renderedComponent = shallow(<StyledAlert {...props} />).dive();

    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
