import { styled } from 'styletron-react';

export const Row = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid #e6e6e6',
});

export const Col = styled('div', {
  fontSize: '16px',
  padding: '12px 15px',
});
