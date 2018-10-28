import React, { Component } from 'react'
import logo from '../../../../assets/images/logo.png'

class AuthForm extends Component {

    state = {
        username: '',
        password: '',
        loginError: false
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            loginError: nextProps.loginError
        }
    }

    componentDidUpdate() {
        if (this.props.withAuth) {
            this.props.history.push('servers')
        }
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onInputFocus = () => {
        if (this.state.loginError) {
            this.props.clearLoginError()
        }
    }

    formSubmit = e => {
        e.preventDefault()
        if (this.state.loginError) {
            this.props.clearLoginError()
        }
        this.props.login(this.state)
    }

    render() {

        const {
            username,
            password,
            loginError
        } = this.state

        const isInvalid =
          password === '' ||
          username === ''

        return (
          <div
            className={`${loginError ? 'error' : ''} auth-form`}
          >
              <img
                className="logo"
                src={logo}
                alt="logo"
              />
              <form
                className="auth-form_form"
                onSubmit={this.formSubmit}
              >
                  <input
                    onFocus={this.onInputFocus}
                    className="auth-form_input user-inp"
                    onChange={this.onInputChange}
                    placeholder="Username"
                    name="username"
                    value={username}
                    type="text"
                  />
                  <input
                    onFocus={this.onInputFocus}
                    className="auth-form_input pass-inp"
                    onChange={this.onInputChange}
                    placeholder="Password"
                    name="password"
                    type="text"
                    value={password}
                  />
                  <button
                    className="auth-form_btn btn"
                    type="submit"
                    disabled={isInvalid}
                  >
                      Log In
                  </button>
              </form>
          </div>
        )
    }
}

export default AuthForm