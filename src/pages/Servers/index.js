import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Row } from "reactstrap";

import { actions as authActions } from "../../ducks/auth/actions";
import { Icon } from '../../components/Icon'
import "./index.scss";

class ServersComponent extends Component {

  renderListItems () {
    return Array.from(Array(5))
      .map(() => {
        return {
          name: "Canada #10",
          distance: "4073 km",
        }
      })
      .map(({name, distance}, i) => {
        return (
          <Row key={i} className="servers__list-item">
            <Col xs={12}>
              <span>{name}</span>
              <span>{distance}</span>
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
            <span className="servers__logout">
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
    count: state.auth.count
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
  })
)(ServersComponent);
