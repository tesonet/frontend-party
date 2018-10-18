import React, {Component} from 'react';

class FavoriteServers  extends Component {

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
                    a.distance - b.distance || a.distance - b.distance),

            })
            :
            this.setState({
                servers: this.state.servers.sort((a, b) =>
                    a.distance - b.distance || a.distance - b.distance)
            })
    }

    render() {
        console.log(this.props.favorites);
        return (
            <div className="inner-page">
                <div className="list">
                    <div className="list_header">
                        <button className="btn" onClick={this.sortByName}>SERVER</button>
                        <button className="btn" onClick={this.sortByDistance}>DISTANCE</button>
                    </div>
                    <ul className="list_items">
                        {this.props.favorites.map((server, index) => (
                            <li className="list_item" key={index}>
                                <div>{server.name}</div>
                                <div>{server.distance}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default FavoriteServers;