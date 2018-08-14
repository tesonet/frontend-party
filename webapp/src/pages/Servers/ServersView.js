import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ServersListView from './partials/ServersListView';
import TestioLogo from '../../assets/images/logo_833x215.png';

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
      <div id="page_servers" className="page-inner container-fluid h-100">
        <div className="row flex-column h-100">
          <div className="col-auto">
            <header className="page-header navbar fixed-top bg-white py-4">
              <div className="navbar-brand">
                <img src={ TestioLogo } height="30" alt="Testio."/>
              </div>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    <span className="oi oi-account-logout" />
                    <span className="label">Logout</span>
                  </Link>
                </li>
              </ul>
            </header>
          </div>

          <div className="col">
            { this.renderMessage() }
            { this.renderListView() }
          </div>
        </div>
      </div>
    );
  }
}
