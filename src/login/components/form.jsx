import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import InputField from './input-field';
import LoginButton from './submit-button';
import ErrorMessage from './error-message';

const LoginFormPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #0b0f27;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background: url("../../../../images/bg.png");
        background-size: cover;
      }
`;

const LoginFormContainer = styled.div`
    position: absolute;
    max-width: 360px;
    width: 100%;
`;

const TestioLogo = styled.div`
    height: 64px;
    background: url("../../../../images/logotype-testio.png") no-repeat center center;
    max-width: 286px;
    background-size: contain;
    margin: 0 auto 70px
`;

const StyledFormGroup = styled.div`
      margin-bottom: 0px;
      margin-top: 20px;
`;

export default class LoginForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { username, password } = this.state;
        const { onSubmit } = this.props;

        onSubmit(username, password);
    }

    render() {
        const { username, password } = this.state;
        const { usernameValidationMessage, passwordValidationMessage, apiErrorMessage } = this.props;

        return (
            <LoginFormPage>
                <LoginFormContainer>
                    <TestioLogo />
                    <form onSubmit={this.handleSubmit}>
                        <StyledFormGroup className="form-group">
                            <InputField
                                errorMessage={usernameValidationMessage}
                                value={username}
                                onChange={this.handleUsernameChange}
                                iconName="ico-username"
                                className="form-control"
                                id="nameField"
                                placeholder="Username"
                            />
                        </StyledFormGroup>
                        <StyledFormGroup className="form-group">
                            <InputField
                                errorMessage={passwordValidationMessage}
                                value={password}
                                onChange={this.handlePasswordChange}
                                iconName="ico-lock"
                                className="form-control"
                                id="passField"
                                type="password"
                                placeholder="Password"
                            />
                        </StyledFormGroup>
                        { apiErrorMessage && <ErrorMessage message={apiErrorMessage} /> }
                        <LoginButton />
                    </form>
                </LoginFormContainer>
            </LoginFormPage>
        );
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    usernameValidationMessage: PropTypes.string,
    passwordValidationMessage: PropTypes.string,
    apiErrorMessage: PropTypes.string
};
