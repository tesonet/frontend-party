import React,  { Component } from 'react';
import serversService from '../../services/servers.service';

class Servers extends Component {
    state = { servers: [] };
    componentDidMount() {
        serversService.getServers().then(({ data }) => this.setState({ servers: data }))
    }

    render() {
        return <div>
            {this.state.servers.map(server => (
                <div key={server.name}>{server.name}</div>
            ))}
        </div>
    }
}

export default Servers;