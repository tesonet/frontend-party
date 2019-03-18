import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { SvgIcon } from '../';
import Header from './';

configure({ adapter: new Adapter() });

describe('<Header /> component', () => {
  const wrapper = shallow(<Header logoutFunc={() => {}} />);

  it('Should contain logout button with icon', () => {
    expect(
      wrapper.find('.logout-btn').contains(<SvgIcon iconType="logIcon" />)
    ).toEqual(true);
  });
});
