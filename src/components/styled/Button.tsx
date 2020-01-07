import styled, { AnyStyledComponent } from 'styled-components';

import { background, color, layout } from 'styled-system';

const Button: AnyStyledComponent = styled.button`
  cursor: pointer;
  border-radius: ${props => props.theme.radii[0]};
  height: ${props => props.theme.sizes[0]};
  outline: 0;
  border: 0;
  &::focus{
    outline: 0;
    border: 0;
  }
  ${layout}
  ${background}
  ${color}

`;

export default Button;
