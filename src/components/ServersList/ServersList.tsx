import React from 'react';
import { useEffect } from 'react';
import styles from './ServersList.module.scss';
import { Header } from '../common/Header';
import { Loader } from '../common/Loader';
import { Server } from './types';

export interface Props {
  servers: Server[];
  isLoading: boolean;
  getServersListRequest: () => void;
}

export const ServersList: React.FC<Props> = ({
  servers,
  getServersListRequest,
  isLoading
}) => {
  useEffect(() => {
    getServersListRequest();
  }, [getServersListRequest]);

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
        {isLoading ? (
          <div className={styles.loaderWrapper}>
            <Loader dataTest="loader" stroke={'black'} />
          </div>
        ) : (
          servers
            .sort((a, b) => (a.distance > b.distance ? 1 : -1))
            // .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((server, index) => (
              <div
                data-test="server-row"
                key={`server-${index}`}
                className={styles.row}
              >
                <span>{server.name}</span>
                <span>{server.distance} km</span>
              </div>
            ))
        )}
      </div>
    </div>
  );
};
