import '../config/dependencies'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { Authentication } from './store/auth_reducers'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: Authentication,
  middleware: [thunk],
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
