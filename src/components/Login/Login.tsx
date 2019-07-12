import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../static/background.jpg';
import logoLight from '../../static/logo-light.png';
import LoginForm from '../LoginForm/LoginForm';
import { screens } from '../../utils/helpers';
import { Sizes } from '../../common/constants';
import Card from '../common/Card';
import Page from '../common/Page';

const LoginPage = styled(Page)`
    background: url(${backgroundImage}) no-repeat 30% 50%;
    background-size: cover;
`;

const LoginCard = styled(Card)`
    width: 360px;
`;

const Logo = styled.img`
    max-width: 100%;
    height: auto;
    margin: 0 0 70px;

    @media ${screens[Sizes.XS]} {
        margin: 0 0 35px;
        max-width: 60%;
    }
`;

const Login = () => (
    <LoginPage>
        <LoginCard>
            <Logo src={logoLight} />
            <LoginForm />
        </LoginCard>
    </LoginPage>
);

export default Login;
