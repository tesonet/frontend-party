import React, {Component} from 'react';
import ServerListItem from './ServerListItem'

export default class Servers extends Component {

    componentDidMount() {
        if (!this.state.servers.length) {
            this.props.fetchList()
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            servers: nextProps.servers || []
        }
    }

    state = {
        servers: [],
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
                    a.distance - b.distance || a.distance - b.distance),

            })
            :
            this.setState({
                servers: this.state.servers.sort((a, b) =>
                    a.distance - b.distance || a.distance - b.distance)
            })
    }

    render() {
        console.log(this.state);
        return (
            <div className="inner-page">
                <div className="list">
                    <div className="list_header">
                        <button className="btn" onClick={this.sortByName}>SERVER</button>
                        <button className="btn" onClick={this.sortByDistance}>DISTANCE</button>
                    </div>
                    <ul className="list_items">
                        {this.state.servers.map((server, index) => (
                            <ServerListItem
                                key={index}
                                server={server}
                                addToFavorites={this.props.addToFavorites}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
