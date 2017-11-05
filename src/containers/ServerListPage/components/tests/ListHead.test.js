import React from 'react';
import { shallow } from 'enzyme';
import ListHead from '../ListHead';

describe('# Server list page <ListHead />', () => {
  it('should should render <div /> tag', () => {
    const renderedComponent = shallow(<ListHead />);
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
