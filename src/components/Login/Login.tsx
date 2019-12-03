import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import LoginForm from './LoginForm';

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

export interface Credentials {
  username: string;
  password: string;
}

const Login: React.FC = () => (
  <div className="login">
    <div className="login__container pure-g">
      <div className="login__container-centered pure-u-1 pure-u-md-1-3">
        <img className="login__logo" src="/static/images/white-logo.svg" />
        <Formik<Credentials>
          onSubmit={() => console.log('LOGIN')}
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

export default Login;