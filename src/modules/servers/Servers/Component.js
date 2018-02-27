import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../../../lib/components';
import { Col, Head, Logo, Logout, Title } from './styled-components';
import Loader from './Loader';
import Item from './Item';

const Servers = ({ loading, servers, onClickLogout }) => (
  <Wrapper>
    <Title>
      <Col>
        <Logo />
      </Col>
      <Col>
        <Logout bsStyle="link" onClick={onClickLogout}>
          Logout
        </Logout>
      </Col>
    </Title>
    <Head>
      <Col $fontSize={14}>Server</Col>
      <Col $fontSize={14}>Distance</Col>
    </Head>
    {loading ? (
      <Loader />
    ) : (
      servers.map(({ name, distance }) => (
        <Item key={`${name} - ${distance}`} {...{ name, distance }} />
      ))
    )}
  </Wrapper>
);

Servers.propTypes = {
  loading: PropTypes.bool,
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      distance: PropTypes.number,
    }),
  ).isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

export default Servers;
