import styled, { AnyStyledComponent } from 'styled-components';

import { background, color, layout, space } from 'styled-system';

const Input: AnyStyledComponent = styled('input')`
  font-size: ${props => props.theme.fontSizes[1]};
  border-radius: ${props => props.theme.radii[0]};
  padding: ${props => props.theme.space[3]} ${props =>
  props.theme.space[4]};
  outline: 0;
  border: 0;
  ${layout}
  ${background}
  ${color}
  ${space}
  &:focus{
    outline: 0;
    border: 0;
  }
`;

export default Input;
