import React,  { Component } from 'react';
import serversService from '../../services/servers.service';
import List from '../../../common/components/List/List';
import authService from '../../../app/services/auth.service';
import appRoutes from '../../../app/app.routes';

class Servers extends Component {
    state = { servers: [] };
    componentDidMount() {
        serversService.getServers().then(({ data }) => this.setState({ servers: data }))
    }

    onLogOutClick = () => {
        authService.logOut();
        this.props.history.push(appRoutes.login.path);
    };

    columns = [
        {
            header: 'SERVER',
            accessor: 'server',
        },
        {
            header: 'DISTANCE',
            accessor: 'distance',
        }
    ];

    render() {
        return (
            <div>
                <div onClick={this.onLogOutClick}>LogOut</div>
                <List data={this.state.servers} columns={this.columns} />
                {this.state.servers.map(server => (
                    <div key={server.name}>{server.name}</div>
                ))}
            </div>
        )
    }
}

export default Servers;