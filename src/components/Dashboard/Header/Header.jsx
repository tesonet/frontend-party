import React, { Component } from "react";

import logo from "assets/images/testio.svg";
import styles from "./Header.module";

export default class DashboardHeader extends Component {
  handleLogout() {
    localStorage.removeItem("testioToken");
    this.props.props.history.push("/");
  }
  render() {
    return (
      <header className={styles.header}>
        <figure className={styles.header__logo}>
          <img src={logo} alt="Testio" width="115" height="30" />
        </figure>
        <div className={styles.header__action}>
          <button
            onClick={this.handleLogout.bind(this)}
            className={styles.header__action__logout}
          >
            Logout
          </button>
        </div>
      </header>
    );
  }
}
