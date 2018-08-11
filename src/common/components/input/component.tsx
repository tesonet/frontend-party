import * as classnames from 'classnames';
import LockIcon from 'common/assets/icons/lock.svg';
import UserIcon from 'common/assets/icons/user.svg';
import Empty from 'common/components/empty';
import * as React from 'react';
import * as styles from './styles.scss';

export enum IconType {
  User = 'user',
  Lock = 'lock'
}

interface IProps {
  type?: string;
  icon?: IconType;
  placeholder?: string;
}

const iconsByType = {
  [IconType.User]: UserIcon,
  [IconType.Lock]: LockIcon
};

const Input: React.SFC<IProps> = ({ icon, type = 'text', placeholder }) => {
  const IconComponent = iconsByType[icon!] || Empty;

  return (
    <label className={styles.label}>
      <input
        type={type}
        className={classnames(styles.input, { [styles.inputWithIcon]: !!icon })}
        placeholder={placeholder}
      />
      <IconComponent className={styles.icon} />
    </label>
  );
};

export default Input;
