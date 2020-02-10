import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return <StyledContainer>Whoops. Page not found.</StyledContainer>;
};

const StyledContainer = styled.div`
  font-size: 40px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default NotFound;
