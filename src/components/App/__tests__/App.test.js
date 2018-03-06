import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App component', () => {
  const props = {
    children: <div>Child component</div>,
  };

  it('should render the app container with child components.', () => {
    const renderedComponent = shallow(<App {...props} />).dive();

    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
