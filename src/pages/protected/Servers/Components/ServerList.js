import React, { Component } from 'react'
import ServerListItem from './ServerList/ServerListItem'

export default class ServerList extends Component {

    componentDidMount() {
        if (!this.props.servers.length) {
            this.props.fetchList()
        }
    }

    render() {
        return (
          <div className="inner-page">
              <div className="list">
                  <div className="list_header">
                      <button className="btn" onClick={this.props.sortByName}>SERVER</button>
                      <button className="btn" onClick={this.props.sortByDistance}>DISTANCE</button>
                  </div>
                  <ul className="list_items">
                      {this.props.servers.map((server, index) => (
                        <ServerListItem
                          key={index}
                          server={server}
                          addToFavourites={this.props.addToFavourites}
                          removeFromFavourites={this.props.removeFromFavourites}
                        />
                      ))}
                  </ul>
              </div>
          </div>
        )
    }
}
