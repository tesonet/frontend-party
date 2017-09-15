import React from 'react';
import {shallow} from 'enzyme';

import FAIcon from './FAIcon';


describe('FAIcon', () => {
  it('creates a proper fontawesome.com icon', () => {
    const wrapper = shallow(<FAIcon type='user' />);
    expect(wrapper.find('i.fa.fa-user[aria-hidden="true"]')).toHaveProperty('length', 1);
  });
});
