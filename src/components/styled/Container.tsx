import styled, { AnyStyledComponent } from 'styled-components';

import {
  background,
  layout,
  opacity,
  color,
  position,
} from 'styled-system';

const Container: AnyStyledComponent = styled.div`
  ${background}
  ${layout}
  ${opacity}
  ${color}
  ${position}
  max-width: 1560px;
`;

export default Container;
