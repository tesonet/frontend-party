import React, { Component } from 'react';
import axios from 'axios';
import "./server-list.scss";
import { connect } from 'react-redux';

class ServerList extends Component {
    state = {
        servers: []
    }

    componentDidMount(){
        const { authToken } = this.props;
        axios.get('http://playground.tesonet.lt/v1/servers', { headers: { 'Content-Type': 'application/json', 'Authorization': authToken } })
            .then(res => {
                this.setState({
                    servers: res.data
                })
            })
    }

    render() {
        const { servers } = this.state;
        const serverList = servers.length ? (
            servers.map((server, index) => {
                return(
                    <tr key={ index }>
                        <td>{server.name}</td>
                        <td>{server.distance}</td>
                    </tr>
                )
            })
        ) : (
            <tr>
                <td>Loading...</td>
            </tr>
        )

        return (
            <div className="server-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>SERVER</th>
                            <th>DISTANCE</th>
                        </tr>
                    </thead>
                    <tbody>
                        { serverList } 
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authToken: state.auth.authToken
    }
}

export default connect(mapStateToProps)(ServerList);