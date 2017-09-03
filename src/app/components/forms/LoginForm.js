import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, SubmissionError} from 'redux-form';
import {compose, mapProps} from 'recompose';
import styled from 'styled-components';

import api from '~/api';
import i18n from '~/i18n';
import {FormField, FormSubmitError, validate} from '~/form';
import {Icon, Button} from '../';


const InputsContainer = styled.div`
  padding-bottom: 10px;
`;

const SubmitError = styled(FormSubmitError)`
  padding-bottom: 20px;
`;


const LoginForm = ({onSubmit}) => (
  <form>
    <InputsContainer>
      <FormField
        name='username'
        placeholder={i18n.t('login.username')}
        inputGroup={<span className='input-group-addon'><Icon className='fa-user' /></span>}
        validate={validate.required} />
      <FormField
        name='password'
        type='password'
        placeholder={i18n.t('login.password')}
        inputGroup={<span className='input-group-addon'><Icon className='fa-lock' /></span>}
        validate={validate.required} />
    </InputsContainer>
    <SubmitError name='errors' />

    <Button type='submit' styleType='primary' onClick={onSubmit}>{i18n.t('button.logIn')}</Button>
  </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const enhance = compose(
  reduxForm({
    form: 'LoginForm',
    initialValues: {
      username: 'tesonet2',
      password: 'partyanimal',
    },
  }),
  mapProps(({handleSubmit, ...props}) => ({
    ...props,
    onSubmit: handleSubmit(async (values) => {
      try {
        const res = await api.login(values);
        console.log('Loged in!', res);
      } catch (err) {
        if (err && err.message === 'Unauthorized') {
          throw new SubmissionError({errors: {error: i18n.t('login.unauthorized')}});
        } else {
          console.error(err);
        }
      }
    }),
  })),
);

export default enhance(LoginForm);
