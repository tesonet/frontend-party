import React from 'react';
import PropTypes from 'prop-types';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

export default class ServersListItem extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string,
        distance: PropTypes.number
    };

    render() {
        const {
            name,
            distance,
        } = this.props;
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.textContainer, styles.textLeft)}>
                    <h3 className={css(styles.text)}>
                        {name}
                    </h3>
                </div>
                <div className={css(styles.textContainer, styles.textRight)}>
                    <h3 className={css(styles.text)}>
                        {`${distance} km`}
                    </h3>
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '58px',
        display: 'flex',
        borderBottom: '1px solid #D8D8D8',
        boxSizing: 'border-box',
        ':hover': {
            backgroundColor: '#fcfcfc',
            color: '#fff',
        }
    },
    textContainer: {
        flex: '1 1 0%',
        display: 'flex',
        alignItems: 'center',
    },
    textLeft: {
        marginLeft: '14px',
        justifyContent: 'flex-start',
    },
    textRight: {
        marginRight: '17px',
        justifyContent: 'flex-end',
    },
    text: {
        color: '#999999',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: '30px',
        letterSpacing: '1.4px',
    }
});
