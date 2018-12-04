import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';
import Offline from '../helpers/Offline';

class LoginPage extends React.Component {

    submit = data => this.props.login(data).then(
        () => this.props.history.push('/')
    );

    render() {
        return (
            <div>
                <Offline text="App has gone offline! Try again later..." />
                <LoginForm submit={this.submit} />
            </div>
        );
    }
}

export default connect(null, { login })(LoginPage);
