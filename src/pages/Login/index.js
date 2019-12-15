import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';

import { Input, Button, Loader } from '~/components';
import { validation } from '~/utils';

import userNameIcon from '<assets>/icons/ico-username.svg';
import lockIcon from '<assets>/icons/ico-lock.svg';

import { auth } from '~/state';

import './style.scss';

function Login() {
  const dispatch = useDispatch();
  const authError = useSelector(auth.selectors.getError);
  const isFetching = useSelector(auth.selectors.isFetching);
  return (
    <div className="login">
      {isFetching && <Loader />}
      <h1 className="login__header">
        testio<mark>.</mark>
      </h1>
      <p className="text-red-500">{authError}</p>
      <Form
        onSubmit={({ name, password }) => dispatch(auth.actions.authenticate(name, password))}
        initialValues={{
          name: null,
          password: null,
        }}
        render={({ handleSubmit }) => (
          <>
            <form className="login__form md:w-72 w-64" onSubmit={handleSubmit}>
              <Field
                validate={val => {
                  if (validation.isRequired(val)) return null;
                  return 'Please enter your username';
                }}
                icon={userNameIcon}
                name="name"
                type="text"
                placeholder="Username"
                component={Input}
              />
              <Field
                validate={val => {
                  if (validation.isRequired(val)) return null;
                  return 'Dont forget to enter your password!';
                }}
                className="mt-4"
                name="password"
                type="password"
                placeholder="Password"
                component={Input}
                icon={lockIcon}
              />
              <Button type="submit" className="mt-4 font-bold" text="Log In" />
            </form>
          </>
        )}
      />
    </div>
  );
}

export default Login;
