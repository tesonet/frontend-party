import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import style from './Servers.scss';
import Header from '../../components/header/Header';
import Error from '../../components/error/Error';
import Loader from '../../components/loader/Loader';
import { getServers } from './servers-api';


class Servers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      servers: [],
      error: '',
    };
  }

  componentDidMount() {
    getServers().then(
      (servers) => {
        this.setState({ servers, loading: false });
      },
      (err) => {
        this.setState({ error: err.message, loading: false });
      },
    );
  }

  render() {
    const { servers, error, loading } = this.state;

    return (
      <div className={style.servers}>

        <Header />

        <Loader loading={loading}>

          <div className="container">

            <div className="row">
              <div className="col">
                <Error message={error} />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Server</th>
                      <th className="text-right">Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servers.map((server, i) => (
                      <tr key={`k-${i}`}>
                        <td>{server.name}</td>
                        <td className="text-right">{server.distance}</td>
                      </tr>
                    ))}
                    {servers.length === 0 && (
                      <tr>
                        <td colSpan="2">No Records Found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </Loader>

      </div>
    );
  }
}

Servers.defaultProps = {
  history: {},
};

Servers.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(Servers);
