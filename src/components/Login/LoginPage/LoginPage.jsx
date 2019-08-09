import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import LoginForm from "../LoginForm/LoginForm";

import styles from "./LoginPage.module";

export default class LoginPage extends Component {
  render() {
    return (
      <div className={styles.loginContainer} role="main">
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName={
            this.props.match.path === "/" ? "SlideIn" : "SlideOut"
          }
        >
          <LoginForm history={this.props.history} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
