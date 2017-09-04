import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {FAIcon} from './';


const Container = styled.div`
  color: grey;
  padding: 25px;

  > * {
    display: block;
    margin: auto;
  }
`;


const Loading = ({className}) => (
  <Container className={className}>
    <FAIcon type='circle-o-notch' className='fa-spin fa-3x fa-fw' />
  </Container>
);

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: 'pv2',
};

export default Loading;
