import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import {compose, mapProps} from 'recompose';
import styled from 'styled-components';

import api from '~/api';
import i18n from '~/i18n';
import {FormField, validate} from '~/form';
import {Icon, Button} from '../';


const InputsContainer = styled.div`
  padding-bottom: 10px;
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
      username: 'tesonet',
      password: 'partyanimal',
    },
  }),
  mapProps(({handleSubmit, ...props}) => ({
    ...props,
    onSubmit: handleSubmit(values => api.login(values)),
  })),
);

export default enhance(LoginForm);
