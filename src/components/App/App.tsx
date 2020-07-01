import 'normalize.css'
import React, { useEffect } from 'react'
import Login from '../Login/Login'
import Servers from '../Servers/Servers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { useDispatch, connect, useSelector } from 'react-redux'
import { userLoggedIn } from '../../store/auth_actions'
import NotFound from '../NotFound/NotFound'
import AppStyle from './App.style'

function App() {
  const style = AppStyle()
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.loggedIn)

  useEffect(() => {
    const token: string | undefined = window.localStorage.getItem('token')
    console.log(dispatch)

    if (token) {
      dispatch(userLoggedIn(token))
    }
  }, [])

  return (
    <div className={style.app}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login} />
          <Route path="/servers" component={loggedIn ? Servers : NotFound}></Route>
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </div>
  )
}

export default connect()(App)
