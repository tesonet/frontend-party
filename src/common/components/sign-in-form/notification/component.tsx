import * as React from 'react';
import * as styles from './styles.scss';

const Notification: React.SFC = ({ children }) => (
  <div className={styles.notification}>{children}</div>
);

export default Notification;
