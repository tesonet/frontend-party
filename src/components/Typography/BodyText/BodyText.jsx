import styled from 'styled-components';
import { layout, space, color, typography } from 'styled-system';

export default styled('p')`
  margin: 0;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;

  ${space}
  ${layout}
  ${color}
  ${typography}
`;
