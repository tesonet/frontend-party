import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Row } from "reactstrap";

import { actions as authActions } from "../../ducks/auth/actions";
import { actions as serversActions } from "../../ducks/servers/actions";
import { getSortedServers } from "../../ducks/servers/selectors";
import { Icon } from '../../components/Icon'
import "./index.scss";

export class ServersComponent extends Component {

  componentDidMount() {
    this.props.serversActions.loadServers();
  }

  logout = () => {
    this.props.authActions.logout();
  }

  renderListItems () {
    return this.props.servers
      .map(({name, distance}, i) => {
        return (
          <Row key={i} className="servers__list-item">
            <Col xs={12}>
              <span>{name}</span>
              <span>{distance} km</span>
            </Col>
          </Row>
        );
      })
  }

  render() {
    return (
      <div className="servers">
        <Row className="servers__page-header">
          <Col xs={12}>
            <img
              className="servers__logo"
              src="/testio-logo-dark.png"
              alt="logo" />
            <span className="servers__logout"
              onClick={this.logout}>
              <Icon name="sign-out"/>
              Logout
            </span>
          </Col>
        </Row>
        <Row className="servers__list-header">
          <Col xs={12}>
            <span>SERVER</span>
            <span>DISTANCE</span>
          </Col>
        </Row>
        {this.renderListItems()}
      </div>
    );
  }
}

export const Servers = connect(
  state => ({
    servers: getSortedServers(state)
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
    serversActions: bindActionCreators(serversActions, dispatch),
  })
)(ServersComponent);
