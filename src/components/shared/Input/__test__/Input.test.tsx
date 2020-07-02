import React, { ChangeEvent } from 'react'
import { mount } from 'enzyme'
import Input, { InputProps } from '../Input'
const mockChange = jest.fn((e: ChangeEvent<HTMLInputElement>) => {})
const props: InputProps = {
  onChange: mockChange,
  icon: '',
  className: 'test',
  placeholder: 'test',
  type: 'password',
}
describe('Input component', () => {
  it('should add required class if prop is passed', () => {
    const inputComponent = mount(<Input {...props} required={true} />)
    const input = inputComponent.find('input')
    expect(input.hasClass('required')).toBeTruthy()
  })

  it('should add required class if prop is passed', () => {
    const inputComponent = mount(<Input {...props} required={false} />)
    const input = inputComponent.find('input')
    expect(input.hasClass('required')).toBeFalsy()
  })

  it('should be disabled if prop is passed', () => {
    const inputComponent = mount(<Input {...props} disabled={true} />)
    const input = inputComponent.find('input')
    expect(input.props().disabled).toBeTruthy()
  })

  it('should be enabled if prop is passed', () => {
    const inputComponent = mount(<Input {...props} disabled={false} />)
    const input = inputComponent.find('input')
    expect(input.props().disabled).toBeFalsy()
  })
})
