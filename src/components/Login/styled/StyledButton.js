import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const StyledContainer = styled(Button)`
  background-color: ${props => props.disabled ? props.theme.btnBgColorDisabled : props.theme.btnBgColorPrimary};
  border: 0;
  font-size: 16px;
  font-weight: 700;
  height: 3rem;
  line-height: 1.875;

  &:hover,
  &:focus,
  &:not(:disabled):not(.disabled):active {
    background-color: ${props => props.theme.btnBgColorHover};
    border: 0;
  }
`;

const StyledButton = props => (
  <StyledContainer color="primary" size="lg" block {...props}>{props.children}</StyledContainer>
);

StyledButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default StyledButton;
