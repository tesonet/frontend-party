import React from 'react'
import ReactDOM from 'react-dom'
import store from '../store'
import { Provider } from 'react-redux'

import Login from '../components/auth/Login'

it('Login renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <Login />
    </Provider>
  , div)
});
