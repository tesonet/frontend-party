import styled from 'styled-components';
import { variant } from 'styled-system';

const inputVariants = {
  variants: {
    default: {
      padding: '20px 25px',
      borderRadius: 5,
      backgroundColor: 'white',
      '&:disabled': {
        backgroundColor: 'grey',
        cursor: 'not-allowed'
      }
    }
  }
};

export default styled('input')`
  border: none;
  background: none;

  ${variant(inputVariants)}

  width: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: 'Roboto', sans-serif;
  padding-left: ${({ hasIcon }) => hasIcon && '50px'};
  border: ${({ hasError, theme }) =>
    hasError && `1px solid ${theme.colors.red}`};

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
