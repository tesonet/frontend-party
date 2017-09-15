import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reduxForm, SubmissionError} from 'redux-form';
import {compose} from 'recompose';
import styled from 'styled-components';

import api from '~/api';
import auth from '~/auth';
import i18n from '~/i18n';
import {FormField, FormSubmitError, validate} from '~/form';

import {FAIcon, Button} from '../';


const InputsContainer = styled.div`
  padding-bottom: 10px;
`;

const SubmitError = styled(FormSubmitError)`
  padding-top: 10px;
`;


const LoginForm = ({onSubmit}) => (
  <form onSubmit={onSubmit}>
    <InputsContainer>
      <FormField
        name='username'
        placeholder={i18n.t('login.username')}
        inputGroup={<span className='input-group-addon'><FAIcon type='user' /></span>}
        validate={validate.required} />
      <FormField
        name='password'
        type='password'
        placeholder={i18n.t('login.password')}
        inputGroup={<span className='input-group-addon'><FAIcon type='lock' /></span>}
        validate={validate.required} />
    </InputsContainer>

    <Button type='submit' styleType='primary'>{i18n.t('button.logIn')}</Button>

    <SubmitError name='errors' />
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const enhance = compose(
  reduxForm({
    form: 'LoginForm',
  }),
  connect(
    null,
    (dispatch, {handleSubmit}) => ({
      onSubmit: handleSubmit(async (values) => {
        try {
          const res = await api.logIn(values);
          dispatch(auth.actions.logIn(res.token));
        } catch (err) {
          if (err && err.message === 'Unauthorized') {
            throw new SubmissionError({errors: {error: i18n.t('login.unauthorized')}});
          } else {
            throw err;
          }
        }
      }),
    }),
  ),
);

export default enhance(LoginForm);
