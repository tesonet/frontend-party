import React, { Component } from 'react'
import ServerListItem from './ServerListItem'

export default class Servers extends Component {

    componentDidMount() {
        if (!this.state.servers.length) {
            this.props.fetchList()
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            servers: !prevState.servers.length ? nextProps.servers : prevState.servers
        }
    }

    state = {
        servers: [],
        favouriteServers: [],
        serversSortedAscending: true,
        distanceSortedAscending: false
    }

    sortByName = (e) => {
        e.stopPropagation()
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

    sortByDistance = (e) => {
        e.stopPropagation()
        this.state.distanceSortedAscending ?
          this.setState({
              servers: this.state.servers.sort((a, b) =>
                a.distance - b.distance || a.distance - b.distance),
              distanceSortedAscending: !this.state.distanceSortedAscending
          })
          :
          this.setState({
                servers: this.state.servers.sort((a, b) =>
                  b.distance - a.distance || b.distance - a.distance),
                distanceSortedAscending: !this.state.distanceSortedAscending
            }
          )
    }
    
    render() {
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
        )
    }
}
