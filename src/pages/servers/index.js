import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../common/header';
import TableHeader from './table/tableHeader';
import TableRow from './table/tableRow';
import fetchServers from './actions';
import MEASUREMENT from './constants';
import { TOKEN } from '../../server/constants';

const Servers = ({ servers, getServers }) => {
  useEffect(() => {
    getServers(localStorage.getItem(TOKEN));
  }, []);

  // useEffect(() => {
  //   getServers(localStorage.getItem(TOKEN));
  // }, []);

  return (
    <>
      <Header />
      <TableHeader />
      {servers.map((item, index) => (
        <TableRow
          index={index}
          rowData={item}
          measurement={MEASUREMENT}
        />
      ))}
    </>
  );
};

Servers.defaultProps = {
  servers: [],
};

Servers.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      server: PropTypes.string,
      distance: PropTypes.number,
    }),
  ),
  getServers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  servers: state.servers.servers.servers,
});

const mapDispatchToProps = {
  getServers: (token) => fetchServers(token),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Servers);
