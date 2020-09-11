import styled from 'styled-components';
import COLORS from '@/shared/constants/colors';

export const StyledContainer = styled.div`
  padding: 20px;
  background: ${COLORS.TABLE.HEADER_BG};
  border-top: 1px solid ${COLORS.TABLE.ROW_BORDER};
  border-bottom: 1px solid ${COLORS.TABLE.ROW_BORDER};
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`

export const StyledColumn = styled.div`
  color: ${COLORS.TABLE.HEADER_TEXT}
`
