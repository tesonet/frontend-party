import * as React from 'react';
import Cell from './Cell';

interface IProps {
  distance: string;
  name: string;
  nameOnClick?: () => void;
  distanceOnClick?: () => void;
}

const Row: React.SFC<IProps> = ({
  distance,
  name,
  nameOnClick,
  distanceOnClick
}) => (
  <div className="row">
    <Cell text={name} onClick={nameOnClick} />
    <Cell text={distance} onClick={distanceOnClick} />
  </div>
);

export default Row;
