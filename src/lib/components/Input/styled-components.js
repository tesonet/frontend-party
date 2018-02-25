import { styled } from 'styletron-react';
import { FormControl, FormGroup } from 'react-bootstrap';

export const Icon = styled('span', ({ $img }) => ({
  display: 'inline-block',
  height: '16px',
  width: '14px',
  position: 'absolute',
  left: '25px',
  top: '20px',
  background: `url(${$img}) no-repeat center center`,
  backgroundSize: '14px 16px',
}));

export const Input = styled(FormControl, ({ $icon }) => ({
  ...($icon ? { paddingLeft: '54px !important' } : {}),
}));

export const Group = styled(FormGroup, {
  position: 'relative',
});
