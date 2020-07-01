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
import { createUseStyles } from 'react-jss'
import styleConsts from '../../styles'
import { useDispatch, connect } from 'react-redux'
import { userLoggedIn } from '../../store/auth_actions'

const makeStyles = createUseStyles({
  app: {
    height: '100vh',
    position: 'relative',
    fontFamily: "'Roboto', sans-serif",
    fontSize: styleConsts.fontSize,
    '& *': {
      boxSizing: 'border-box',
    },
    '& .mb': {
      marginBottom: styleConsts.marginBottom,
    },
    '& .mr': {
      marginRight: styleConsts.marginRight,
    },
  },
})

function App() {
  const style = makeStyles()
  const dispatch = useDispatch()
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
          <Route exact path="/login" component={Login} />
          <Route path="/servers" component={Servers}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default connect()(App)
