import React from 'react';

import { Box } from 'components/Core';

const HeaderWrapper = ({ children }) => (
  <Box
    p={20}
    display='flex'
    justifyContent='space-between'
    borderTop='1px solid'
    borderBottom='1px solid'
    borderColor='grey'
    backgroundColor='lightGrey'
  >
    {children}
  </Box>
);

export default HeaderWrapper;
