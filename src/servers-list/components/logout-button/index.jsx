import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import enhance from './enhancer';
import { COLORS, ASSETS_PATHS } from '../../../app';

const StyledLogoutButton = styled.button`
    height: 56px;
    background: #ffffff url(../../../../${ASSETS_PATHS.logout}) no-repeat scroll 24px 18px;
    border: none;
    padding: 0 15px 0 50px;
    cursor: pointer;

    &:focus,
    &:hover {
        outline: none;
        color: ${COLORS.logoutOnHover};
    }
`;

const LogoutButton = ({ onClick }) => (
    <StyledLogoutButton onClick={onClick}>Logout</StyledLogoutButton>
);

LogoutButton.propTypes = {
    onClick: PropTypes.func
};

export default enhance(LogoutButton);
