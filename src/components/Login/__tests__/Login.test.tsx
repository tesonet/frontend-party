import React, { ReactElement, ChangeEvent } from 'react'
import Login from '../Login'
import { mount, ReactWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
let component: ReactWrapper
const store = configureStore()
beforeEach(() => {
  component = mount(
    <Provider store={store()}>
      <Login />
    </Provider>
  )
})
describe('Login component', () => {
  test('username field should be required', () => {
    const usernameField = component.find('input[placeholder="Username"]')
    expect(usernameField.hasClass('required')).toBeTruthy()
  })

  test('password should be required', () => {
    const passwordField = component.find('input[placeholder="Password"]')
    expect(passwordField.hasClass('required')).toBeTruthy()
  })
})
