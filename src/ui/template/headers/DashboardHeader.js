import React from 'react';

// React Router
import { withRouter } from 'react-router-dom';

// Redux
import { compose } from 'redux';

//React Redux
import { connect } from 'react-redux';

// Redux Actions Creators
import { logoutUser } from '/redux/actions';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

// Components
import Icon from '/ui/components/common/icon';

// Assets
import logoDark from '/assets/images/logo-testio-dark.png';



class DashboardHeader extends React.PureComponent {
    state = {
        logoutButtonActive: false
    };

    render() {
        const { logoutButtonActive } = this.state;
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.logoContainer)}>
                    <div className={css(styles.logoWrapper)}>
                        <img
                            src={logoDark}
                            alt="Testio"
                            className={css(styles.logoImage)}
                        />
                    </div>
                </div>
                <div className={css(styles.logoutButtonContainer)}>
                    <div className={css(styles.logoutButtonWrapper)}>
                        <button
                            className={css(styles.logoutButton)}
                            onClick={this.handleLogout}
                            onMouseOver={this.handleLogoutStyles.bind(this, true)}
                            onMouseOut={this.handleLogoutStyles.bind(this, false)}
                        >
                            <Icon
                                name={logoutButtonActive ? 'logoutActive' : 'logout'}
                                style={{
                                    width: '16px',
                                    height: '27px',
                                    marginRight: '13px',
                                    boxSizing: 'border-box'
                                }}
                            />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    handleLogoutStyles = (isActive) => this.setState({ logoutButtonActive: isActive });

    handleLogout = () => {
        const { logout, history } = this.props;

        //Cleaning local storage
        localStorage.clear();

        // Updating User Global state by setting to null
        logout();

        // Redirect to home page
        history.push('/');
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout(user) {
            dispatch(logoutUser(user));
        },
    };
};

export default compose(
    withRouter,
    connect(() => ({}), mapDispatchToProps)
)(DashboardHeader);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '113px',
        display: 'flex',
    },
    logoContainer: {
        marginLeft: '15px',
        flex: '1 1 0%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logoWrapper: {
        width: '115px',
        height: '30px',
    },
    logoImage: {
        width: '100%'
    },
    logoutButtonContainer: {
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutButtonWrapper: {},
    logoutButton: {
        display: 'flex',
        alignItems: 'center',
        width: '98px',
        height: '30px',
        border: 'none',
        backgroundColor: '#fff',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        fontWeight: 300,
        letterSpacing: '0.35px',
        lineHeight: '30px',
        color: '#2F3254',
        ':hover': {
            color: '#99cc33',
            cursor: 'pointer',
        },
        ':focus': {
            outline: 0,
        },
        ':active': {
            border: 'none',
        },
    },
});
