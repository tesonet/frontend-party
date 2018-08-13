import * as React from 'react';
import * as styles from './styles.scss';

interface IProps {
  name: string;
  distance: string;
}

const Server: React.SFC<IProps> = ({ distance, name }) => (
  <div className={styles.server}>
    <span>{name}</span>
    <span>{distance}</span>
  </div>
);

export default Server;
