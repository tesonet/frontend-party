import * as React from 'react';

interface IProps {
  top?: string | number;
  left?: string | number;
}

const Spacer: React.SFC<IProps> = ({ left, top }) => (
  <div style={{ marginTop: top, marginLeft: left }} />
);

export default Spacer;
