import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SignIn from '../auth/SignIn';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});