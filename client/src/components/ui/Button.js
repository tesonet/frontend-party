import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './style';

class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    type: 'button',
    text: 'Submit',
    onClick: () => {}
  };

  onClick() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const { type, text } = this.props;

    return (
      <button
        type={type}
        onClick={() => this.onClick()}
        className={'button'}
      >
        {text}
      </button>
    );
  }
}

export default Button;
