import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions as authActions } from '../../ducks/auth/actions'
// import styles from './index.css';

class LoginComponent extends Component {
  render() {
    const {testAction} = this.props.authActions;

    return (
      <div>
        <Row>
          <Col xs="3">
            <Button onClick={testAction}>Hello world</Button>
          </Col>
          <Col xs="3">
            labas
          </Col>
          <Col xs="3">
            labas
          </Col>
          <Col xs="3">
            labas
          </Col>
        </Row>
      </div>
    );
  }
}

export const Login = connect(
  state => ({
    count: state.auth.count
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
  })
)(LoginComponent)
