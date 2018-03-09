import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Alert } from 'reactstrap';

const StyledContainer = styled.div`
  margin-bottom: 2rem;
  min-height: 3.5rem;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};

  & .close {
    outline: none;
  }
`;

const StyledAlert = props => (
  <StyledContainer isOpen={props.isOpen}>
    <Alert color="danger" {...props}>
      {props.children}
    </Alert>
  </StyledContainer>
);

StyledAlert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isOpen: PropTypes.bool,
};

export default StyledAlert;
