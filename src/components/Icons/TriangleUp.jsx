import React from 'react';

import { IconWrapper } from './atoms';

const TriangleUp = props => (
  <IconWrapper {...props}>
    <svg height='10' width='10'>
      <polygon points='0 0,10 0,5 10' fill='currentColor' />
    </svg>
  </IconWrapper>
);

export default TriangleUp;
