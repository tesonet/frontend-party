import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import Header from '../../common/header';
import TableHeader from './table/tableHeader';
import TableRow from './table/tableRow';
import { fetchServers } from './actions';
import MEASUREMENT from './constants';
import { TOKEN } from '../../server/constants';

const Servers = ({ servers, getServers }) => {
  useEffect(() => {
    getServers(localStorage.getItem(TOKEN));
  }, []);

  const [sorting, setSorting] = useState('');
  const [direction, setDirection] = useState('asc');
  const sortedServers = orderBy(servers, [sorting], [direction]);

  const renderRows = () => sortedServers
    .map((item, index) => (
      <TableRow
        index={index}
        rowData={item}
        measurement={MEASUREMENT}
      />
    ));

  return (
    <>
      <Header />
      <TableHeader
        handleSort={setSorting}
        direction={direction}
        handleDirection={setDirection}
      />
      {renderRows()}
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
  servers: state.servers.servers,
});

const mapDispatchToProps = {
  getServers: (token) => fetchServers(token),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Servers);
