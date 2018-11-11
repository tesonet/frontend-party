import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLORS } from '../../app';

const StyledErrorMessage = styled.span`
    color: ${COLORS.erroMessage};
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
