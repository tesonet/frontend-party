import React, { Component } from 'react';
import './styles/LoadingPageStyle.css';

class LoadingPage extends Component {
  render() {
    return(
      <div className='page'>
        <div className='container'>
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
        </div>
      </div>
    )
  }
}

export default LoadingPage;
