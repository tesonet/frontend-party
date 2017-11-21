import Button from '../../../components/Button';

const StyledButton = Button.extend`
  line-height: 1.875;
  font-weight: 700;
  height: 54px;
  background-color: ${(props) => props.disabled ? props.theme.btnDisabledBgColor : props.theme.btnPrimaryBgColor};
`;

export default StyledButton;
