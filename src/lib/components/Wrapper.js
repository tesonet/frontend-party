import React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

const Wrapper = ({ children, className, ...rest }) => (
  <Grid fluid className={className}>
    <Row>
      <Col xs={12} md={10} mdOffset={1} {...rest}>
        {children}
      </Col>
    </Row>
  </Grid>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Wrapper;
