import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { onLogin, loginClearError } from "../../actions/authActions";
import UserIcon from "../Icons/User";
import LockIcon from "../Icons/Lock";
import * as styles from "../../constants/styles";

const LoginForm = () => {
  const isFetching = useSelector(({ auth }) => auth.isFetching);
  const authFetchError = useSelector(({ auth }) => auth.error);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={values => {
        // clear login fetch error
        if (authFetchError) dispatch(loginClearError());
        return validate(values);
      }}
      onSubmit={values => dispatch(onLogin(values))}
    >
      <StyledForm>
        <StyledInputContainer>
          <UserIcon padding="0 10px" />
          <StyledInputField
            type="username"
            name="username"
            placeholder="Username"
          />
          <StyledErrorMessage name="username" component="div" />
        </StyledInputContainer>
        <StyledInputContainer>
          <LockIcon padding="0 10px" />
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
          {authFetchError && "Login failed. Please try again."}
        </StyledAuthError>
      </StyledForm>
    </Formik>
  );
};

const validate = values => {
  const errors = {};
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
  justify-content: space-between;
  height: 230px;
  width: 100%;
  max-width: 363px;
`;

const StyledButton = styled.button`
  height: 58px;
  border: none;
  border-radius: 10px;
  background-color: ${styles.colors.green2};
  color: ${styles.colors.white};
  ${styles.fontWeight.light}
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${styles.colors.green3};
    cursor: pointer;
  }
`;

const StyledInputField = styled(Field)`
  height: 58px;
  border: none;
  ${styles.fontWeight.light}
  ${styles.letterSpacing.small}
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${styles.colors.grey4};
    ${styles.fontWeight.light}
    ${styles.letterSpacing.small}
  }
`;

const StyledInputContainer = styled.div`
  ${styles.align.vertical}
  position: relative;
  border-radius: 10px;
  background-color: ${styles.colors.white};
  :focus-within {
    outline: auto 5px -webkit-focus-ring-color;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  right: 10px;
  color: ${styles.colors.white};
`;

const StyledAuthError = styled.div`
  height: 20px;
  color: ${styles.colors.white};
  text-align: center;
`;

export default LoginForm;
