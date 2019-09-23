import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { loginUser as loginUserAction } from '../actions';
import storage from '../utils/localStorage';
import { AUTH_TOKEN_KEY } from '../constants/token';
import { ReactComponent as Logo } from '../assets/images/logo-testio.svg';
import './LoginForm.scss';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
        hasErrors: false
    };

    componentDidMount() {
        this.checkAuthentication(AUTH_TOKEN_KEY);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

        const { hasErrors, username, password } = this.state;

        if (hasErrors && !!username && !!password) {
            this.setState({ hasErrors: false });
        }
    };

    handleSubmit = async event => {
        const { loginUser } = this.props;
        const { username, password } = this.state;
        event.preventDefault();

        if (!username || !password) {
            this.setState({ hasErrors: true });
            return;
        }

        await loginUser({ username, password });
        this.checkAuthentication(AUTH_TOKEN_KEY);
    };

    checkAuthentication = key => {
        const { history } = this.props;
        const isAuthenticated = !!storage.get(key);

        if (isAuthenticated) history.push('/');
    };

    render() {
        const { username, password, hasErrors } = this.state;
        return (
            <div className="login">
                <Logo className="login__logo" />
                <form className="login-form" onSubmit={this.handleSubmit}>
                    {hasErrors && <p>Error</p>}
                    <i className="login-form__username-icon" />
                    <input
                        name="username"
                        className="login-form__input"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <i className="login-form__password-icon" />
                    <input
                        name="password"
                        className="login-form__input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <input className="login-form__button" type="submit" value="Log In" />
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapDispatchToProps = dispatch => ({
    loginUser: userInfo => dispatch(loginUserAction(userInfo))
});

export default connect(
    null,
    mapDispatchToProps
)(withRouter(LoginForm));
