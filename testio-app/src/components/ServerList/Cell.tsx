import * as React from 'react';

interface IProps {
  text: string;
}

const Cell: React.SFC<IProps> = ({ text }) => (
  <span>{ text }</span>
);

export default Cell;
