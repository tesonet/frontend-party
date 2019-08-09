import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Header from "./Header/Header";
import Servers from "./Servers/Servers";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName={
            this.props.match.path === "/dashboard" ? "SlideOut" : "SlideIn"
          }
        >
          <Header props={this.props} />
          <Servers />
        </ReactCSSTransitionGroup>
      </React.Fragment>
    );
  }
}
