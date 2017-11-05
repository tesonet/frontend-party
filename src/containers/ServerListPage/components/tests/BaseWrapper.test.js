import React from 'react';
import { shallow } from 'enzyme';
import BaseWrapper from '../BaseWrapper';

describe('# Server list page <BaseWrapper />', () => {
  it('should should render <div /> tag', () => {
    const renderedComponent = shallow(<BaseWrapper />);
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
