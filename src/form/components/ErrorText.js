import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {branch, renderNothing} from 'recompose';

import {fieldHasError} from '../utils';


const Error = styled.div`
  color: red;
`;


const ErrorText = ({error, className}) => (
  <div className={className}>
    {Object.keys(error).map(errorType => (
      <Error key={errorType}>
        {error[errorType]}
      </Error>
    ))}
  </div>
);

ErrorText.propTypes = {
  error: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

ErrorText.defaultProps = {
  className: null,
};


const enhance = branch(({touched, error}) => !fieldHasError({touched, error}), renderNothing);

export default enhance(ErrorText);
