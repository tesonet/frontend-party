import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../static/background.jpg';
import logoLight from '../../static/logo-light.png';
import LoginForm from '../LoginForm/LoginForm';
import screens from '../../utils/screens';
import { Breakpoints } from '../../common/constants';

const Page = styled.div`
    display: flex;
    min-height: 100vh;
    background: url(${backgroundImage}) no-repeat 30% 50%;
    background-size: cover;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    display: flex;
    width: 360px;
    flex-direction: column;
    align-items: center;

    ${screens[Breakpoints.XS]`
        width: 80%;
    `}
`;

const Logo = styled.img`
    max-width: 100%;
    height: auto;
    margin: 0 0 70px;

    ${screens[Breakpoints.XS]`
        margin: 0 0 35px;
        max-width: 60%;
    `}
`;

const LoginPage = () => (
    <Page>
        <Card>
            <Logo src={logoLight} />
            <LoginForm />
        </Card>
    </Page>
);

export default LoginPage;
