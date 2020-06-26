import 'normalize.css'
import React from 'react'
import Login from '../Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { Provider } from 'react-redux'
import { Authentication } from '../../store/auth_reducers'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: Authentication,
  middleware: [thunk],
})

const makeStyles = createUseStyles({
  app: {
    height: '100vh',
    position: 'relative',
  },
})

function App() {
  const style = makeStyles()
  console.log(store)
  return (
    <Provider store={store}>
      <div className={style.app}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App
