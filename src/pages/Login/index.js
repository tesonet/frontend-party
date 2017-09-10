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

    const reponsiveSizing = {
      xs: 12,
      sm:{ size: 10, offset: 1 },
      md:{ size: 8, offset: 2 },
      lg:{ size: 6, offset: 3 },
      xl:{ size: 6, offset: 3 },
    }

    return (
      <div className="login">
        <Container>
          <Row>
            <Col className="login__logo-wrapper" 
              {...reponsiveSizing}>
              <img
                className="login__logo"
                src="/testio-logo-light.png"
                alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col {...reponsiveSizing}>
              <div className="login__field">
                <TextInput
                  placeholder="Username"
                  icon="user"
                  onKeyDown={testAction} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col {...reponsiveSizing}>
              <div className="login__field">
                <TextInput
                  placeholder="Password"
                  type="password"
                  icon="lock"
                  onKeyDown={testAction} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col {...reponsiveSizing}>
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
