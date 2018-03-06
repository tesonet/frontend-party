import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header component', () => {
  it('should render the <header /> element.', () => {
    const renderedComponent = shallow(<Header />);

    expect(renderedComponent.type()).toEqual('header');
    expect(renderedComponent).toMatchSnapshot();
  });
});
