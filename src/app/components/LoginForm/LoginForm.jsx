import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../../common/components/FormInput/FormInput';
import SubmitButton from '../../../common/components/SubmitButton/SubmitButton';
import IconUser from '../../../assets/icons/ico-user.png';
import IconLock from '../../../assets/icons/ico-lock.png';

const propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

class LoginForm extends Component {
    state = {username: '', password: ''};
    onUsernameChange = e => {
        this.setState({username: e.target.value});
    };
    onPasswordChange = e => {
        this.setState({password: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({username: this.state.username, password: this.state.password});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="d-flex flex-column">
                    <FormInput
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        icon={IconUser}
                        onChange={this.onUsernameChange}
                    />
                    <FormInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        icon={IconLock}
                        onChange={this.onPasswordChange}
                    />
                    <SubmitButton>Log in</SubmitButton>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = propTypes;

export default LoginForm;
