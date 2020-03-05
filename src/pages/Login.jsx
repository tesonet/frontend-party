import React from 'react';
import { connect } from 'react-redux';

import { Form, Field, Input } from 'components/FormElements';
import { isRequired } from 'utils/validations';

const Login = () => {
  return (
    <Form
      form='loginForm'
      onSubmit={values => {
        /** @todo handle submit */
      }}
    >
      <Field
        name='userName'
        placeholder='username'
        component={Input.Text}
        validate={isRequired}
      />
      <Field
        name='userPassword'
        placeholder='password'
        component={Input.Text}
        validate={isRequired}
      />
      <button type='submit'>Login</button>
    </Form>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
