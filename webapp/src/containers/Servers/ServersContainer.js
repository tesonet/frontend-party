import React, { Component } from 'react';
import ServersView from './ServersView';
import api from '../../utils/api';

export default class ServersContainer extends Component {
  state = {
    data: null,
    isFetching: true,
    hasError: false
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    return api
      .servers
      .get()
      .then(data => this.setState({ data, isFetching: false }))
      .catch(e => this.setState({ isFetching: false, hasError: true }));
  }

  render() {
    return (
      <ServersView
        isFetching={ this.state.isFetching }
        hasError={ this.state.hasError }
        data={ this.state.data }
      />
    );
  }
}
