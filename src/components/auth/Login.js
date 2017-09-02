import React from 'react'
import {connect} from 'react-redux'
import {
  Redirect
} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { Alert } from 'reactstrap'

import * as Actions from '../../actions/auth-actions'
import SigninForm from './LoginForm'

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  submit = (values) => {
    this.props.fetchToken(values)
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (this.props.auth.authenticated) {
      return (
        <Redirect to={from}/>
      )
    }

    const errorAlert = () => {
      if (this.props.auth.error) {
        return (
          <Alert color="warning">
            {this.props.auth.error}
          </Alert>
        )
      }
    }

    return (
      <div className="auth-screen">
        {errorAlert()}

        <Container>
          <Row className="d-flex align-items-center justify-content-center align-center">
            <Col sm="10" md="6" lg="4">
              <div>
                <h1 className="d-flex justify-content-center align-items-center">
                  <img alt="Logo" src="../images/logotype-testio.png" width="240" />
                </h1>

                { from.pathname !== '/login' &&
                  (<p>You must log in to view this page at {from.pathname}</p>)
                }

                <SigninForm onSubmit={this.submit} error={this.props.auth.error} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: {
      authenticated: state.user.authenticated,
      fetching: state.user.fetching,
      fetched: state.user.fetched,
      error: state.user.error,
    },
    data: state.user.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchToken: (values) => dispatch(Actions.fetchToken(values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
