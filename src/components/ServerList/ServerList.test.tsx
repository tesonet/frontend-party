import React from 'react'
import ServerList from './ServerList'
import { shallow } from 'enzyme'
import { servers, emptyServers } from 'api/__mocks__/servers'

jest.mock('../../api/')

it('fetches 3 servers from API and renders them correctly', () => {
  const list = shallow(<ServerList servers={servers} />).find('ServerItem').length
  expect(list).toEqual(3)
})

it('fetches  0 servers and interface does not crash', () => {
  const list = shallow(<ServerList servers={emptyServers} />).find('ServerItem').length
  expect(list).toEqual(0)
})
