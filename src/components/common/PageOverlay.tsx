import React from 'react';
import Box from '../styled/Box';

type PageOverlayTypes = {
  backgroundColor: string;
  opacity?: string | number;
};

export default function PageOverlay({
  backgroundColor,
  opacity = 1,
}: PageOverlayTypes) {
  return (
    <Box
      backgroundColor={backgroundColor}
      backgroundSize="cover"
      top={'0px'}
      bottom={'0px'}
      left={'0px'}
      right={'0px'}
      opacity={opacity}
      position="fixed"
      zIndex={-1}
    />
  );
}
