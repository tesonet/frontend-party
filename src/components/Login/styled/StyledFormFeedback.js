import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormFeedback } from 'reactstrap';

const StyledContainer = styled(FormFeedback)`
  height: 1.5rem;
`;

const StyledFormFeedback = props => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);

StyledFormFeedback.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default StyledFormFeedback;
