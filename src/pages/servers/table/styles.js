import styled from 'styled-components';
import colors from '../../../theme';

export const StyledTableRow = styled.div`
  border: 1px solid ${colors.lightGray};
  justify-content: space-between;
  display: flex;
  padding: 0 15px;
`;

export const StyledTableHeader = styled.div`
  justify-content: space-between;
  display: flex;
  color: #999999;
  background-color: #f5f5f5;
  height: 61px;
  width: 100%;
  border: 1px solid ${colors.lightGray};
  border-spacing: unset;
  align-items: center;
  div {
    text-transform: uppercase;
    font-size: 14px;
    &:hover {
      opacity: 0.6;
    }
    cursor: pointer;
  }
`;

export const StyledName = styled.div`
`;

export const StyledDistance = styled.div`
`;

export const StyledKey = styled.div`
`;
