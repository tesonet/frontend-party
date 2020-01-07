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
      width="100vw"
      height="100vh"
      position="fixed"
      zIndex={-1}
    />
  );
}
