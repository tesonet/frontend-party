import React from 'react';
import {shallow} from 'enzyme';

import FAIcon from './FAIcon';


describe('FAIcon', () => {
  it('creates a proper fontawesome.com icon', () => {
    expect(shallow(<FAIcon type='user' />).find('i.fa.fa-user[aria-hidden="true"]').length).toBe(1);
  });
});
