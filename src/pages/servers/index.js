import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import Header from '../../common/header';
import TableHeader from './table/tableHeader';
import TableRow from './table/tableRow';
import { fetchServers, loading as serversLoading } from './actions';
import MEASUREMENT from './constants';
import { TOKEN } from '../../server/constants';
import { Loader, StyledLoaderContainer } from '../../common/loader';

const Servers = ({ servers, getServers, loading }) => {
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
        key={index.toString()}
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
      {loading
        ? renderRows()
        : (
          <StyledLoaderContainer>
            <Loader />
          </StyledLoaderContainer>
        )}
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
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  servers: state.servers.servers,
  loading: state.servers.loading,
});

const mapDispatchToProps = {
  getServers: (token) => fetchServers(token),
  setLoading: () => serversLoading(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Servers);
