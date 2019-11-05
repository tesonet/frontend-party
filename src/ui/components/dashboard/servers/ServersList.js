import React from 'react';
import PropTypes from 'prop-types';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

// Components
import ServersListItem from '/ui/components/dashboard/servers/ServersListItem';
import ServersListHeader from '/ui/components/dashboard/servers/ServersListHeader';
import Spin from '/ui/components/common/spin/';

export default class ServersList extends React.Component {
    static propTypes = {
        servers: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            distance: PropTypes.number
        })),
        activeSort: PropTypes.string.isRequired,
        changeServersSort: PropTypes.func.isRequired,
    };

    render() {
        const { servers, activeSort, changeServersSort } = this.props;
        return (
            <div className={css(styles.container)}>
                <ServersListHeader
                    {...{
                        activeSort,
                        changeServersSort,
                    }}
                />
                {servers && servers.length ? (
                    <>
                        {servers.map((server, index) => (
                            <ServersListItem {...server} key={`${server.name}${index}`}/>
                        ))}
                    </>
                ) : (
                    <div className={css(styles.loadingContainer)}>
                        <Spin size={'large'} color={'grey'}/>
                    </div>
                )}
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    loadingContainer: {
        width: '100%',
        marginTop: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
