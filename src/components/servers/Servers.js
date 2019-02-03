import React, { Component } from 'react';
import { connect } from 'react-redux';

import requireAuth from '../utils/auth/requireAuth';
import { getServers } from '../../actions/serversActions';
import { logout } from '../../actions/authActions';
import { sortArray } from '../utils/helpers/arrayActions';

import ServersLayout from './ServersLayout';
import ServersHeader from './ServersHeader';
import ServersList from './ServersList';

class Servers extends Component {
    state = {
        servers: []
    };

    componentDidMount = () => {
        this.props.getServers();
    };

    componentDidUpdate = prevProps => {
        if (prevProps.servers !== this.props.servers) {
            this.setState({
                servers: this.props.servers
            });
        }
    };

    onSortClick = (key, order) => {
        this.setState({
            servers: sortArray(key, order, this.state.servers)
        });
    };

    render() {
        return (
            <ServersLayout onLogoutClick={this.props.logout}>
                <section className="servers">
                    <ServersHeader onSortClick={this.onSortClick} />
                    <ServersList
                        servers={this.state.servers}
                        loading={this.props.loading}
                    />
                </section>
            </ServersLayout>
        );
    }
}

const mapStateToProps = state => ({
    servers: state.servers.servers,
    loading: state.servers.loading
});

export default requireAuth(
    connect(
        mapStateToProps,
        { getServers, logout }
    )(Servers)
);
