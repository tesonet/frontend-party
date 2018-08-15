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
                username: {
                    value: '',
                    isValid: false
                },
                password: {
                    value: '',
                    isValid: false
                }
            }
        };
    };

    onChange = (e, isValid = true) => {
        e.persist();
        this.setState(prevState => {
            return { form: { ...prevState.form, [e.target.id]: { value: e.target.value, isValid } } }
        });
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
                                    validation={{minLength: {text: 'Username is too short. Min 4 symbols.', value: 4}}}
                                    value={this.state.form.username.value}
                                />
                                <Input
                                    id="password"
                                    label="Password"
                                    type="password"
                                    icon="lock"
                                    onChange={this.onChange}
                                    validation={{minLength: {text: 'Password is too short. Min 4 symbols.', value: 4}}}
                                    value={this.state.form.password.value}
                                />
                                <button className="button" disabled={!this.state.form.username.isValid || !this.state.form.password.isValid }>Log In</button>
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