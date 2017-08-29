import React from 'react'
import {connect} from 'react-redux'
import {
  Redirect
} from 'react-router-dom'

import * as Actions from '../../actions/auth-actions'

const fakeAuth = {
  isAuthenticated: false,
  fetched: false,
  fetching: false,
  error: null,

  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    this.props.fetchToken()
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (this.props.auth.authenticated) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
