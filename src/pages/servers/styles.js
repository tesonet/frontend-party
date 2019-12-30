import styled from 'styled-components';
import colors from '../../theme';

export const StyledTable = styled.div`
  table-layout: fixed;
  width: 100%;
  border: 1px solid ${colors.lightGray};
  border-spacing: unset;
`;

export const StyledHead = styled.div`
  background-color: #f5f5f5;
  color: ${colors.mediumGray};
  text-transform: uppercase;
  cursor: pointer;
`;

export const StyledRow = styled.div`
  height: 45px;
`;

export const StyledCellHeader = styled.div`
  height: 45px;
`;

export const StyledDataCell = styled.div`
  border-bottom: 1px solid ${colors.lightGray};
  color: ${colors.darkGray};
`;

export const StyledTableHeader = styled.div`
  justify-content: space-between;
  color: #999999;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  div {
    text-transform: uppercase;
    font-size: 14px;
    &:hover {
      opacity: 0.6;
    }
    cursor: pointer;
  }
`;
