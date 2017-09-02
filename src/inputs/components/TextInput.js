import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, {css} from 'styled-components';


const Input = ({hasError, className, ...props}) => ( // eslint-disable-line
  <input className={classNames('form-control', className)} {...props} />
);

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: null,
};


const TextInput = styled(Input)`
  ${props => props.hasError ? css`
    color: ${props.theme.color.errorRed1};
    border-color: ${props.theme.color.errorRed1};
  ` : null}


  &:focus {
    color: ${props => props.theme.color.activeInputText};
  }
`;

export default TextInput;
