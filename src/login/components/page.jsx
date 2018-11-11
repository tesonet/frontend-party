import React from 'react';
import styled from 'styled-components';

import LoginForm from './form';
import { COLORS, ASSETS_PATHS } from '../../app';

const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${COLORS.loginPageBackground};

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background: url(../../../../${ASSETS_PATHS.loginBackground});
        background-size: cover;
        top: 0px;
        right:0px;
      }
`;

const LoginFormContainer = styled.div`
    position: relative;
    max-width: 360px;
    width: 100%;
`;

const LoginLogo = styled.div`
    height: 64px;
    background: url(../../../../${ASSETS_PATHS.loginLogo}) no-repeat center center;
    max-width: 286px;
    background-size: contain;
    margin: 0 auto 70px
`;

const LoginPage = () => (
    <Page>
        <LoginFormContainer>
            <LoginLogo />
            <LoginForm />
        </LoginFormContainer>
    </Page>
);

export default LoginPage;
