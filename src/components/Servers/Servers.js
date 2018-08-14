import React from 'react';
import { Redirect } from 'react-router-dom';
import MDSpinner from 'react-md-spinner';
import Logo from '../../images/logo-dark.png';
import './Servers.css';
import { connect } from 'react-redux';
import { getServers, logout } from '../../actions';
import { GET_SERVERS_FAIL, GET_SERVERS_SUCCESS } from '../../actions/types';
import ReactSVG from 'react-svg';

class Servers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            servers: []
        };
    }

    componentDidMount() {
        this.props.getServers().then(res => {
            if (res.type === GET_SERVERS_SUCCESS) {
                const servers = res.payload.data;
                servers.sort((a, b) => {
                    if (a.distance === b.distance) {
                        return a.name < b.name ? -1 : 1;
                    }

                    return a.distance - b.distance;
                });

                this.setState({ servers });
            } else if (res.type === GET_SERVERS_FAIL && res.error.response.status === 401) {
                this.props.logout();
            }
        });
    }

    logout = () => {
        this.props.logout();
    };

    render() {
        return (
            <div className="servers d-flex flex-column h-100">
                <div className="d-flex align-items-center justify-content-between flex-shrink-0 top">
                    <img src={Logo} className="my-4" alt="Logo"/>
                    <button type="button" className="logout d-flex align-items-center"
                            onClick={this.logout}>
                        <ReactSVG path="assets/svg/logout.svg" className="icon"/>
                        Logout
                    </button>
                </div>
                <div className="d-flex flex-column flex-grow-1 flex-shrink-0 justify-content-center">
                    {this.props.isBusy ?
                        <MDSpinner size={40} className="d-flex align-self-center"/>
                        : (
                            <table className="table">
                                <thead>
                                <tr className="table-active">
                                    <td className="text-secondary">SERVER</td>
                                    <td className="text-secondary text-right">DISTANCE</td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.servers.map((server, i) => (
                                    <tr key={i} className="server">
                                        <td className="name">{server.name}</td>
                                        <td className="text-right">{server.distance}km</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                </div>
                {!this.props.isLoggedIn ? <Redirect to="/login"/> : ''}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isBusy: state.isBusy,
        isLoggedIn: state.isLoggedIn
    }
};

const mapDispatchToProps = {
    getServers,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Servers);