import styled, { AnyStyledComponent } from 'styled-components';

import { background, color, layout } from 'styled-system';

const Button: AnyStyledComponent = styled.button`
  ${layout}
  ${background}
  ${color}
  border-radius: ${props => props.theme.radii[0]};
  height: ${props => props.theme.sizes[0]};
`;

export default Button;
