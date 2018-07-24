import * as classnames from 'classnames';
import * as React from 'react';
import 'scss/row.scss';
import Cell from './Cell';

interface IProps {
  distance: string;
  name: string;
  isHeader?: boolean;
}

const Row: React.SFC<IProps> = ({ distance, name, isHeader }) => (
  <div
    className={classnames('row lh30 server-row', {
      'fz14 bgc-header-grey': isHeader,
      fz16: !isHeader
    })}
  >
    <Cell text={name} />
    <Cell text={distance} />
  </div>
);

export default Row;
