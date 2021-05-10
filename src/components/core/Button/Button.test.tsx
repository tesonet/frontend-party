import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Test button component', () => {
  it('renders the button with title', () => {
    const button = shallow(<Button title="Button" />).contains('Button')
    expect(button).toBeTruthy()
  })

  it('prop function onClick works', () => {
    const onClickMockFunction = jest.fn()
    const button = shallow(<Button title="Button" onClick={onClickMockFunction} />)
    button.simulate('click')
    expect(onClickMockFunction.mock.calls.length).toEqual(1)
  })
})
