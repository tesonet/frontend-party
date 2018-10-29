import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import * as serviceWorker from './serviceWorker'
import { history } from './store'
import App from './app'

import 'sanitize.css/sanitize.css'
import './index.css'

const targetNode = document.querySelector('#root')

store.subscribe(() => localStorage.setItem('token', store.getState().authReducer.token))

render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <App/>
      </ConnectedRouter>
  </Provider>,
  targetNode
)

serviceWorker.unregister()