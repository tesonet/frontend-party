import React from 'react';

import { Box } from 'components/Core';
import { BodyText } from 'components/Typography';

const Row = ({ name, distance }) => {
  return (
    <Box
      key={name}
      p={20}
      display='flex'
      justifyContent='space-between'
      borderBottom='1px solid'
      borderColor='grey'
    >
      <BodyText color='darkGrey'>{name}</BodyText>
      <BodyText color='darkGrey'>{`${distance} km`}</BodyText>
    </Box>
  );
};

export default Row;
