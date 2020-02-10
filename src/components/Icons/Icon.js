import React from "react";
import styled from "styled-components";

const Icon = props => {
  const {
    viewBox = "0 0 17 19",
    padding = "0",
    width = "17",
    height = "19",
    children,
    ...rest
  } = props;

  return (
    <StyledSvg
      viewBox={viewBox}
      width={width}
      height={height}
      padding={padding}
      {...rest}
    >
      {children}
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  padding: ${props => props.padding};
`;

export default Icon;
