import styled from 'styled-components';
import COLORS from '@/shared/constants/colors'

export const StyledInput = styled.input`
  border: none;
  font-size: 16px;
  padding: 20px 20px 20px 50px;
  ${({ hasIcon }) => !hasIcon && `padding-left: 20px`};
  border-radius: 4px;
  margin: 10px 0px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  color: ${COLORS.INPUT.TEXT_COLOR};
  &::placeholder {
    color: ${COLORS.INPUT.LABEL_COLOR};
  }
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const StyledInputIcon = styled.img`
  position: absolute;
  width: 14px;
  height: 16px;
  left: 20px;
  top: 30px;
`