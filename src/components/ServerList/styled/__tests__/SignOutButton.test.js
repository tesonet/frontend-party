import React from 'react';
import { shallow } from 'enzyme';

import SignOutButton from '../SignOutButton';

describe('SignOutButton component', () => {
  it('should render the <div /> element.', () => {
    const renderedComponent = shallow(<SignOutButton />).dive();

    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
