import React from 'react';

import { IconWrapper } from './atoms';

const TriangleDown = props => (
  <IconWrapper {...props}>
    <svg height='10' width='10'>
      <polygon points='5 0,10 10,0 10' fill='currentColor' />
    </svg>
  </IconWrapper>
);

export default TriangleDown;
