import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import colors from '../../../theme';

export const StyledContainer = styled.div`
  width: 359px;
  height: 56px;
  background-color: ${colors.white};
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  border: 2px solid ${colors.white};
  border-radius: 6px; 
`;

export const StyledInput = styled(Field)`
  border: none;
  color: ${colors.gray};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.4px;
  line-height: 30px;
  width: 100%;
  :focus {
    outline: none;
    color: ${colors.mediumGray};
  }
  ::placeholder {
    color: ${colors.gray};
  }
`;

export const StyledIcon = styled.img`
  margin-right: 15px;
  margin-left: 25px;
`;

export const StyledButton = styled.button`
  height: 56px;
  background-color: ${colors.lime};
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  letter-spacing: 0.4px;
  line-height: 30px;
  color: ${colors.white};
  border: 2px solid ${colors.lime};
  overflow: visible;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  padding: 0;
  width: 100%;
`;

const messageStyles = {
  height: '20px',
  backgroundColor: colors.red,
  color: colors.white,
  justifyContent: 'center',
  display: 'flex',
  borderRadius: '6px',
};

export const StyledMessage = styled(ErrorMessage)`
  ${messageStyles}
`;

export const AuthMessage = styled.div`
  ${messageStyles}
`;
