import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'

import {configureStore} from './store'
import {Login, Dashboard, NotFound} from './components/pages'
import PrivateRoute from './components/common/PrivateRoute'
import CssBaseline from './ui/CssBaseline'
import './App.css'

const {store, history} = configureStore()

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
