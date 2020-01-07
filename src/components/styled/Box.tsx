import styled, { AnyStyledComponent } from 'styled-components';

import {
  background,
  layout,
  opacity,
  color,
  position,
  zIndex,
} from 'styled-system';

const Box: AnyStyledComponent = styled.div`
  ${background}
  ${layout}
  ${opacity}
  ${color}
  ${position}
  ${zIndex}
`;

export default Box;
