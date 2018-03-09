import React from 'react';
import { shallow } from 'enzyme';

import StyledListHeading from '../StyledListHeading';

describe('StyledListHeading component', () => {
  it('should render the <div /> element.', () => {
    const renderedComponent = shallow(<StyledListHeading />);

    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
