import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorMessage from '../error-message';
import { COLORS, ASSETS } from '../../../app';
import enhance from './enhancer';

const StyledInput = styled.input`
    height: 56px;
    padding-left: 54px;
    border: ${props => props.errorMessage ? `solid ${COLORS.inputFieldError} 2px` : 'initial'};

    &:focus,
    &:active {
        color: ${COLORS.inputTextColor};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    ::placeholder {
        color: ${props => props.errorMessage ? COLORS.inputFieldError : COLORS.inputTextColor};
    }
`;

const InputContainer = styled.div`
    display:inline-block;
    position:relative;
    width: 100%;

    :before{
        content:"";
        position:absolute;
        width:20px;
        height:20px;
        top: 18px;
        left: 23px;
        background: url(${props => ASSETS[props.iconName]}) no-repeat;
        background-size: 20px 20px;
    }
`;

export const InputField = ({
    errorMessage,
    onChange,
    placeholder,
    value,
    type,
    iconName
}) => (
    <InputContainer iconName={iconName}>
        <StyledInput
            errorMessage={errorMessage}
            type={type}
            className="form-control"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
        { errorMessage && <ErrorMessage message={errorMessage} /> }
    </InputContainer>

);

InputField.propTypes = {
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    iconName: PropTypes.string
};

InputField.defaultProps = {
    type: 'text'
};

export default enhance(InputField);
