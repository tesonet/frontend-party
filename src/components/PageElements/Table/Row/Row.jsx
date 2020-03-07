import React from 'react';

import { BodyText } from 'components/Typography';

import { RowWrapper } from './atoms';

const Row = ({ name, distance }) => {
  return (
    <RowWrapper key={name} p={20}>
      <BodyText color='darkGrey'>{name}</BodyText>
      <BodyText color='darkGrey'>{`${distance} km`}</BodyText>
    </RowWrapper>
  );
};

export default Row;
