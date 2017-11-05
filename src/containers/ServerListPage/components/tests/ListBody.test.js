import React from 'react';
import { shallow } from 'enzyme';
import ListBody from '../ListBody';

describe('# Server list page <ListBody />', () => {
  it('should should render <div /> tag', () => {
    const renderedComponent = shallow(<ListBody />);
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
