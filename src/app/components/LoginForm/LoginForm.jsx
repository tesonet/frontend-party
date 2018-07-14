import React,  { Component } from 'react';

class LoginForm extends Component {
    state = { username: '', password: ''};
    onUsernameChange = e => {
        this.setState({ username: e.target.value });
    };
    onPasswordChange = e => {
        this.setState({ password: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({ username: this.state.username, password: this.state.password });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Username
                    <input type="text" value={this.state.username} onChange={this.onUsernameChange} />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Password
                    <input type="text" value={this.state.password} onChange={this.onPasswordChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default LoginForm;