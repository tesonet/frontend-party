import { styled } from 'styletron-react';
import { Button } from 'react-bootstrap';

const logo = require('./images/logo.png');
const logout = require('./images/logout.svg');
const logoutHover = require('./images/logout-hover.svg');

export const Logo = styled('span', {
  display: 'inline-block',
  width: '115px',
  height: '30px',
  background: `url(${logo}) no-repeat center center`,
});

export const Logout = styled(Button, {
  display: 'inline-block',
  paddingLeft: '28px',
  background: `url(${logout}) no-repeat left center`,
  backgroundSize: '16px',
  color: '#2f3254',
  ':hover': {
    color: '#99cc33',
    textDecoration: 'none',
    backgroundImage: `url(${logoutHover})`,
  },
  ':active': {
    outline: 'none !important',
  },
});

export const Row = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Head = styled(Row, {
  backgroundColor: '#f5f5f5',
  textTransform: 'uppercase',
});

export const Title = styled(Row, {
  padding: '26px 0',
});

export const Col = styled('div', ({ $fontSize = 16 }) => ({
  fontSize: `${$fontSize}px`,
  padding: '12px 15px',
}));
