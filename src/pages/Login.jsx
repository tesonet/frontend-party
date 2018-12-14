import React from "react";
import { validate } from "../helpers/validation";

import Input from "./login/Input";
import Button from "./login/Button";

import { Logo, CenterLogo, BackgroundContainer } from "./Login.styles";
import TesonetLogo from "../assets/images/testio.png";
import UserIcon from "../assets/icons/ico-username.svg";
import LockIcon from "../assets/icons/ico-lock.svg";
import { Container, Form } from "reactstrap";

class Login extends React.Component {
  state = {
    username: "tesonet",
    password: "partyanimal",
    errors: {}
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
            ...previousErrors
          }
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
            <Logo src={TesonetLogo} />
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
              type="submit"
              className="w-100"
              color={!!errors.submit ? "red" : "#9fd533"}
              text={!!errors.submit ? errors.submit : "Log In"}
            />
          </Form>
        </Container>
      </BackgroundContainer>
    );
  }
}

export default Login;
