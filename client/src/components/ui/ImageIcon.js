import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageIcon extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => {}
  };

  onClick() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const { icon } = this.props;
    const alt = `${icon} icon`;

    return (
      <img
        src={require(`../../assets/icons/${icon}.png`)}
        alt={alt}
        onClick={() => this.onClick()}
      />
    );
  }
}

export default ImageIcon;
