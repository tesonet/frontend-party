import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as authActions } from "../../ducks/auth/actions";
import { TextInput } from "../../components/TextInput";
import "./index.scss";

class LoginComponent extends Component {
  render() {
    const { testAction } = this.props.authActions;

    return (
      <div className="login">
        <Container>
          <Row>
            <Col className="login__logo-wrapper" xs={{ size: 6, offset: 3 }}>
              <img
                className="login__logo"
                src="/testio-logo-light.png"
                alt="logo"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 6, offset: 3 }}>
              <div className="login__field">
                <TextInput
                  placeholder="Username"
                  icon="user"
                  onKeyDown={testAction}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 6, offset: 3 }}>
              <div className="login__field">
                <TextInput
                  placeholder="Password"
                  type="password"
                  icon="lock"
                  onKeyDown={testAction}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 6, offset: 3 }}>
              <div className="login__field">
                <Button className="login__button" color="primary">
                  Log In
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
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
)(LoginComponent);
