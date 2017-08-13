import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ServerRowStyle } from './style';

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
      <div className={'row'}>
        <span className={'name'}>{name}</span>
        <span className={'distance'}>{`${distance} km`}</span>
      </div>
    );
  }
}

export default ServerRow;
