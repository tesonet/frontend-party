import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import logout from '../style/images/logout.png'


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://playground.tesonet.lt/v1/servers")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        this.handleLogOut();
      });
  }

  handleLogOut() {
    setAuthToken(false);
    localStorage.removeItem("token");
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <h2 className="headerLogo">
            testio
            <span className="dot">.</span>
          </h2>
          <div className="logout">
            <img classname="logout-img" src={logout} alt="logout"/>
            <span  onClick={this.handleLogOut.bind(this)}>
              Logout
            </span>
          </div>
        </div>
        <div className="seperator">
          <div className="server">SERVER</div>
          <div className="distance">DISTANCE</div>
        </div>
        <div className="scrollList">
          {this.state.data.length > 0
            ? this.state.data.map((val, i) => (
                <div className="list" key={i}>
                  <div className="server">{val.name}</div>
                  <div className="distance">{val.distance}</div>
                </div>
              ))
            : "loading....."}
        </div>
      </div>
    );
  }
}

export default Main;
