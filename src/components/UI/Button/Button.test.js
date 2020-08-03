import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  const wrapped = shallow(<Button>test</Button>);

  it('should render', () => {
    expect(wrapped).toBeTruthy();
  });

  it('should match latest snapshot', () => {
    expect(wrapped.debug()).toMatchSnapshot();
  });

  it('should have text as a children', () => {
    expect(wrapped.contains('test')).toEqual(true);
  });
});
