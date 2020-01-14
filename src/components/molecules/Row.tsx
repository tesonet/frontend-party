import React from "react";
import styled from "@emotion/styled";
import { ServerInterface } from "../../reducers/serverReducer";
import Colors from "../../constants/colors";

export const StyledRow = styled.div`
  height: 60px;
  color: ${Colors.gray900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${Colors.gray400};
  transition: background-color 100ms;
  :hover {
    background-color: ${Colors.gray100};
  }
`;

const Row = ({ name, distance }: ServerInterface) => {
  return (
    <StyledRow data-test-id="Main-Row">
      <div>{name}</div>
      <div>{distance} km</div>
    </StyledRow>
  );
};

export default Row;
