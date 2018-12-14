import styled from "styled-components";

import { Button } from "reactstrap";

const ButtonWithStyles = styled(Button)`
  background-color: ${({ color }) => color || "#fff"};
  color: #fff;
  font-family: Roboto;
  font-weight: 800;
  font-size: 16px;
  height: 56px;

  :hover {
    background-color: #86b300;
  }
`;

export default ButtonWithStyles;
