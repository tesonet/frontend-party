import React from 'react';
import styles from './ServersList.module.scss';
import { Header } from '../common/Header';

export const ServersList: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.servers}></div>
    </div>
  );
};
