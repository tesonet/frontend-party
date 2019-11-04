import React from 'react';

// React Router
import { withRouter } from 'react-router-dom';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

// Assets
import backgroundImage from '/assets/images/log_in_bg.png';

class NotFound extends React.Component {
    render() {
        return (
            <div className={css(styles.container)}>
                <h1 className={css(styles.title)}>404</h1>
                <p className={css(styles.text)}>There's nothing here.</p>
                <button
                    className={css(styles.button)}
                    onClick={this.handleButtonClick}
                >
                    Go Home
                </button>
            </div>
        );
    }

    handleButtonClick = () => {
        const { history } = this.props;
        history.push('/');
    };
}

export default withRouter(NotFound);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: '1 1 0%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        fontFamily: 'Roboto, sans-serif',
    },
    title: {
        color: '#fff',
        fontSize: '5em'
    },
    text: {
        color: '#fff',
        fontSize: '2em',
        fontWeight: 300,
    },
    button: {
        width: '100%',
        maxWidth: '200px',
        height: '50px',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ' #9FD533',
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
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
});
