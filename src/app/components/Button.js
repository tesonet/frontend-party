import classNames from 'classnames';
import styled from 'styled-components';
import {compose, branch, renderComponent, mapProps} from 'recompose';


const Button = styled.button`
  color: white;
  padding: 12px 24px;

  &:hover {
    color: white;
  }

  &:focus {
    color: white;
  }
`;

const PrimaryButton = styled(Button)`
  font-weight: bold;
  width: 100%;
  background-color: ${props => props.theme.color.primaryButtonBG};

  &:hover {
    background-color: ${props => props.theme.color.primaryButtonHoverBG};
  }
`;


const enhance = compose(
  mapProps(({className, ...props}) => ({
    type: 'button',
    className: classNames('btn', className),
    ...props,
  })),
  branch(props => props.styleType === 'primary', renderComponent(PrimaryButton)),
);


export default enhance(Button);
