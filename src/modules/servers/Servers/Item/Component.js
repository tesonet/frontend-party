import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from './styled-components';

const Item = ({ name, distance }) => (
  <Row $border>
    <Col>{name}</Col>
    <Col style={{ textAlign: 'right' }}>{distance} km</Col>
  </Row>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
};

export default Item;
