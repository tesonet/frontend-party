import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import './ServersPage.scss';
import logoDark from 'app/assets/images/logo-dark.png';
import Table from 'app/components/Table';
import { serversTable } from 'app/tables/serversTable';
import { compareValues } from 'app/utils/helpers';

export default class ServersPage extends React.Component {
  constructor() {
    super();

    this.handleSort = this._handleSort.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.requestServers();
  }

  _handleLogout() {
    this.props.clearUser();
    this.props.clearServers();
  }

  _handleSort(sortColumn, isAscending) {
    const order = isAscending ? 'asc' : 'desc';

    const sorted = _.orderBy(this.props.servers.data, [sortColumn], [order]);

    this.props.sortServers(sorted);
  }

  render() {
    const { data, loading } = this.props.servers;

    return (
      <article>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <div className="servers-page">
          <div className="p-3 servers-page__header">
            <div className="row">
              <div className="col-6 servers-page__logo-container">
                <img className="servers-page__logo" src={logoDark} alt="logo-light"/>
              </div>
              <div className="col-6 servers-page__button-container">
                <button type="button" className="btn servers-page__logout-button" onClick={this._handleLogout}>
                  <span className="oi oi-account-logout mx-2"></span>
                  Logout
                </button>
              </div>
            </div>
          </div>

          <Table
            head={serversTable}
            body={data}
            loading={loading}
            onSort={this.handleSort}
          />
        </div>
      </article>
    );
  }
}
