import React, { Component } from "react";
import styles from "./Servers.module";

export default class ServersListItem extends Component {
  render() {
    const { index, name, distance } = this.props;
    return (
      <tr key={index}>
        <td className={styles.dataTable__name}>{name}</td>
        <td className={styles.dataTable__distance}>{distance}</td>
      </tr>
    );
  }
}
