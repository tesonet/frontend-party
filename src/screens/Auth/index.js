// @flow
import * as React from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { navigate } from '@reach/router';

import authActions from 'store/auth/actions';
import routes from 'routes';

import { type AuthReducerT } from 'store/auth';

import Logo from 'components/Logo';
import Row from 'components/Row';
import Button from 'components/Button';
import Input from 'components/Input';
import Spinner from 'components/Spinner';


import pageBg from './images/bg.jpg';

const goToHome = () => navigate(routes.home);

const Auth = () => {
    const dispatch = useDispatch();
    const auth: AuthReducerT = useSelector(state => state.auth);
    const { register, handleSubmit } = useForm();
    const handleFormSubmit = React.useCallback((form) => {
        dispatch(authActions.creators.getToken(form));
    }, [dispatch]);

    React.useEffect(() => {
        if (auth.token) {
            goToHome();
        }
    }, [auth.token]);

    return (
        <Page>
            <Body>
                <Row
                    align="center"
                >
                    <Logo />
                </Row>
                <Row
                    withSpace
                >
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                    >
                        <Row>
                            <Input
                                name="username"
                                autoFocus
                                icon="user"
                                placeholder="Username"
                                required
                                ref={register}
                            />
                        </Row>
                        <Row>
                            <Input
                                name="password"
                                icon="auth"
                                placeholder="Password"
                                type="password"
                                required
                                ref={register}
                            />
                        </Row>
                        <Row
                            align="center"
                        >
                            {!auth.isAuthInProcessing && (
                                <Button
                                    type="submit"
                                >
                                    Log In
                                </Button>
                            )}
                            {auth.isAuthInProcessing && (
                                <Spinner size={60} />
                            )}
                        </Row>
                    </form>
                </Row>
            </Body>
        </Page>
    );
};


const Page = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: #34394e url(${pageBg}) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

const Body = styled.div`
    max-width: 360px;
    width: 100%;
    padding: 16px;
`;

export default Auth;
