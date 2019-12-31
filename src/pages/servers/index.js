import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import Header from '../../common/header';
import TableHeader from './table/tableHeader';
import TableRow from './table/tableRow';
import { fetchServers } from './actions';
import MEASUREMENT from './constants';
import { TOKEN } from '../../server/constants';

const Servers = ({ servers, getServers, sort }) => {
  useEffect(() => {
    getServers(localStorage.getItem(TOKEN));
  }, []);

  const renderRows = () => {
    const list = orderBy(servers, [sort]);

    return list.map((item, index) => (
      <TableRow
        index={index}
        rowData={item}
        measurement={MEASUREMENT}
      />
    ));
  };

  return (
    <>
      <Header />
      <TableHeader />
      {renderRows(sort)}
    </>
  );
};

Servers.defaultProps = {
  servers: [],
  sort: null,
};

Servers.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      server: PropTypes.string,
      distance: PropTypes.number,
    }),
  ),
  sort: PropTypes.string,
  getServers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  servers: state.servers.servers.servers,
  sort: state.servers.sort,
});

const mapDispatchToProps = {
  getServers: (token) => fetchServers(token),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Servers);
