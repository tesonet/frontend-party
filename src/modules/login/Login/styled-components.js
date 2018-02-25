import { styled } from 'styletron-react';
import { Button as BButton } from 'react-bootstrap';
import { Input } from '../../../lib/components';

const background = require('./images/background.png');
const logo = require('./images/logo.png');

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignsItems: 'center',
  background: `url(${background}) no-repeat center center`,
  backgroundAttachment: 'fixed',
  backgroundSize: '100% 100%',
});

export const Box = styled('div', {
  width: '361px',
  padding: '0',
  margin: '0 auto',
});

export const Logo = styled('div', {
  background: `url(${logo}) no-repeat center center`,
  height: '64px',
  marginBottom: '70px',
});

export const Field = styled(Input, {
  height: '56px !important',
  padding: '15px 16px !important',
  borderRadius: '5px !important',
  marginTop: '5px',
});

const activeStyle = {
  backgroundColor: '#86b300 !important',
};

export const Button = styled(BButton, {
  height: '56px !important',
  padding: '15px 16px !important',
  borderRadius: '5px !important',
  backgroundColor: '#9fd533',
  ':active': activeStyle,
  ':focus': activeStyle,
  ':hover': activeStyle,
  fontSize: '16px !important',
  fontWeight: '600',
});
