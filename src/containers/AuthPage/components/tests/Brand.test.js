import React from 'react';
import { shallow } from 'enzyme';
import Brand from '../Brand';

describe('# Auth page <Brand />', () => {
  it('should should render <img /> tag', () => {
    const renderedComponent = shallow(<Brand />).dive();
    expect(renderedComponent.type()).toEqual('img');
  });

  it('should have default src attribute', () => {
    const renderedComponent = shallow(<Brand />);
    expect(renderedComponent.prop('src')).toBeDefined();
  });

  it('should override src attribute', () => {
    const imgSource = 're-brand.png';
    const renderedComponent = shallow(<Brand src={imgSource} />);
    expect(renderedComponent.prop('src')).toEqual(imgSource);
  });
});
