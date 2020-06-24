import 'normalize.css'
import Background from '../../../assets/img/login-page-background.png'
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

const makeStyles = createUseStyles({
  app: {
    height: '100vh',
    position: 'relative',
    background: [`url(${Background})`, 'no-repeat', 'center'],
    backgroundSize: 'cover',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(0,0,0,0.5)',
  },
})

function App() {
  const style = makeStyles()
  return (
    <div className={style.app}>
      <div className={style.overlay}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
