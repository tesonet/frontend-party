import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { login } from "../../actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(({ auth }) => auth.loggedIn);

  return loggedIn ? (
    <Redirect to="/servers" />
  ) : (
    <div>
      <Input />
      <Input />
      <Button onClick={() => dispatch(login())} buttonText="Log in" />
    </div>
  );
};

export default Login;
