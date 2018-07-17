import React,  { Component } from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash-es';
import serversService from '../../services/servers.service';
import List from '../../../common/components/List/List';
import IconLabel from '../../../common/components/IconLabel/IconLabel';
import authService from '../../../app/services/auth.service';
import appRoutes from '../../../app/app.routes';
import Logo from '../../../assets/images/logo-blue.png';
import IconLogout from '../../../assets/icons/ico-logout.png';
import './Servers.scss';

const propTypes = {
    history: PropTypes.object.isRequired,
};

class Servers extends Component {
    state = { servers: [] };
    componentDidMount() {
        serversService.getServers().then(({ data }) => this.setState({
            servers: orderBy(data, ['distance', 'name']),
        }))
    }

    onLogOutClick = () => {
        authService.logOut();
        this.props.history.push(appRoutes.login.path);
    };

    columns = [
        {
            header: 'SERVER',
            accessor: 'name',
        },
        {
            header: 'DISTANCE',
            accessor: 'distance',
            suffix: 'km',
        }
    ];

    render() {
        return (
            <div className="Servers">
                <div className="Servers-header">
                    <img alt="Logo" src={Logo} />
                    <IconLabel icon={IconLogout} onClick={this.onLogOutClick}>Logout</IconLabel>
                </div>
                <List data={this.state.servers} columns={this.columns} />
            </div>
        )
    }
}

Servers.propTypes = propTypes;

export default Servers;
