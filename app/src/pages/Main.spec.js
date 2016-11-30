import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Main } from './Main';
import Header from '../components/Header';
import List from '../components/List';

describe('Main', () => {
  it('renders', () => {
    const props = {
      authenticated: true,
      servers: [{
        name: 'Lithuania',
        distance: 11,
      }],
      fetchServers: () => {},
      signoutUser: () => {},
    };
    expect(shallow(<Main {...props} />))
      .to.have.length(1);
  });

  it('has a Header & List components, when authenticated', () => {
    const props = {
      authenticated: true,
      servers: [{
        name: 'Lithuania',
        distance: 11,
      }],
      fetchServers: () => {},
      signoutUser: () => {},
    };
    expect(shallow(<Main {...props} />).find(Header)).to.have.length(1);
    expect(shallow(<Main {...props} />).find(List)).to.have.length(1);
  });

  it('has doesn\'t have Header & List components, when not authenticated', () => {
    const props = {
      authenticated: false,
      servers: [{
        name: 'Lithuania',
        distance: 11,
      }],
      fetchServers: () => {},
      signoutUser: () => {},
    };
    expect(shallow(<Main {...props} />).find(Header)).to.have.length(0);
    expect(shallow(<Main {...props} />).find(List)).to.have.length(0);
  });
});
