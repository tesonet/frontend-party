import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import InputField from '../input-field';
import SubmitButtonWithLoader from '../submit-button-with-loader';
import ErrorMessage from '../error-message';
import enhance from './enhancer';
import translations from './index.lang';

const FormGroupWithMargin = styled.div`
      margin-bottom: 0px;
      margin-top: 20px;
`;

class LoginForm extends React.PureComponent {
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
        const {
            usernameValidationMessage,
            passwordValidationMessage,
            apiErrorMessage
        } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroupWithMargin className="form-group">
                    <InputField
                        errorMessage={usernameValidationMessage}
                        value={username}
                        onChange={this.handleUsernameChange}
                        iconName="usernameIcon"
                        className="form-control"
                        placeholder={translations.username}
                    />
                </FormGroupWithMargin>
                <FormGroupWithMargin className="form-group">
                    <InputField
                        errorMessage={passwordValidationMessage}
                        value={password}
                        onChange={this.handlePasswordChange}
                        iconName="passwordIcon"
                        className="form-control"
                        type="password"
                        placeholder={translations.password}
                    />
                </FormGroupWithMargin>
                { apiErrorMessage && <ErrorMessage message={apiErrorMessage} /> }
                <SubmitButtonWithLoader />
            </form>
        );
    }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    usernameValidationMessage: PropTypes.string,
    passwordValidationMessage: PropTypes.string,
    apiErrorMessage: PropTypes.string
};

export default enhance(LoginForm);
