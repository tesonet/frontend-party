import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 56px;

    background: #ffffff url(../../../../images/${props => props.iconName}.png) no-repeat scroll 24px 18px;
    padding-left: 54px;

    &:focus,
    &:active {
        color: #999;
    }

    ::placeholder {
        color: #999
    }

    border-color: ${props => props.hasError ? 'red' : 'initial'};
`;

const InputField = ({
    hasError,
    onChange,
    placeholder,
    id,
    value,
    type,
    iconName
}) => (
    <StyledInput
        hasError={hasError}
        type={type}
        className="form-control"
        onChange={onChange}
        value={value}
        id={id}
        placeholder={placeholder}
        iconName={iconName}
    />
);

InputField.propTypes = {
    hasError: PropTypes.bool,
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
