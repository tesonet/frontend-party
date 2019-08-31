import React, {Component} from "react";
import "./ServerList.scss";
import {withRouter} from 'react-router-dom';
import {localStorageKey} from "../constants/auth.constants";

interface StateInterface {
    data: ServerInterface[];
    history?: History[];
    isLoading: boolean;
}

export interface ServerInterface {
    name: string;
    distance: number;
}

class ServerList extends Component<any, StateInterface> {
    state: StateInterface = {
        data: [],
        isLoading: true
    };

    async componentDidMount() {
        const token = await localStorage.getItem(localStorageKey);
        if (!token) {
            console.log('Please login');
            this.props.history.push('/sign-in');
            return;
        }
        const response = await fetch('http://playground.tesonet.lt/v1/servers', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });

        this.setState({
            data: await response.json(),
            isLoading: false
        });
    }

    createList() {
        const {isLoading, data} = this.state;

        if (isLoading) {
            return;
        }

        if(data && !Array.isArray(data)) {
            return (<tr>
                <td>No servers found</td>
            </tr>)
        }
        return data.sort((a, b) => {
            return a.distance - b.distance || +a.name - +b.name;
        }).map((server, i) => {
            return (
                <tr key={i}>
                    <th scope="row">{server.name}</th>
                    <th className="text-right">{server.distance} km</th>
                </tr>
            )
        });
    }

    render() {
        const {isLoading} = this.state;
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

export default withRouter(ServerList);

