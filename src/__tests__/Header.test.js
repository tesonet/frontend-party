import React from 'react'
import {mount} from 'enzyme'
import Header from '../components/Header'

it('Header renders with right props', () => {
  const wrapper = mount(<Header authenticated="true" />)
  expect(wrapper.props().authenticated).toEqual("true")
});
