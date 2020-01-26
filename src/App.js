import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, Switch} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'

import {configureStore} from './store'
import {Login} from './auth/screens'
import {Servers} from './servers/screens'
import PrivateRoute from './components/PrivateRoute'

const {store, persistor, history} = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={Servers} />
            <Route exact path="/login" component={Login} />
            <Route path="*">404</Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
