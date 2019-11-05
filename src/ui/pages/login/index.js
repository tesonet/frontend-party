import React from 'react';

//React Router
import { withRouter } from 'react-router-dom';

//Redux
import { compose } from 'redux';

//React redux
import { connect } from 'react-redux';

// Redux Actions Creators
import { setUser } from '/redux/actions';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

// Api
import { login } from '/api/login';

// Components
import LoginForm from '/ui/components/login/LoginForm';
import LogoContainer from '/ui/components/login/LogoContainer';

// Assets
import backgroundImage from '/assets/images/log_in_bg.png';

class LoginPage extends React.Component {
    state = {
        loading: false,
    };

    render() {
        const { loading } = this.state;
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.formWrapper)}>
                    <LogoContainer/>
                    <LoginForm
                        {...{
                            loading,
                            onLogin: this.handleLogin,
                        }}
                    />
                </div>
            </div>
        );
    }

    handleLogin = async ({ username, password }) => {
        // Show loading animation
        this.setState({ loading: true });

        const { updateUserState, history } = this.props;

        // Login User
        const user = await login({ username, password });

        // Update Global User's State
        updateUserState({ user });

        this.setState({ loading: false }, () => {
            if (user) {
                // Redirect to dashboard
                history.push('/dashboard');
            }
        });
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserState(user) {
            dispatch(setUser(user));
        },
    };
};

export default compose(
    withRouter,
    connect(() => ({}), mapDispatchToProps)
)(LoginPage);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
    },
    formWrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '363px',
        '@media (max-width: 400px)': {
            width: '90%'
        },
    }
});
