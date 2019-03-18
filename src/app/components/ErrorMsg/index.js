import React, { Component } from 'react';
import './Error.scss';

class ErrorMsg extends Component {
  state = {
    showError: true
  };

  componentWillReceiveProps() {
    this.setState({ showError: true });
  }

  render() {
    const { showError } = this.state;

    return (
      <div className={showError ? 'error-container' : 'error-hidden'}>
        <div>{this.props.error}</div>
        <div
          className="error-exit"
          onClick={() => this.setState({ showError: false })}
        >
          X
        </div>
      </div>
    );
  }
}

export default ErrorMsg;
