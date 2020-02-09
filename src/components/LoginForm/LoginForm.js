import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { onLogin, loginClearError } from "../../actions/authActions";
import User from "../Icons/User";
import Lock from "../Icons/Lock";

const validate = values => {
  let errors = {};
  if (!values.username) {
    errors.username = "Required field";
  }
  if (!values.password) {
    errors.password = "Required field";
  }
  return errors;
};

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 230px;
  justify-content: space-between;
  width: 100%;
  max-width: 363px;
`;

const StyledButton = styled.button`
  background-color: #9fd533;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  height: 58px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #86b300;
    cursor: pointer;
  }
`;

const StyledInputField = styled(Field)`
  border: none;
  height: 58px;
  font-weight: 300;
  letter-spacing: 0.4px;

  ::placeholder {
    color: #b3b3b3;
    font-weight: 300;
    letter-spacing: 0.4px;
  }
`;

const StyledInputContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: #ff000094;
`;

const StyledAuthError = styled.div`
  height: 20px;
  color: #fff;
  text-align: center;
`;

const LoginForm = () => {
  const isFetching = useSelector(({ auth }) => auth.isFetching);
  const authError = useSelector(({ auth }) => auth.error);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={values => {
        // clear fetch error
        if (authError) dispatch(loginClearError());
        return validate(values);
      }}
      onSubmit={values => dispatch(onLogin(values))}
      onBlur={(...args) => console.log(args)}
    >
      <StyledForm>
        <StyledInputContainer>
          <User />
          <StyledInputField
            type="username"
            name="username"
            placeholder="Username"
          />
          <StyledErrorMessage name="username" component="div" />
        </StyledInputContainer>

        <StyledInputContainer>
          <Lock />
          <StyledInputField
            type="password"
            name="password"
            placeholder="Password"
          />
          <StyledErrorMessage name="password" component="div" />
        </StyledInputContainer>
        <StyledButton type="submit" disabled={isFetching}>
          {isFetching ? "Loading..." : "Log In"}
        </StyledButton>
        <StyledAuthError>
          {authError && "Login failed. Please try again."}
        </StyledAuthError>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
