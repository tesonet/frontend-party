import React from 'react'
import ReactDOM from 'react-dom'
import store from '../store'
import { Provider } from 'react-redux'

import App from '../App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , div)
});
