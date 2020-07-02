import React from 'react'
import LogoutButton from '../LogoutButton'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
let component
const mockStore = configureStore()
describe('Logout button', () => {
  it('should be have big button style if prop was passed', () => {
    const component = mount(
      <Provider store={mockStore()}>
        <LogoutButton bigButton={true} />
      </Provider>
    )
    const bigButton = component.getDOMNode().classList.toString().includes('button');
    expect(bigButton).toBeTruthy()
  })

  it('should have transparent style if prop was passed', () => {
    const component = mount(
      <Provider store={mockStore()}>
        <LogoutButton bigButton={false} />
      </Provider>
    )
    const bigButton = component.getDOMNode().classList.toString().includes('button');
    expect(bigButton).toBeFalsy()
  })
})
