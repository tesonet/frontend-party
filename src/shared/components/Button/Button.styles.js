import styled from 'styled-components';
import COLORS from '@/shared/constants/colors'

export const StyledButton = styled.button`
  width: 100%;
  background-color: ${COLORS.BUTTON.DEFAULT_COLOR};
  color: ${COLORS.COMMON.WHITE};
  height: 56px;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${COLORS.BUTTON.HOVER_COLOR};
  }
  &:disabled {
    background-color: ${COLORS.COMMON.LIGHT_GREY};
  }
`;