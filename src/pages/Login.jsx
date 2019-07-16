import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../redux/actions/actions';

import Input from '../components/input';
import Button from '../components/buttons';
import Icon from '../components/icons';

import image from '../../assets/images/logo.png';
import styles from './Login.less';

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loading: false,
            error: false
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;
        const { dispatch } = this.props;

        if (username === 'tesonet' && password === 'partyanimal') {
            dispatch(login(username, password));
            this.setState({ loading: true });
        } else {
            this.setState({ error: true, username: '', password: '' });
        }
    }

    render() {
        const { username, password, loading, error } = this.state;

        return (
            <div className={styles.base}>
                <img className={styles.logo} src={image} alt="logo" />
                <Input
                    className={styles.fadeIn}
                    icon={
                        <Icon name="person" style={{ color: '#cccccc' }} />
                    }
                    iconPosition="start"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                    value={username}
                    invalid={error}
                >
                    {error && <span className={styles.error}>Invalid Username</span>}
                </Input>

                <Input
                    className={styles.fadeIn}
                    icon={
                        <Icon name="https" style={{ color: '#cccccc' }} />
                    }
                    iconPosition="start"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                    value={password}
                    invalid={error}
                    type="password"
                    required
                >
                    {error && <span className={styles.error}>Invalid Password</span>}
                </Input>
                <Button
                    className={styles.fadeIn}
                    buttonType="submit"
                    onClick={this.handleSubmit}
                    loading={loading}
                >
                    Login
                </Button>
            </div>
        );
    }
}

Login.propTypes = {
    dispatch: func
};

const mapStateToProps = (state) => (
    {
        error: state.reducer.error,
        token: state.reducer.token
    }
);

const WrappedLogin = connect(mapStateToProps)(Login);

export default WrappedLogin;
