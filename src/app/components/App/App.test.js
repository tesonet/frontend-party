import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import sessionStorage from 'mock-local-storage';
import MainRouter from '../MainRouter';
import Header from '../Header';
import { App } from './';

configure({ adapter: new Adapter() });

describe('Main <App /> component', () => {
  const wrapper = shallow(<App />);

  it('Should have <Header /> component if token is present', () => {
    sessionStorage.setItem = function(key, val) {
      this[key] = val;
    };
    sessionStorage.getItem = function(key) {
      return this[key];
    };

    sessionStorage.setItem('token', 'abc1234');

    let tempWrapper = shallow(
      <div>
        {sessionStorage.getItem('token') && <Header />}
        <MainRouter />
      </div>
    );

    expect(tempWrapper.contains(<Header />)).toEqual(true);
  });

  it('Should have <MainRouter /> component', () => {
    expect(wrapper.contains(<MainRouter />)).toEqual(true);
  });
});
