import React from 'react';
import { shallow } from '../../enzyme';
import Login from '../Login'


describe('Login form test', () => {

    it('find login form', () => {
      expect(shallow(<Login />).find('.login-container form').exists()).toBe(true)
    });

});
