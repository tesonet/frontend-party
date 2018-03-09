import React from 'react';
import { shallow } from 'enzyme';

import LoginContainer from '../LoginContainer';

describe('LoginContainer component', () => {
  it('should render the <div /> element.', () => {
    const renderedComponent = shallow(
      <LoginContainer>Test</LoginContainer>
    ).dive();

    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
