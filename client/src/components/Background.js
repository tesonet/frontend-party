import React from 'react';
import './Background.scss';

class Background extends React.Component {
  render() {
    return (
      <div className='Background'>
        <div className='cover'>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Background;