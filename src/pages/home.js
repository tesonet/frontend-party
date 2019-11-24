import React, { Component } from 'react';

// Components
import Header from '../components/Header';
import ServersList from '../components/ServersList';

// Redux Stuff
import { connect } from 'react-redux';

class home extends Component {
  render() {
    return (
      <div className='home-page'>
        <Header />
        <ServersList />
      </div>
    );
  }
}

export default connect()(home);
