import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  space,
  position,
  layout
} from 'styled-system';

export default styled('div')`
  cursor: ${({ onClick }) => onClick && 'pointer'};
  user-select: ${({ onClick }) => onClick && 'none'};
  ${background}
  ${color}
  ${space}
  ${position}
  ${border}
  ${flexbox}
  ${layout}
`;
