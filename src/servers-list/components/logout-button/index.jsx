import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import enhance from './enhancer';
import { COLORS, ASSETS } from '../../../app';
import translations from './index.lang';

const StyledLogoutButton = styled.button`
    height: 56px;
    background: #ffffff url(${ASSETS.logout}) no-repeat scroll 24px 18px;
    border: none;
    padding: 0 15px 0 50px;
    cursor: pointer;

    &:focus,
    &:hover {
        outline: none;
        color: ${COLORS.logoutOnHover};
    }
`;

export const LogoutButton = ({ onClick }) => (
    <StyledLogoutButton onClick={onClick}>
        <FormattedMessage {...translations.logout} />
    </StyledLogoutButton>
);

LogoutButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default enhance(LogoutButton);
