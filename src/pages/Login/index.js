import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actions as authActions } from "../../ducks/auth/actions";
import { isUserLoggedIn } from "../../ducks/auth/selectors";
import { TextInput } from "../../components/TextInput";
import "./index.scss";

class LoginComponent extends Component {
  state = {
    username: "tesonet",
    password: "partyanimal",
  }

  componentDidMount() {
    const { history, isUserLoggedIn } = this.props;
    if(isUserLoggedIn) {
      history.push('/servers')
    }
  }

  onChange = field => e => {
    this.setState({
      [field]: e.target.value
    })
  }

  login = () => {
    const { login } = this.props.authActions;
    const { username, password } = this.state;
    login({ username, password })
  }

  render() {
    const { password, username } = this.state;

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
                  onChange={this.onChange('username')}
                  value={username}
                  placeholder="Username"
                  icon="user" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col {...reponsiveSizing}>
              <div className="login__field">
                <TextInput
                  onChange={this.onChange('password')}
                  value={password}
                  placeholder="Password"
                  type="password"
                  icon="lock" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col {...reponsiveSizing}>
              <div className="login__field">
                <Button className="login__button" 
                  onClick={this.login}
                  color="primary">
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
    isUserLoggedIn: isUserLoggedIn(state)
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
  })
)(LoginComponent);
