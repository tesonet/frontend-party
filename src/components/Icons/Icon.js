import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  padding: ${props => props.padding};
`;

const Icon = props => {
  const {
    viewBox = "0 0 17 19",
    width = "17",
    height = "19",
    children,
    ...rest
  } = props;

  return (
    <StyledSvg viewBox={viewBox} width={width} height={height} {...rest}>
      {children}
    </StyledSvg>
  );
};

export default Icon;
