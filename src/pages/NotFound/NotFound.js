import React from "react";
import styled from "styled-components";
import * as styles from "../../constants/styles";

const NotFound = () => {
  return <StyledContainer>Whoops. Page not found.</StyledContainer>;
};

const StyledContainer = styled.div`
  ${styles.align.center};
  ${styles.fontWeight.light};
  height: 100vh;
  font-size: 40px;
`;

export default NotFound;
