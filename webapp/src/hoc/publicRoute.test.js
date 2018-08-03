import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import publicRoute from './publicRoute';

it('redirects to /servers page if the user is authenticated', () => {
  const expectedServers = 'Servers';
  const expectedPublic = 'Private';
  const ServersComponent = () => expectedServers;
  const PublicComponent = publicRoute(() => expectedPublic);
  const store = createStore(() => ({ auth: { isLoggedIn: true } }));

  const wrapper = mount(
    <Provider store={ store }>
      <Router initialEntries={ ['/login'] }>
        <Switch>
          <Route path="/servers" component={ ServersComponent } />
          <Route path="/login" component={ PublicComponent } />
        </Switch>
      </Router>
    </Provider>
  );

  expect(wrapper.text()).toBe(expectedServers);
  expect(wrapper.text()).not.toBe(expectedPublic);
});

it('stays on /login if the user is not authenticated', () => {
  const expectedServers = 'Servers';
  const expectedPublic = 'Private';
  const ServersComponent = () => expectedServers;
  const PublicComponent = publicRoute(() => expectedPublic);
  const store = createStore(() => ({ auth: { isLoggedIn: false } }));

  const wrapper = mount(
    <Provider store={ store }>
      <Router initialEntries={ ['/login'] }>
        <Switch>
          <Route path="/servers" component={ ServersComponent } />
          <Route path="/login" component={ PublicComponent } />
        </Switch>
      </Router>
    </Provider>
  );

  expect(wrapper.text()).not.toBe(expectedServers);
  expect(wrapper.text()).toBe(expectedPublic);
});
