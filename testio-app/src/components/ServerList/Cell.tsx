import * as React from 'react';

interface IProps {
  text: string;
}

const Cell: React.SFC<IProps> = ({ text }) => (
  <div className="col-6">{text}</div>
);

export default Cell;
