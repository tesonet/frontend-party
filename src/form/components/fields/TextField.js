import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import classNames from 'classnames';

import {TextInput} from '~/inputs';

import InputError from '../InputError';
import reduxProps from './reduxProps';


const TextFieldComponent = ({input, meta, className, hasError, ...props}) => (
  <div className={classNames('form-group', className)}>
    <TextInput
      {...input}
      {...props}
      hasError={hasError(meta)}
      onBlur={() => input.onBlur(input.value)} />
    <InputError {...meta} />
  </div>
);

TextFieldComponent.propTypes = {
  input: reduxProps.input, // eslint-disable-line
  meta: reduxProps.meta, // eslint-disable-line
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
