import React from 'react';

import { RowWrapper } from './atoms';

const Row = ({ name, distance }) => {
  return (
    <RowWrapper key={name}>
      <div>{name}</div>
      <div>{`${distance} km`}</div>
    </RowWrapper>
  );
};

export default Row;
