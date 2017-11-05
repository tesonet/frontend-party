import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
  font-size: 14px;
  border-radius: 0;
  height: 31px;
  color: ${(props) => props.theme.btnTextColor};
  border:0; 
  cursor: pointer;

  &:hover, &:focus, &:active,
  &.btn-default:hover, &.btn-default:focus, &.btn-default:active {
    color: ${(props) => props.theme.primaryTextColor};
    outline: none;
    background-color: ${(props) => props.disabled ? props.theme.btnDisabledBgColor : props.theme.btnPrimaryBgColor};
  }
}
`;

export default StyledButton;
