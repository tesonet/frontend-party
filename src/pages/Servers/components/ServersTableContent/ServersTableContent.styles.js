import styled from 'styled-components';
import COLORS from '@/shared/constants/colors';

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 6px 20px 20px;
  border-bottom: 1px solid ${COLORS.TABLE.ROW_BORDER};
`
export const StyledContentContainer = styled.div`
  overflow: auto;
  flex: 1 1 auto;
  &::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }
  &::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid ${COLORS.COMMON.WHITE};
    background-clip: padding-box;
    -webkit-border-radius: 7px;
    background-color: ${COLORS.COMMON.LIGHT_GREY};
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`
