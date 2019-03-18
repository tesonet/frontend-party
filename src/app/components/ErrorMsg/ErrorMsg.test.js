import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ErrorMsg from './';

configure({ adapter: new Adapter() });

describe('<ErrorMsg /> component', () => {
  const wrapper = shallow(<ErrorMsg error="Random error" />);

  it('Should get the passed error message', () => {
    expect(
      wrapper.find('.error-container').contains(<div>Random error</div>)
    ).toEqual(true);
  });

  it('Should have close button "X"', () => {
    expect(wrapper.find('.error-exit').contains('X')).toEqual(true);
  });
});
