import React, { Component } from "react";
import "./PageNotFound.css";
import { withRouter } from "react-router-dom";

class PageNotFound extends Component {
  constructor(props) {
    super(props);

    this.onHomePage = this.onHomePage.bind(this);
  }

  onHomePage() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="page-not-found-container">
        <div className="error-404">
          404
        </div>
        <div className="message-404">
          This is not the web page you are looking for.
        </div> 
        <div className="back-to-home-page">
        <button className="back-to-home-page-button" onClick={this.onHomePage}>Try Home Page</button>
        </div>
      </div>
    );
  }
}

export default withRouter(PageNotFound); 