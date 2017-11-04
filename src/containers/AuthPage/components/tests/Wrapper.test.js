import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../Wrapper';

describe('# Auth page <Wrapper />', () => {
  it('should should render <div /> tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.type()).toEqual('div');
    expect(renderedComponent).toMatchSnapshot();
  });
});
