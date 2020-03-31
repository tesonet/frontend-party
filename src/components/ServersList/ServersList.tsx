import React from 'react';
import styles from './ServersList.module.scss';
import { Header } from '../common/Header';


interface server {
  name: string;
  distance: number;
}
export interface Props {
  servers: server[]
}

export const ServersList: React.FC<Props> = ({servers}) => {
  const headerRow = () => (
    <div data-test="servers-header" className={styles.headerRow}>
      <span>SERVER</span>
      <span>DISTANCE</span>
    </div>
  );
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.servers}>
        {headerRow()}
        {servers?.map((server, index) => (
          <div data-test="server-row" key={`server-${index}`} className={styles.row}>
            <span>{server.name}</span>
            <span>{server.distance} km</span>
          </div>
        ))}
      </div>
    </div>
  );
};
