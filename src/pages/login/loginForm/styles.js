import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const StyledInput = styled(Field)`
  width: 363px;
  height: 58px;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  width: 363px;
  height: 58px;
`;

export const StyledMessage = styled(ErrorMessage)`
  color: red;
`;
