import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`

  color: ${(props) => props.theme.primaryTextColor};
  line-height: 1.875;
  border: 0;
  font-weight: 700;
  height: 54px;
  background-color: ${(props) => props.disabled ? props.theme.btnDisabledBgColor : props.theme.btnPrimaryBgColor};
  cursor: pointer;
  
  &:hover, &:focus, &:active,
  &.btn-default:hover, &.btn-default:focus, &.btn-default:active {
    color: ${(props) => props.theme.primaryTextColor};
    outline: none;
    background-color: ${(props) => props.disabled ? props.theme.btnDisabledBgColor : props.theme.btnPrimaryHoverBgColor};
  }
}
`;

export default StyledButton;
