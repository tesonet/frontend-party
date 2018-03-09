import React from 'react';
import { shallow } from 'enzyme';

import StyledList from '../StyledList';

describe('StyledList component', () => {
  it('should render the <div /> element.', () => {
    const renderedComponent = shallow(<StyledList />);

    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
