import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import Config from "utils/Config";
import ServerListItem from "./ServersListItem";
import styles from "./Servers.module";

export default class Servers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: [],
      isLoading: true,
      errors: null,
      sortAsc: true
    };
    this.sortBy.bind(this);
  }

  getServers() {
    var token = localStorage.getItem("testioToken");

    axios
      .get(Config.REST_API_URL + "servers", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        let servers = response.data.map(item => ({
          id: item.name,
          name: item.name,
          distance: item.distance
        }));
        let serversOrdered = _.orderBy(
          servers,
          ["name", "distance"],
          ["asc", "asc"]
        );
        this.setState({
          servers: serversOrdered,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  sortBy(key) {
    var serversCopy = _.orderBy(
      this.state.servers,
      [key],
      this.state.sortAsc ? "asc" : "desc"
    );
    this.setState({ sortAsc: !this.state.sortAsc });
    this.setState({ servers: serversCopy });
  }

  componentDidMount() {
    this.getServers();
  }
  render() {
    const { isLoading, servers } = this.state;

    return (
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th
              className={styles.dataTable__name}
              onClick={() => this.sortBy("name")}
            >
              Server
            </th>
            <th
              className={styles.dataTable__distance}
              onClick={() => this.sortBy("distance")}
            >
              Distance
            </th>
          </tr>
        </thead>
        <tbody>
          {!isLoading ? (
            servers.map((item, index) => {
              return (
                <ServerListItem
                  key={index}
                  name={item.name}
                  distance={item.distance}
                />
              );
            })
          ) : (
            <tr>
              <td colSpan="2" className={styles.dataTable__loading}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
