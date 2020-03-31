import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Common - Header', () => {
  describe('UI', () => {
    it('Contains correct components', () => {
      const wrapper = shallow(<Header />);
      const logo = wrapper.find('[data-test="header-logo"]');
      const logout = wrapper.find('[data-test="logout-button"]');
      expect(logo).toHaveLength(1);
      expect(logout).toHaveLength(1);
    });
  });
});
