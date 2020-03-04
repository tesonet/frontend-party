import React, { Component } from 'react';
import axios from 'axios';
import "./server-list.scss";
import { connect } from 'react-redux';
import sort from '../../images/sort.svg';

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

    handleClick = (e) => {
        const newState = this.state;
        e.target.classList.toggle("asc");
        if (e.target.id == 'name') {
            newState.servers.sort((a, b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                return (e.target.className == 'asc') ? (nameA==nameB ? 0 : nameA < nameB ? -1 : 1) : (nameA==nameB ? 0 : nameA > nameB ? -1 : 1);
            });
        } else if (e.target.id == 'distance') {
            newState.servers.sort((a, b) => {
                return (e.target.className == 'asc') ? (a.distance - b.distance) : (b.distance - a.distance);
            });
        }
        this.setState({
            servers: newState.servers
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
                <td>Loading servers...</td>
            </tr>
        )

        return (
            <div className="server-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>SERVER <img src={sort} alt="Sort icon" id="name" onClick={this.handleClick} /></th>
                            <th><img src={sort} alt="Sort icon" id="distance" onClick={this.handleClick} /> DISTANCE</th>
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