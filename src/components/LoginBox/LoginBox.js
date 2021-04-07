import React from "react";

import { ReactComponent as Icon } from "../../assets/logo-testio..svg";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import "./LoginBox.scss";

export const LoginBox = () => {
  return (
    <div className="login-box">
      <Icon className="login-box__icon" />
      <Input
        placeholder="Username"
        classNames={{
          wrapper: "login-box__input-wrapper"
        }}
      />
      <Input
        placeholder="Password"
        classNames={{
          wrapper: "login-box__input-wrapper"
        }}
      />
      <Button className="login-box__login-button">
        Log in
      </Button>
    </div>
  );
};

export default LoginBox;