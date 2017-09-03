import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, {css} from 'styled-components';
import {branch, renderComponent} from 'recompose';


const Input = ({hasError, className, ...props}) => (
  <input className={classNames('form-control', className)} {...props} />
);

Input.propTypes = {
  className: PropTypes.string,
  hasError: PropTypes.bool,
};

Input.defaultProps = {
  className: null,
  hasError: false,
};

const TextInput = styled(Input)`
  padding: 12px 24px;
  height: 46px;

  &:focus {
    color: ${props => props.theme.color.activeInputText};
  }

  ${props => props.hasError ? css`
    color: ${props.theme.color.errorText1};
    border-color: ${props.theme.color.errorBorder1};
  ` : ''}
`;


const InputGroup = ({hasError, className, inputGroup, ...props}) => (
  <div className={classNames('input-group', className)}>
    {inputGroup}
    <TextInput {...props} />
  </div>
);

InputGroup.propTypes = {
  className: PropTypes.string,
  inputGroup: PropTypes.node.isRequired,
  hasError: PropTypes.bool,
};

InputGroup.defaultProps = {
  className: null,
  hasError: false,
};

const TextInputGroup = styled(InputGroup)`
  > .input-group-addon {
    background-color: white;
    color: ${props => props.theme.color.inputGroupAddonColor1};
    padding-left: 18px;
    padding-right: 12px;
  }

  > .form-control {
    padding-left: 12px;
    border-left: none;
  }

  ${props => props.hasError ? css`
    > .input-group-addon {
      color: ${props.theme.color.errorText1};
    }

    > * {
      border-top-color: ${props.theme.color.errorText1};
      border-bottom-color: ${props.theme.color.errorText1};
    }

    > *:first-child {
      border-left-color: ${props.theme.color.errorText1};
    }

    > *:last-child:not(:focus) {
      border-right-color: ${props.theme.color.errorText1};
    }
  ` : ''}
`;


const enhance = branch(props => props.inputGroup != null, renderComponent(TextInputGroup));

export default enhance(TextInput);
