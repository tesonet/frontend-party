import React, { Component } from 'react';
import ServersListView from './partials/ServersListView';

export const MSG_LIST_LOADING = 'Fetching servers...';
export const MSG_LIST_ERROR   = 'There was an error fetching the list.';
export const MSG_LIST_EMPTY   = 'This list is empty.';

export default class ServersView extends Component {
  static defaultProps = {
    isFetching: false,
    hasError: false,
    data: null
  };

  hasData() {
    return Array.isArray(this.props.data);
  }

  isDataEmpty() {
    return this.props.data.length === 0;
  }

  renderMessage() {
    let message;

    if (this.props.isFetching) {
      message = MSG_LIST_LOADING;
    } else if (this.props.hasError) {
      message = MSG_LIST_ERROR;
    } else if (this.hasData() && this.isDataEmpty()) {
      message = MSG_LIST_EMPTY;
    }

    if (message) {
      return (
        <div className="message">
          { message }
        </div>
      );
    }
  }

  renderListView() {
    if ( ! this.hasData() || this.isDataEmpty()) return;

    return (
      <ServersListView data={ this.props.data } />
    );
  }

  render() {
    return (
      <main>
        { this.renderMessage() }
        { this.renderListView() }
      </main>
    );
  }
}
