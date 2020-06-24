import 'normalize.css'
import React from 'react'
import Login from '../Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import { createUseStyles } from 'react-jss'

const makeStyles = createUseStyles({})

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default App
