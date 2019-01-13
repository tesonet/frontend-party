import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ServersPage extends Component {

  render() {

    return (
      <div>
         Servers List
      </div>
    );
  }
}


export default compose(
withRouter,
)(ServersPage);