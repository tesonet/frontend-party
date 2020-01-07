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
      width="100vw"
      height="100vh"
      opacity={opacity}
      position="fixed"
      zIndex={-1}
    />
  );
}
