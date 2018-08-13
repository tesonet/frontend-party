import { noop } from 'common/utils/noop';
import * as React from 'react';
import * as styles from './styles.scss';

interface IProps {
  onServerClick?: () => any;
  onDistanceClick?: () => any;
}

const Header: React.SFC<IProps> = ({
  onDistanceClick = noop,
  onServerClick = noop
}) => (
  <div className={styles.header}>
    <span className={styles.item} onClick={onServerClick}>
      Server
    </span>
    <span className={styles.item} onClick={onDistanceClick}>
      Distance
    </span>
  </div>
);

export default Header;
