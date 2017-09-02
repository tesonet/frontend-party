import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import 'whatwg-fetch'
import {connect} from 'react-redux'
import * as Actions from './actions/auth-actions'

import Home from './components/home'
import {PrivateRoute} from './components/auth/PrivateRoute'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Header from './components/Header'
import Loader from './components/svg/Loader'

import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.checkAuth()
  }

  checkAuth () {
    const authToken = localStorage.token
    this.props.validateToken(authToken)
  }

  render() {
    return (
      <Router>
        <div className="testio-app">

          <Header authenticated={this.props.auth.authenticated} />

          <Routes
            validationChecked={this.props.auth.authChecked}
            authenticated={this.props.auth.authenticated}
          />
        </div>
      </Router>
    );
  }
}

const Routes = (props) => {
  if (props.validationChecked) {
    return (
      <div className="app-container">
        <Route path="/login" component={Login} />
        <PrivateRoute
          authenticated={props.authenticated}
          path="/"
          component={Home}
        />
        <Route path='/logout'component={Logout} />
      </div>
    )
  }
  return (
    <Loader />
  )
}

const mapStateToProps = (state) => {
  return {
    auth: {
      authenticated: state.user.authenticated,
      fetching: state.user.fetching,
      fetched: state.user.fetched,
      error: state.user.error,
      authChecked: state.user.authChecked,
    },
    data: state.user.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchToken: () => dispatch(Actions.fetchToken()),
    validateToken: (token) => dispatch(Actions.validateToken(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
