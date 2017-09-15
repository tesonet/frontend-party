import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {branch, renderNothing} from 'recompose';

import {isErrorDisplayable} from '../utils';


const ErrorText = styled.div`
  font-size: 12px;
  color: ${props => props.theme.color.errorText1};
`;


const ErrorDisplayer = ({error, className}) => (
  <div className={className}>
    {Object.keys(error).map(errorType => (
      <ErrorText key={errorType} className='form-text text-muted'>
        {error[errorType]}
      </ErrorText>
    ))}
  </div>
);

ErrorDisplayer.propTypes = {
  error: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

ErrorDisplayer.defaultProps = {
  className: null,
};


const enhance = branch(props => !isErrorDisplayable(props.error), renderNothing);

export default enhance(ErrorDisplayer);
