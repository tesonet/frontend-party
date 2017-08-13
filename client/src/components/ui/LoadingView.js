import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadingViewStyle } from './style';

class LoadingView extends Component {
  render() {
    return (
      <div className={'loader-container'}>
        <div className={'loader'}></div>
      </div>
    );
  }
}

export default LoadingView;
