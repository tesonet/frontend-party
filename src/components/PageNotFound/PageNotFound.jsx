import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import styles from "./PageNotFound.module";
import logo from "assets/images/testio.svg";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className={styles.PageNotFound} role="main">
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName={"SlideIn"}
        >
          <p>
            <figure>
              <img src={logo} alt="Testio" width="200" />
            </figure>
            <strong>PAGE NOT FOUND </strong>
            <a onClick={() => this.props.history.goBack()}>return</a>
          </p>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
