import * as React from 'react';
import Cell from './Cell';

interface IProps {
  distance: string;
  name: string;
}

const Row: React.SFC<IProps> = ({ distance, name }) => (
  <div>
    <Cell text={ name } />
    <Cell text={ distance } />
  </div>
);

export default Row;
