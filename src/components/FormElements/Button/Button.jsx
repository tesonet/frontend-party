import styled from 'styled-components';
import { variant } from 'styled-system';

const buttonVariants = {
  variants: {
    primary: {
      padding: 20,
      borderRadius: 5,
      color: 'white',
      backgroundColor: 'green',
      '&:hover': {
        backgroundColor: 'darkGreen'
      }
    },
    text: {
      padding: 12,
      '&:hover': {
        color: 'green'
      }
    }
  }
};

export default styled('button')`
  border: none;
  background: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${variant(buttonVariants)}
`;
