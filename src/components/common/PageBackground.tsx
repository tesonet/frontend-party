import React, { ReactNode } from 'react';
import Box from '../styled/Box';

type PageBackgroundTypes = {
  backgroundImage: string;
  children?: ReactNode;
};

export default function PageBackground({
  backgroundImage,
}: PageBackgroundTypes) {
  return (
    <Box
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="fixed"
      top={'0px'}
      bottom={'0px'}
      left={'0px'}
      right={'0px'}
      zIndex={-1}
    />
  );
}
