import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { onLogin, loginClearError } from "../../actions/authActions";

const validate = values => {
  let errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

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
    >
      <Form>
        <Field type="username" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        {authError && "Login failed. Try again."}
        <button type="submit" disabled={isFetching}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
