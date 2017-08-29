import React from 'react'
import {connect} from 'react-redux'
import {
  Redirect
} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap'
import { InputGroup, InputGroupAddon } from 'reactstrap'

import * as Actions from '../../actions/auth-actions'
import UserIcon from '../svg/UserIcon'
import LockIcon from '../svg/LockIcon'

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
      <div className="auth-screen">
        <Container>
          <Row className="d-flex align-items-center justify-content-center align-center">
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
              <div>
                <h1 className="d-flex justify-content-center align-items-center">
                  <img src="../images/logotype-testio.png" width="240" />
                </h1>
                <p>You must log in to view the page at {from.pathname}</p>
                <Form>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon>
                        <UserIcon />
                      </InputGroupAddon>
                      <Input
                        type="email"
                        name="email"
                        id="loginEmail"
                        placeholder="Email"
                        autocomplete="off"
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon>
                        <LockIcon />
                      </InputGroupAddon>
                      <Input
                        type="password"
                        name="password"
                        id="loginPassword"
                        placeholder="Password"
                        autocomplete="off"
                      />
                    </InputGroup>
                  </FormGroup>
                  <Button
                    className="submit-btn"
                    color="primary"
                    onClick={this.login}>
                    Log In
                  </Button>
                </Form>
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
