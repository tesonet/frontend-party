import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../../api/constants';
import style from './Servers.scss';
import Header from '../../components/header/Header';
import { isAuthToken, getToken } from '../../api/auth-token';
import { sortByTwoColumns } from '../../api/helper';

class Servers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: [],
    };
  }

  componentDidMount() {
    const { history } = this.props;

    if (!isAuthToken()) {
      history.push('/login');
    }

    const config = {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    };

    axios.get(`${API_URL}servers`, config)
      .then(
        (res) => {
          const servers = res.data;
          servers.sort(sortByTwoColumns);
          this.setState({ servers });
        },
        (err) => {
          console.log(err);
        },
      )
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { servers } = this.state;

    return (
      <div className={style.servers}>

        <Header />

        <div className="container">
          <div className="row">
            <div className="col">
              <table className={`table table-hover ${style.table}`}>
                <thead>
                  <tr>
                    <th>Servers</th>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>

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
