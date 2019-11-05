import React from 'react';
import PropTypes from 'prop-types';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

export default class ServersListHeader extends React.PureComponent {
    static propTypes = {
        activeSort: PropTypes.string.isRequired,
        changeServersSort: PropTypes.func.isRequired,
    };

    render() {
        const { activeSort, changeServersSort } = this.props;
        return (
            <div className={css(styles.container)}>
                <div className={css(styles.headerTitleContainer, styles.headerTitleLeft)}>
                    <h3
                        className={css(styles.headerText, activeSort === 'name' && styles.active)}
                        onClick={changeServersSort.bind(this, 'name')}
                    >
                        SERVER
                    </h3>
                </div>
                <div className={css(styles.headerTitleContainer, styles.headerTitleRight)}>
                    <h3
                        className={css(styles.headerText, activeSort === 'distance' && styles.active)}
                        onClick={changeServersSort.bind(this, 'distance')}
                    >
                        DISTANCE
                    </h3>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '58px',
        display: 'flex',
        borderTop: '1px solid #D8D8D8',
        borderBottom: '1px solid #D8D8D8',
        backgroundColor: '#F5F5F5',
        boxSizing: 'border-box',
    },
    headerTitleContainer: {
        flex: '1 1 0%',
        display: 'flex',
        alignItems: 'center',
    },
    headerTitleLeft: {
        marginLeft: '14px',
        justifyContent: 'flex-start',
    },
    headerTitleRight: {
        marginRight: '17px',
        justifyContent: 'flex-end',
    },
    headerText: {
        color: '#999999',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: '30px',
        letterSpacing: '1.4px',
        cursor: 'pointer',
        ':active': {
            transform: 'scale(1.1)',
        }
    },
    active: {
        fontWeight: 700,
    },
});
