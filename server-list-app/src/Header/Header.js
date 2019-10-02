import React, { Component } from "react";
import "./Header.scss";
import Logout from "../Logout/Logout"

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div className="header-container">
              <div className="logo">
              <img src={require("./resources/logo-testio.png")} />
              </div>
              <div className="logout-container">
                  <Logout />                
              </div>
          </div>
      );
  }
}

export default Header; 