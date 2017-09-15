import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import classNames from 'classnames';
import styled from 'styled-components';

import {TextInput} from '~/inputs';

import InputError from '../InputError';
import reduxProps from './reduxProps';


const Container = styled.div`
  margin-bottom: ${props => props.hasError ? 2 : 19}px;
`;


const TextFieldComponent = ({input, meta, className, hasError, ...props}) => (
  <Container className={classNames('form-group', className)} hasError={hasError(meta)}>
    <TextInput
      {...input}
      {...props}
      hasError={hasError(meta)}
      onBlur={() => input.onBlur(input.value)} />
    <InputError {...meta} />
  </Container>
);

TextFieldComponent.propTypes = {
  input: reduxProps.input.isRequired,
  meta: reduxProps.meta.isRequired,
  hasError: PropTypes.func,
  className: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  className: null,
  hasError: () => false,
};


const TextField = props => (
  <Field {...props} component={TextFieldComponent} />
);

TextField.propTypes = {
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  name: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
