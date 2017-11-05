import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';

describe('# Server list page <List />', () => {
  it('should should render <div /> tag', () => {
    const renderedComponent = shallow(<List />);
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
