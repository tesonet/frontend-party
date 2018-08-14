import React from 'react';
import './Login.css';
import Input from '../Input/Input';
import Logo from '../../images/logo.png';
import { Redirect } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { LOGIN_FAIL } from '../../actions/types';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: '',
                password: ''
            }
        };
    };

    onChange = e => {
        this.setState({ form: { ...this.state.form, [e.target.id]: e.target.value } });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.form).then(res => {
            if (res.type === LOGIN_FAIL) {
                alert(res.error.response.statusText);
            }
        });
    };

    render() {
        return (
            <div className="Login">
                {this.props.isLoggedIn ? <Redirect to="/"/> : ''}
                <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                    <img src={Logo} alt="Logo"/>
                    {this.props.isBusy ?
                        <MDSpinner size={40} className="mt-5" /> : (
                            <form className="mt-5" onSubmit={this.onSubmit}>
                                <Input
                                    id="username"
                                    label="Username"
                                    icon="user"
                                    onChange={this.onChange}
                                    value={this.state.form.username}
                                />
                                <Input
                                    id="password"
                                    label="Password"
                                    type="password"
                                    icon="lock"
                                    onChange={this.onChange}
                                    value={this.state.form.password}
                                />
                                <button className="button">Log In</button>
                            </form>
                        )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isBusy: state.isBusy,
        isLoggedIn: state.isLoggedIn
    }
};

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);