import React from 'react';

import { CommonContainer } from '@Common';

import { NOT_FOUND_MESSAGE } from './config/constants';

const NotFoundPage = () => (
  <CommonContainer>
    {NOT_FOUND_MESSAGE}
  </CommonContainer>
);

export default NotFoundPage;
