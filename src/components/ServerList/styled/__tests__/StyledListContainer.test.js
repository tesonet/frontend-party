import React from 'react';
import { shallow } from 'enzyme';

import StyledListContainer from '../StyledListContainer';

describe('StyledListContainer component', () => {
  it('should render the <div /> element.', () => {
    const renderedComponent = shallow(<StyledListContainer />);

    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
