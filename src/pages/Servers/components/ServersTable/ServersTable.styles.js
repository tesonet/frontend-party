import styled from 'styled-components';
import COLORS from '@/shared/constants/colors';

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 6px 20px 20px;
  border-bottom: 1px solid ${COLORS.TABLE.ROW_BORDER};
  color: ${COLORS.TABLE.TABLE_TEXT};
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

export const StyledContentMessage = styled.div`
  color: ${COLORS.COMMON.LIGHT_GREEN};
  padding: 20px;
  justify-content: center;
  display: flex;
`

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
  color: ${COLORS.TABLE.HEADER_TEXT};
  cursor: pointer;
`

export const StyledArrow = styled.div`
  border: solid ${COLORS.TABLE.HEADER_TEXT};
  border-width: 0 2px 2px 0;
  display: inline-block;
  margin: 0px 10px;
  padding: 3px;
`

export const StyledArrowUp = styled(StyledArrow)`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`
export const StyledArrowDown = styled(StyledArrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
 ` 