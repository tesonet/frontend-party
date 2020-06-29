import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const animationName = keyframes`
  0% { opacity: 0; }
  25% { opacity: 100%; }
  85% { opacity: 100%; }
  100% { opacity: 0; }
`;

const ErrorMessage = styled.p`
  position: absolute;
  top: 20px;
  border-radius: 5px;
  padding: 20px;
  color: red;
  background-color: #ffcc00;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  width: 340px;
  text-align: center;
  opacity: 0;
  animation: ${animationName} 4s ease;
  border: 2px solid @media (max-width: 992px) {
    width: calc(70% - 20px);
  }
`;

const ErrorNotifiication = ({ errorMessage }) =>
  errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>;

export default ErrorNotifiication;

ErrorNotifiication.propTypes = {
  errorMessage: PropTypes.string
};
