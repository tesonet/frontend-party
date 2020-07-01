import React from 'react'
import Login from '../Login'
import { shallow } from 'enzyme'
import { render } from '@testing-library/react'

describe('Login component', () => {
  it('should have login form with inputs', () => {
    const login = render(<Login />)
    expect(login).toBeTruthy()
  })
})
