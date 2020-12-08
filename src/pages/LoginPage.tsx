import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/images/logo.png';
import { GlobalReduxState } from '../types';
import { authActions } from '../actions';
import { Redirect } from 'react-router-dom';
import { SiteWrapper, Button, Input } from '../components';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import LockSvg from 'assets/vectors/ico-lock.svg';
import UserSvg from 'assets/vectors/ico-username.svg';

const LoginPage = (props: RouteComponentProps) => {

    const [formUsername, setFormUsername] = useState('');
    const [formPassword, setFormPassword] = useState('');

    const [formErrors, setFormErrors] = useState({
        usernameErrors: '',
        passwordErrors: ''
    });

    const dispatch = useDispatch();

    const { authenticated, loginError, loading } = useSelector((state: GlobalReduxState) => ({
        authenticated: state.authReducer.authenticated,
        loginError: state.authReducer.error,
        loading: state.authReducer.loading
    }));

    // FOR DEBUG PURPOSES ONLY
    //const alldata = useSelector((state: GlobalReduxState) => state);
    //console.log(alldata);

    if (authenticated) {
        // Forward to servers page after proper authentication
        return <Redirect to={`/servers/`} />;
    }

    const signIn = () => {

        // Dispatch login action with form credentials
        dispatch(authActions.login(formUsername, formPassword));
    }

    const validateFields = () => {

        // Define new empty error messages (initial)
        let messages = {
            usernameErrors: '',
            passwordErrors: ''
        } as { [index: string]: string }

        // Very basic validation here
        if (formUsername.length < 6) messages.usernameErrors = "Please enter username of at least 6 characters";
        if (formPassword.length < 6) messages.passwordErrors = "Please enter password of at least 6 characters";

        // Save collected messages to state if any..
        setFormErrors({ ...formErrors, ...messages })

        if (messages.usernameErrors === '' && messages.passwordErrors === '') {
            // Validation succeeded - let's do signIn!
            signIn();
        }
    }


    return (
        <>
            <div id="content-wrapper" className="login-page-bg login-background-image">

                <div id="content" className="content" style={{ margin: "auto" }}>

                    <SiteWrapper>

                        <Row justify="center">

                            <Col lg={4} md={6} sm={12}>

                                <div className="form-container">

                                    <img src={Logo} alt="SignIn logo" style={{ width: "75%", marginBottom: "32px" }} />

                                    <form noValidate onSubmit={(e: any) => { e.preventDefault() }} >

                                        <Input
                                            id="username"
                                            type="text"
                                            label=""
                                            placeholder="Username"
                                            autocomplete="username"
                                            error={formErrors.usernameErrors}
                                            value={formUsername}
                                            handleChange={setFormUsername}
                                            className="input mb--32"
                                            icon={UserSvg}
                                        />

                                        <Input
                                            id="password"
                                            type="password"
                                            label=""
                                            placeholder="Password"
                                            autocomplete="password"
                                            value={formPassword}
                                            error={formErrors.passwordErrors}
                                            handleChange={setFormPassword}
                                            className="input mb--32"
                                            icon={LockSvg}
                                        />

                                        <Button
                                            id="login-button"
                                            label={loading ? "" : "Log In"}
                                            className="button button--big button--lime mb--32"
                                            handleClick={validateFields}
                                            loading={loading}
                                            disabled={loading}
                                        />

                                        {/* Some anti-pattern here with keys as indexes... should be good for our non-complex case here */}
                                        {Object.values(formErrors).map((error: string, index: number) => <span className="error-message" key={index}>{error}</span>)}

                                        {loginError && <span className="error-message">{loginError.message}</span>}

                                    </form>

                                </div>

                            </Col>
                        </Row>

                    </SiteWrapper>

                </div>

            </div>
        </>
    );
}
export default LoginPage;