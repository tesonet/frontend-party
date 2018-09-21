// @flow

import * as React from 'react';

type Props = {
  children: ?React.Node,
};

export const MainLayout = ({ children }: Props) => (
  <div
    style={{
      backgroundColor: 'green',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      height: '100px',
    }}
  >
    {children}
  </div>
);
