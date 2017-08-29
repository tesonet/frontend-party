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
import Header from './components/Header'

import logo from './logo.svg'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="testio-app">

          <Header authenticated={this.props.auth.authenticated} />

          <Route path="/login" component={Login} />
          <PrivateRoute
            authenticated={this.props.auth.authenticated}
            path="/"
            component={Home}
          />

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: {
      authenticated: state.authenticated,
      fetching: state.fetching,
      fetched: state.fetched,
      error: state.error,
    },
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchToken: () => dispatch(Actions.fetchToken())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
