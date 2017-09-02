import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import {compose, mapProps} from 'recompose';

import {FormField, validate} from '~/form';


const LoginForm = ({onSubmit}) => (
  <form>
    <FormField name='username' validate={validate.required} />
    <FormField name='password' type='password' validate={validate.required} />

    <button type='submit' onClick={onSubmit}>Submit</button>
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const enhance = compose(
  reduxForm({
    form: 'LoginForm',
  }),
  mapProps(({handleSubmit, ...props}) => ({
    ...props,
    onSubmit: handleSubmit(Promise.reject),
  })),
);

export default enhance(LoginForm);
