import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorMessage = styled.span`
    color: #ff2c33;
`;

const ErrorMessage = ({
    message
}) => (
    <StyledErrorMessage>{message}</StyledErrorMessage>
);

ErrorMessage.propTypes = {
    message: PropTypes.string
};

export default ErrorMessage;
