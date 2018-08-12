import * as React from 'react';
import * as styles from './styles.scss';

interface IProps {
  location: string;
  distance: string;
}

const Server: React.SFC<IProps> = ({ distance, location }) => (
  <div className={styles.server}>
    <span>{location}</span>
    <span>{distance}</span>
  </div>
);

export default Server;
