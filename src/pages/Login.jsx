import React from "react";

import Input from "./login/Input";
import Button from "./login/Button";
import Form from "./login/Form";
import { Logo, BackgroundContainer } from "./Login.styles";

import TesonetLogo from "../assets/images/testio.png";
import UserIcon from "../assets/icons/ico-username.svg";
import LockIcon from "../assets/icons/ico-lock.svg";
import { Container } from "reactstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  changeInputField = fieldName => ({ target: { value } }) =>
    this.setState({ [fieldName]: value });

  submit = () => {
    console.log(this.state);
  };

  render() {
    const { username, password } = this.state;

    return (
      <BackgroundContainer className="d-flex">
        <Container className="col-sm-12 col-md-6 col-lg-4 m-auto">
          <div
            style={{
              paddingBottom: 60,
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Logo src={TesonetLogo} />
          </div>
          <Form onSubmit={this.submit}>
            <Input
              type="username"
              icon={UserIcon}
              value={username}
              placeholder="Username"
              onChange={this.changeInputField("username")}
            />

            <Input
              icon={LockIcon}
              type="password"
              value={password}
              placeholder="Password"
              onChange={this.changeInputField("password")}
            />
            <Button className="w-100" color="#9fd533" text="Log In" />
          </Form>
        </Container>
      </BackgroundContainer>
    );
  }
}

export default Login;
