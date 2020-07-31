import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ErrorMessage = styled.div`
  width: 100%;
  color: ${themeGet('colors.error')};
  font-weight: ${themeGet('fontWeights.bold')};
  font-size: ${themeGet('fontSizes.small')};
  height: 18px;
  text-align: center;
`;
