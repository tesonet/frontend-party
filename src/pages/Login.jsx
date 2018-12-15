import React from "react";
import validate from "../helpers/validation";

import { Container, Form } from "reactstrap";

import Input from "./login/Input";
import Button from "./login/Button";
import { Logo, CenterLogo, BackgroundContainer } from "./Login.styles";

import UserIcon from "../assets/icons/ico-username.svg";
import LockIcon from "../assets/icons/ico-lock.svg";
import TesonetWhiteLogo from "../assets/images/white-logo.png";
import {
  WARNING_COLOR,
  SUCCESS_COLOR,
  LOGIN_TEXT,
  DEFAULT_USERNAME,
  DEFAULT_PASSWORD,
} from "./constants";

class Login extends React.Component {
  state = {
    username: DEFAULT_USERNAME,
    password: DEFAULT_PASSWORD,
    errors: {},
  };

  changeInputField = fieldName => ({ target: { value } }) =>
    this.setState({ [fieldName]: value });

  submit = async e => {
    e.preventDefault();

    const errors = validate(this.state);
    this.setState({ errors });

    if (!Object.keys(errors).length) {
      try {
        await this.props.authenticate(this.state);
      } catch (err) {
        const previousErrors = this.state.errors;
        this.setState({
          errors: {
            submit: "Unauthorized! Check Credentials!",
            ...previousErrors,
          },
        });
      }
    }
  };

  render() {
    const { username, password, errors } = this.state;

    return (
      <BackgroundContainer className="d-flex">
        <Container className="col-sm-12 col-md-6 col-lg-4 m-auto">
          <CenterLogo>
            <Logo src={TesonetWhiteLogo} />
          </CenterLogo>
          <Form onSubmit={this.submit}>
            <Input
              icon={UserIcon}
              name="username"
              value={username}
              placeholder="Username"
              onChange={this.changeInputField("username")}
              isInvalid={errors.username}
            />
            <Input
              icon={LockIcon}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.changeInputField("password")}
              isInvalid={errors.password}
            />
            <Button
              data-testid="login-button"
              type="submit"
              className="w-100"
              color={!!errors.submit ? WARNING_COLOR : SUCCESS_COLOR}
              text={!!errors.submit ? errors.submit : LOGIN_TEXT}
            />
          </Form>
        </Container>
      </BackgroundContainer>
    );
  }
}

export default Login;
