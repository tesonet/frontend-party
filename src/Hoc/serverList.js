import React, {Component} from 'react';


//todo

export default function serverListHoc(servers) {

    class Servers extends Component {

        state = {
            servers: servers,
            serversSortedAscending: true,
            distanceSortedAscending: false
        }

        sortByName = () => {
            this.state.serversSortedAscending ?
                this.setState({
                    servers: this.state.servers.sort((a, b) => {
                        if (a.name > b.name)
                            return -1
                        if (a.name < b.name)
                            return 1
                        return 0
                    }),
                    serversSortedAscending: !this.state.serversSortedAscending
                }) :
                this.setState({
                    servers: this.state.servers.sort((a, b) => {
                        if (a.name < b.name)
                            return -1
                        if (a.name > b.name)
                            return 1
                        return 0
                    }),
                    serversSortedAscending: !this.state.serversSortedAscending
                })
        }

        sortByDistance = () => {
            this.state.distanceSortedAscending ?
                this.setState({
                    servers: this.state.servers.sort((a, b) =>
                        b.distance - a.distance || b.distance - a.distance),
                    distanceSortedAscending: !this.state.distanceSortedAscending
                })
                :
                this.setState({
                    servers: this.state.servers.sort((a, b) =>
                        a.distance - b.distance || a.distance - b.distance),
                    distanceSortedAscending: !this.state.distanceSortedAscending
                })
        }

        render() {
            return (
                    <div className="list">
                        <div className="list_header">
                            <button className="btn" onClick={this.sortByName}>SERVER</button>
                            <button className="btn" onClick={this.sortByDistance}>DISTANCE</button>
                        </div>
                        <ul className="list_items">
                            {this.state.servers.map((country, index) => (
                                <li className="list_item" key={index}>
                                    <div>{country.name}</div>
                                    <div>{country.distance}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
            );
        }
    }
}

