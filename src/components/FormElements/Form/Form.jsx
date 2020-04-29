import React from 'react';
import { func, node } from 'prop-types';
import { reduxForm } from 'redux-form';

import { Box } from 'components/Core';

const propTypes = {
  handleSubmit: func.isRequired,
  children: node.isRequired
};

const Form = ({ children, handleSubmit }) => {
  return (
    <Box
      as='form'
      display='flex'
      flexDirection='column'
      onSubmit={handleSubmit}
    >
      {children}
    </Box>
  );
};

Form.propTypes = propTypes;

export default reduxForm()(Form);
