import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import privateRoute from '../privateRoute';

it('redirects to login page if the user is not authenticated', () => {
  const expectedLogin = 'Login';
  const expectedPrivate = 'Private';
  const LoginComponent = () => expectedLogin;
  const PrivateComponent = privateRoute(() => expectedPrivate);
  const store = createStore(() => ({ auth: { isLoggedIn: false } }));

  const wrapper = mount(
    <Provider store={ store }>
      <Router initialEntries={ ['/private-route'] }>
        <Switch>
          <Route path="/private-route" component={ PrivateComponent } />
          <Route path="/login" component={ LoginComponent } />
        </Switch>
      </Router>
    </Provider>
  );

  expect(wrapper.text()).toBe(expectedLogin);
  expect(wrapper.text()).not.toBe(expectedPrivate);
});

it('stays on page if user is authenticated', () => {
  const expectedLogin = 'Login';
  const expectedPrivate = 'Private';
  const LoginComponent = () => expectedLogin;
  const PrivateComponent = privateRoute(() => expectedPrivate);
  const store = createStore(() => ({ auth: { isLoggedIn: true } }));

  const wrapper = mount(
    <Provider store={ store }>
      <Router initialEntries={ ['/private-route'] }>
        <Switch>
          <Route path="/private-route" component={ PrivateComponent } />
          <Route path="/login" component={ LoginComponent } />
        </Switch>
      </Router>
    </Provider>
  );

  expect(wrapper.text()).not.toBe(expectedLogin);
  expect(wrapper.text()).toBe(expectedPrivate);
});
