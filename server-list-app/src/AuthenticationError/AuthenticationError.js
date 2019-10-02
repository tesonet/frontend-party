import React, { Component } from "react";
import "./AuthenticationError.scss";

class AuthenticationError extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.error ? (<div className="error-message"> {this.props.error} </div>) : "" 
            );
    }
}

export default AuthenticationError; 