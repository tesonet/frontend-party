import * as React from 'react';
import Icon from '../../../components/common/Icon';
import { shallow } from 'enzyme';

describe('Icon component', () => {
  it('Outputs icon type to the className', () => {
    const wrapper = shallow(<Icon type="user"/>);
    expect(wrapper.hasClass('icon--user')).toBeTruthy();
  });

  it('Outputs className to the className', () => {
    const wrapper = shallow(<Icon type="user" className="test"/>);
    expect(wrapper.hasClass('test')).toBeTruthy();
  });
});
