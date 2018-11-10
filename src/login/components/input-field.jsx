import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorMessage from './error-message';

const StyledInput = styled.input`
    height: 56px;

    background: #ffffff url(../../../../images/${props => props.iconName}.png) no-repeat scroll 24px 18px;
    padding-left: 54px;

    &:focus,
    &:active {
        color: #999;
    }

    ::placeholder {
        color: ${props => props.errorMessage ? '#d11124' : '#999'};
    }

    border: ${props => props.errorMessage ? 'solid #d11124 2px' : 'initial'};
`;

const InputField = ({
    errorMessage,
    onChange,
    placeholder,
    id,
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
            id={id}
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
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    iconName: PropTypes.string
};

InputField.defaultProps = {
    type: 'text'
};

export default InputField;
