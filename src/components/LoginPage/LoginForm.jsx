import React from 'react';
import compose from 'compose';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { InputField } from '@Common/components';

import { LOGIN_FORM, PASSWORD, USERNAME } from '../../config/constants';

const LoginForm = ({ onSubmit, handleSubmit }) => (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-tesonet-gray-700 rounded-lg px-8 pt-7 pb-8 mb-4 my-16"
  >
    <InputField
      name={USERNAME}
      label="User name"
      placeholder="Enter user name"
      type="text"
    />
    <InputField
      name={PASSWORD}
      label="Password"
      placeholder="Enter password"
      type="password"
    />

    <div className="flex justify-center pt-4">
      <button
        type="submit"
        className="rounded-full bg-tesonet-purple-900 text-bold text-gray-100 px-7 py-1.5"
      >
        Login
      </button>
    </div>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default compose(
  reduxForm({
    form: LOGIN_FORM,
  }),
)(LoginForm);
