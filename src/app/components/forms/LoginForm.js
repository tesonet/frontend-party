import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form';
import {compose, mapProps} from 'recompose';
import styled from 'styled-components';

import i18n from '~/i18n';
import {FormField, validate} from '~/form';
import {Button} from '../';


const InputsContainer = styled.div`
  padding-bottom: 10px;
`;


const LoginForm = ({onSubmit}) => (
  <form>
    <InputsContainer>
      <FormField
        name='username'
        placeholder={i18n.t('login.username')}
        validate={validate.required} />
      <FormField
        name='password'
        type='password'
        placeholder={i18n.t('login.password')}
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
  }),
  mapProps(({handleSubmit, ...props}) => ({
    ...props,
    onSubmit: handleSubmit(Promise.reject),
  })),
);

export default enhance(LoginForm);
