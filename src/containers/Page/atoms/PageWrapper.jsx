import styled from 'styled-components';
import { background } from 'styled-system';

export default styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${background}
`;
