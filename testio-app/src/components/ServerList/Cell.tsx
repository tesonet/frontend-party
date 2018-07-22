import * as React from 'react';

interface IProps {
  text: string;
  onClick?: () => void;
}

const Cell: React.SFC<IProps> = ({ text, onClick }) => (
  <div className="col" onClick={onClick}>
    {text}
  </div>
);

export default Cell;
