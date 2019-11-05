import React from 'react';

// Aphrodite
import { css, StyleSheet } from 'aphrodite';

// Api
import { getServers } from '/api/lookups';

// Hoc
import DashboardLayout from '/ui/hoc/dashboardLayout';

// Utils
import { sortArrayBy } from '/lib/utils';

// Components
import ServersList from '/ui/components/dashboard/servers/ServersList';

class Servers extends React.Component {
    state = {
        servers: null,
        activeSort: 'name',
    };

    render() {
        const { servers, activeSort } = this.state;
        return (
            <div className={css(styles.container)}>
                <ServersList
                    {...{
                        servers,
                        activeSort,
                        changeServersSort: this.handleSortSwitch
                    }}
                />
            </div>
        );
    }

    async componentDidMount() {
        const servers = await getServers();
        this.setState({ servers: sortArrayBy(servers, this.state.activeSort) });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.activeSort !== this.state.activeSort) {
            const servers = this.state.servers.slice();
            this.setState({ servers: sortArrayBy(servers, this.state.activeSort) });
        }
    }

    handleSortSwitch = (activeSort) => this.setState({ activeSort });
}

export default DashboardLayout(Servers);


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    }
});
