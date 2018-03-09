import React from 'react';
import { shallow } from 'enzyme';

import StyledContainer from '../StyledContainer';

describe('StyledContainer component', () => {
  it('should render the <div /> element.', () => {
    const renderedComponent = shallow(<StyledContainer />);

    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
