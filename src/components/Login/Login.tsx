import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { push } from 'connected-react-router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import LoginForm from './LoginForm';
import { Credentials } from '../../redux/containers/auth/authReducer';
import { AuthActions } from '../../redux/containers/auth/authActions';
import { apiCall } from '../../helpers/apiCall';

import './Login.scss';

const credentialValidation = Yup.object().shape({
  username: Yup.string()
    .required('Required')
    .matches(/^[a-zA-Z0-9_ ]*$/, 'No special characters allowed')
    .min(3, 'Username must consist of at least 3 characters')
    .max(16, 'Username cannot be longer than 16 characters'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Password must consist of at least 8 characters')
});

const LoginComponent: React.FC<DispatchProp> = ({ dispatch }) => {
  const handleLogin = async (data: Credentials) => {
    try {
      dispatch(AuthActions.login());
      const res = await apiCall<{ token: string }>({
        url: 'http://playground.tesonet.lt/v1/tokens',
        method: 'POST',
        data
      }, dispatch);

      dispatch(AuthActions.loginSuccess(res.token));
      dispatch(push('/servers'));
    } catch (ex) {
      dispatch(AuthActions.loginError(ex));
    }
  }

  return (
    <div className="login">
      <div className="login__container pure-g">
        <div className="login__container-centered pure-u-1 pure-u-md-1-3">
          <img className="login__logo" src="/static/images/white-logo.svg" />
          <Formik<Credentials>
            onSubmit={handleLogin}
            initialValues={{ username: '', password: '' }}
            validationSchema={credentialValidation}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {props => <LoginForm {...props} />}
          </Formik>
        </div>
      </div>
    </div>
  );
};

const Login = connect()(LoginComponent);
export default Login;