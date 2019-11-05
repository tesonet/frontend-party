import React from 'react';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

// Assets
import logoImage from '/assets/images/logo-testio.png';

export default class LogoContainer extends React.PureComponent {
    render() {

        return (
            <div className={css(styles.container)}>
                <img
                    src={logoImage}
                    alt="Testio."
                    className={css(styles.image)}
                />
            </div>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: '363px',
        height: '133px',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        maxWidth: '246px',
        height: 'auto',
        '@media (max-width: 400px)': {
            width: '90%'
        },
    },
});
