import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm/LoginForm';
import authService from '../../services/auth.service';
import { setToLocalStorage } from '../../../common/util/localStorage.util';
import Logo from '../../../assets/images/logo.png';
import './Login.scss';

const propTypes = {
    history: PropTypes.object,
    redirectTo: PropTypes.string.isRequired,
};

class Login extends Component {
    onFormSubmit = model => {
        authService.login(model).then(({ data }) => {
            setToLocalStorage('session', { token: data.token });
            this.props.history.push(this.props.redirectTo);
        })
    };

    render() {
        return (
            <div className="Login">
                <div className="container">
                    <div className="h-100 justify-content-center align-items-center row">
                        <div className="col-lg-4 col-md-6 col-sm-8 col-10">
                            <div className="Login-logo">
                                <img alt="Logo" src={Logo} />
                            </div>
                            <LoginForm onSubmit={this.onFormSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = propTypes;

export default Login;
