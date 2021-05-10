import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

describe('Test header component', () => {
  it('renders the header with logo and button', () => {
    const handleLogoutMockFunction = jest.fn()
    const header = shallow(<Header handleLogout={handleLogoutMockFunction} />)
    const logo = header.find('Logo').exists()
    const logoutButton = header.find('Button').exists()
    expect(logo && logoutButton).toBeTruthy()
  })
})
