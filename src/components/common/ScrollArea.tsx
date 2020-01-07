import React, { ReactNode } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

type ScrollAreaTypes = {
  children: ReactNode;
  style?: React.CSSProperties;
};

export default function ScrollArea({
  children,
  style = {},
}: ScrollAreaTypes) {
  return <Scrollbars style={style}>{children}</Scrollbars>;
}
