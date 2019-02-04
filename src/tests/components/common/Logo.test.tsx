import * as React from 'react';
import Logo from '../../../components/common/Logo';
import { shallow } from 'enzyme';

describe('Logo component', () => {
  it('Outputs "logo--light" to the className if "light" param is set to be true', () => {
    const wrapper = shallow(<Logo light={true}/>);
    expect(wrapper.hasClass('logo--light')).toBeTruthy();
  });

  it('Outputs className to the className', () => {
    const wrapper = shallow(<Logo className="test"/>);
    expect(wrapper.hasClass('test')).toBeTruthy();
  });
});
