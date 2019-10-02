import React, { Component } from "react";
import "./LoadingSpinner.scss";

class LoadingSpinner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="spinner-container">
          <div className="overlay" />
          <div className="spinner" />
        </div>
      ); 
    } else {
      return null;
    }      
  }
}

export default LoadingSpinner; 