import React from 'react';
import PropTypes from 'prop-types';

import {TextField} from './fields';
import {fieldHasError} from '../utils';


const FormField = (props) => {
  switch (props.type) {
    default:
      return <TextField {...props} hasError={fieldHasError} />;
  }
};

FormField.propTypes = {
  type: PropTypes.string.isRequired,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
