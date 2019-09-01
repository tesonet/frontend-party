import React, {Component} from "react";
import "./ServerList.scss";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchServers} from "../../actions/server.actions";

export interface ServerInterface {
    name: string;
    distance: number;
}

class ServerList extends Component<any, any> {
    componentDidMount(): void {
        this.props.fetchServers();
    }

    createList() {
        const servers: ServerInterface[] = this.props.servers;

        if (servers && !Array.isArray(servers)) {
            return (<tr>
                <td>No servers found</td>
            </tr>)
        }
        return servers.sort((a, b) => {
            return a.distance - b.distance || +a.name - +b.name;
        }).map((server, i) => {
            return (
                <tr key={i}>
                    <td scope="row">{server.name}</td>
                    <td className="text-right">{server.distance} km</td>
                </tr>
            )
        });
    }

    render() {
        const isLoading = this.props.isLoading;
        return (
            <div>
                <table className="table server-list">
                    <thead>
                    <tr>
                        <th scope="col">Server</th>
                        <th scope="col" className="text-right">Distance</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.createList()}
                    </tbody>
                </table>
                {isLoading ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    servers: state.servers.items,
    isLoading: state.servers.isLoading
});

export default connect(mapStateToProps, {fetchServers})(withRouter(ServerList));

