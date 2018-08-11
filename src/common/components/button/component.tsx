import { noop } from 'common/utils/noop';
import * as React from 'react';
import * as styles from './styles.scss';

interface IProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

const Button: React.SFC<IProps> = ({ children, onClick = noop }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);

export default Button;
