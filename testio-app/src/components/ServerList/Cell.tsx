import * as React from 'react';

interface IProps {
  text: string;
  onClick?: () => void;
}

const Cell: React.SFC<IProps> = ({ text, onClick }) => (
  <span onClick={onClick}> { text }</span>
);

export default Cell;
