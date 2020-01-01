import styled from 'styled-components';
import colors from '../../../theme';

export const StyledTableRow = styled.div`
  border: 1px solid ${colors.lightGray};
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 44px;
  opacity: 0.6;
  padding: 0 15px;
`;

export const StyledTableHeader = styled.div`
  justify-content: space-between;
  display: flex;
  color: ${colors.mediumGray};
  background-color: ${colors.white};
  height: 61px;
  border: 1px solid ${colors.lightGray};
  border-spacing: unset;
  align-items: center;
  padding: 0 15px;
  div {
    text-transform: uppercase;
    font-size: 14px;
    &:hover {
      opacity: 0.6;
    }
    cursor: pointer;
  }
`;

export const StyledKey = styled.div`
`;
