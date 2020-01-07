import React from 'react';
import Button from '../styled/Button';

export default function LoginButton(props: React.ElementType) {
  return (
    <Button {...props} width={'100%'} backgroundColor="#9fd533">
      Log In
    </Button>
  );
}
