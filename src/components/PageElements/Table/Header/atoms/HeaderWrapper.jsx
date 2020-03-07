import styled from 'styled-components';
import { space } from 'styled-system';

export default styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.grey};

  ${space}
`;
