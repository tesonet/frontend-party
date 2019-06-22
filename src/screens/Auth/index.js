// @flow
import * as React from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form';

import Logo from 'components/Logo';
import Row from 'components/Row';
import Button from 'components/Button';
import Input from 'components/Input';


import pageBg from './images/bg.jpg';

const Auth = () => {
    const { register, handleSubmit } = useForm();
    const handleFormSubmit = React.useCallback((form) => {
        console.info('onSubmit', form);
    }, []);
    
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
                                name="user"
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
                        <Row>
                            <Button
                                type="submit"
                            >
                                Log In
                            </Button>
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
    width: 363px;
    max-width: 100%;
`;

export default Auth;
