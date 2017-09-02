import classNames from 'classnames';
import styled from 'styled-components';
import {mapProps} from 'recompose';


const Button = styled.button`
  color: white;

  &:active {
    // outline: none;
  }

  &:focus {
    color: white;
    // outline: none;
  }
`;


const enhance = mapProps(({className, ...props}) => ({
  type: 'button',
  className: classNames('btn', className),
  ...props,
}));


export default enhance(Button);
