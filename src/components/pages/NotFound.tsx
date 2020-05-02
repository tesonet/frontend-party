import React from "react";
import styled from "@emotion/styled";
import Colors from "../../constants/colors";
import { RouteComponentProps } from "@reach/router";

const StyledBackground = styled.div`
  background-color: ${Colors.white};
  align-content: center;
  justify-content: center;
  align-items: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: 28px;
`;

const StyledGif = styled.img`
  height: 500px;
  width: 500px;
`;

const NotFound: React.FC<RouteComponentProps> = () => {
  return (
    <StyledBackground>
      <StyledGif src="https://i.imgur.com/gBxP6oJ.gif" />
    </StyledBackground>
  );
};

export default NotFound;
