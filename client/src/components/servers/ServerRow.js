import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ServerRow extends Component {
  static propTypes = {
    name: PropTypes.string,
    distance: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  };

  static defaultProps = {
    name: '',
    distance: ''
  };

  render() {
    const { name, distance } = this.props;

    return (
      <div>
        <span>{name}</span>
        <span>{'           '}</span>
        <span>{`${distance} km`}</span>
      </div>
    );
  }
}

export default ServerRow;
