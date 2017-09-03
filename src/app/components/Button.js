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


const LinkButton = styled(Button)`
  padding: 6px 12px;
  color: ${props => props.theme.color.linkButton};
  background-color: transparent;

  &:focus {
    color: ${props => props.theme.color.linkButton};
  }

  &:hover {
    color: ${props => props.theme.color.linkButtonHover};
  }
`;


const enhance = compose(
  mapProps(({className, ...props}) => ({
    type: 'button',
    className: classNames('btn', className),
    ...props,
  })),
  branch(props => props.styleType === 'primary', renderComponent(PrimaryButton)),
  branch(props => props.styleType === 'link', renderComponent(LinkButton)),
);

export default enhance(Button);
