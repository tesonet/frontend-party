import React from 'react';
import PropTypes from 'prop-types';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

// Utils
import { validateLoginInputParams } from '/lib/utils';

// Components
import Icon from '/ui/components/common/icon';
import Spin from '/ui/components/common/spin';
import message from '/ui/components/common/message';

export default class LoginForm extends React.PureComponent {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        onLogin: PropTypes.func.isRequired,
    };

    state = {
        validationErrors: {},
    };

    render() {
        const { loading } = this.props;
        const { validationErrors } = this.state;
        return (
            <form
                onSubmit={this.handleLogin}
                className={css(styles.form)}
            >
                <div className={css(styles.inputWrapper)}>
                    <div className={css(styles.iconWrapper)}>
                        <Icon name={validationErrors['username'] ? 'attention' : 'user'}/>
                    </div>
                    <input
                        ref={this.username}
                        className={css(styles.input, styles.formText, validationErrors['username'] && styles.inputError)}
                        type='text'
                        name='username'
                        placeholder='Username'
                        onFocus={this.handleOnFocus}
                    />
                </div>
                <div className={css(styles.inputWrapper)}>
                    <div className={css(styles.iconWrapper)}>
                        <Icon name={validationErrors['password'] ? 'attention' : 'password'}/>
                    </div>
                    <input
                        ref={this.password}
                        className={css(styles.input, styles.formText, validationErrors['password'] && styles.inputError)}
                        type='password'
                        name='password'
                        placeholder='Password'
                        onFocus={this.handleOnFocus}
                    />
                </div>
                <div className={css(styles.inputWrapper)}>
                    <button
                        className={css(styles.submitButton, styles.formText)}
                        type="submit"
                        name="submit"
                    >
                        Log In
                        {loading && (
                            <Spin/>
                        )}
                    </button>
                </div>
            </form>
        );
    }

    username = React.createRef();
    password = React.createRef();

    // Remove Error highlights on focus
    handleOnFocus = (e) => {
        const validationErrors = { ...this.state.validationErrors };
        if (validationErrors[e.target.name]) {
            validationErrors[e.target.name] = null;
            this.setState({ validationErrors });
        }
    };

    // Handle user login
    handleLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const { onLogin } = this.props;
        const username = this.username.current.value;
        const password = this.password.current.value;

        const validationErrors = validateLoginInputParams({ username, password });

        if (validationErrors) {
            this.setState({ validationErrors }, () => {
                // Show validation errors to user
                // I'm using this approach because background is very dark and it's hard to see if I will add message under input fields
                Object.values(validationErrors).forEach((error) => {
                    message.attention(error.message);
                });
            });
        } else {
            onLogin({ username, password });
        }
    };
}

const styles = StyleSheet.create({
    inputWrapper: {
        position: 'relative',
        marginBottom: '18px',
    },
    formText: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        letterSpacing: '0.4px',
    },
    input: {
        width: '100%',
        height: '56px',
        padding: '0 15px 0 55px',
        border: '1px solid #979797',
        borderRadius: '5px',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.50)',
        boxSizing: 'border-box',
        fontWeight: 300,
        color: '#B3B3B3',
        ':active': {
            color: '#999',
        },
        ':focus': {
            outline: 0,
        }
    },
    inputError: {
        border: '1px solid #f64f64',
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '58px',
        backgroundColor: ' #9FD533',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 700,
        color: '#ffffff',
        ':hover': {
            backgroundColor: '#86b300',
            cursor: 'pointer',
        },
        ':focus': {
            outline: 0,
        },
        ':active': {
            border: 'none',
            backgroundColor: '#699600',
        },
    },
    iconWrapper: {
        position: 'absolute',
        top: '17px',
        left: '25px',
    },
});
