import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
  color: ${(props) => props.theme.primaryTextColor};
  border:0;
  cursor: pointer;
  &:hover, &:focus,
  &.btn-default:hover, &.btn-default:focus {
    color: ${(props) => props.theme.primaryTextColor};
    outline: none;
    box-shadow: none;
    background-color: ${(props) => props.disabled ? props.theme.btnDisabledBgColor : props.theme.btnPrimaryHoverBgColor};
  }
`;

export default StyledButton;
