import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorMessage from './error-message';
import { COLORS, ASSETS_PATHS } from '../../app';

const INPUT_ICONS = {
    username: ASSETS_PATHS.usernameIcon,
    password: ASSETS_PATHS.passwordIcon
};

const StyledInput = styled.input`
    height: 56px;

    background: #ffffff url(../../../../${props => INPUT_ICONS[props.iconName]}) no-repeat scroll 24px 18px;
    padding-left: 54px;

    &:focus,
    &:active {
        color: ${COLORS.inputTextColor};
    }

    ::placeholder {
        color: ${props => props.errorMessage ? COLORS.inputFieldError : COLORS.inputTextColor};
    }

    border: ${props => props.errorMessage ? `solid ${COLORS.inputFieldError} 2px` : 'initial'};
`;

const InputField = ({
    errorMessage,
    onChange,
    placeholder,
    value,
    type,
    iconName
}) => (
    <React.Fragment>
        <StyledInput
            errorMessage={errorMessage}
            type={type}
            className="form-control"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            iconName={iconName}
            autoComplete="off"
        />
        { errorMessage && <ErrorMessage message={errorMessage} /> }
    </React.Fragment>

);

InputField.propTypes = {
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    iconName: PropTypes.string
};

InputField.defaultProps = {
    type: 'text'
};

export default InputField;
