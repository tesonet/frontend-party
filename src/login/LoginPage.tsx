import React from 'react';
import { Formik, Form, Field } from 'formik';
import './LoginPage.scss';
import LoginLogoImage from '../assets/logo-testio.svg';
import UserImage from '../assets/user.svg';
import PasswordImage from '../assets/password.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import * as tesonetAPI from '../tesonetAPI';
import { authSuccess, authPending, authError } from '../authSlice';
import { Redirect, useHistory } from 'react-router-dom';
import { RootState } from '../rootReducer';

const ErrorMessage: React.FC = ({ children }) => {
  return <div className="p-2 mb-3 bg-warning text-white">{children}</div>;
};

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const { accessToken, error, loading } = useSelector((state: RootState) => state.auth);

  if (accessToken) {
    return <Redirect to="/" />;
  }

  return (
    <div className="LoginPage">
      <div>
        <img src={LoginLogoImage} alt="Logo" />
      </div>
      <Formik
        initialValues={{ username: 'tesonet', password: 'partyanimal' }}
        validate={values => {
          const errors: { username?: string } = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.password) {
            errors.username = 'Required';
          }
          return errors;
        }}
        onSubmit={async values => {
          dispatch(authPending());
          try {
            const { token } = await tesonetAPI.login(values);
            localStorage.setItem('token', token);
            dispatch(authSuccess({ token }));
            history.push('/');
          } catch (e) {
            dispatch(authError(e.response.data));
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="mt-5">
            <div className="login-input mb-3">
              <img className="mx-2" src={UserImage} alt="user" />
              <Field type="text" name="username" className="w-100" placeholder="Username" />
            </div>
            <div className="login-input mb-3">
              <img className="mx-2" src={PasswordImage} alt="password" />
              <Field type="password" name="password" className="w-100" placeholder="Password" />
            </div>
            {errors.username === 'Required' && touched.username && <ErrorMessage>Username is required</ErrorMessage>}
            {errors.password === 'Required' && touched.password && <ErrorMessage>Password is required</ErrorMessage>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <button type="submit" className="login-button" disabled={loading}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
