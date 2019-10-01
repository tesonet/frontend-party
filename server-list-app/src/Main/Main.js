import React, { Component } from "react";
import "./Main.css";
import Header from "../Header/Header"

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className="main-container">
          <Header />
          {this.props.children}
        </div>
      );
  }
}

export default Main; 