import Button from '../../../components/Button';

const StyledButton = Button.extend`
  font-size: 14px;
  border-radius: 0;
  height: 31px;
  color: ${(props) => props.theme.btnSecondaryTextColor};
 
  &:hover, &.btn-default:hover,
  &:focus, &.btn-default:focus {
    color: ${(props) => props.theme.btnPrimaryBgColor};
    background-color: ${(props) => props.theme.primaryBgColor};
  }
  
  & .glyphicon-log-out {
    transform: rotateY(180deg);
    padding: 0 5px;
  }
}
`;

export default StyledButton;
