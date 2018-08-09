import * as React from 'react';
import * as styles from './styles.scss';

interface IProps {
  type?: string;
  renderIcon?: () => React.ReactNode;
}

const Input: React.SFC<IProps> = ({ renderIcon, type = 'text' }) => (
  <label>
    {renderIcon}
    <input type={type} className={styles.input} />
  </label>
);

export default Input;
