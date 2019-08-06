import React, { Component } from 'react';
import BEM from'./BEM';

class Alert extends Component {

    constructor(props) {
        super(props);

        this.classList = ["alert__message"]

        if (props.type) {
            this.classList.push("alert__message--"+props.type)
        } else {
            this.classList.push("alert__message--neutral")
        }
    }

    render() {
        return (<BEM name="alert">
            <p className={this.classList.join(' ')}>
                {this.props.message}
            </p>
        </BEM>)
    }
}

export default Alert;