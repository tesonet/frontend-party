import React from 'react'
import { shallow } from 'enzyme'
import { colors } from 'styles/colors'
import Logo from './Logo'
import LogoIcon from '../Icons/LogoIcon'

describe('Test logo component', () => {
  it('logo renders correctly without crashing', () => {
    const button = shallow(<Logo />).contains(
      <LogoIcon textColor={colors.logoColor} dotColor={colors.limeade} />,
    )
    expect(button).toBeTruthy()
  })
})
