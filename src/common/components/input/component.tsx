import * as classnames from 'classnames';
import LockIcon from 'common/assets/icons/lock.svg';
import UserIcon from 'common/assets/icons/user.svg';
import Empty from 'common/components/empty';
import { noop } from 'common/utils/noop';
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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => any;
  error?: string | null;
  value?: string;
}

const iconsByType = {
  [IconType.User]: UserIcon,
  [IconType.Lock]: LockIcon
};

const Input: React.SFC<IProps> = ({
  icon,
  type = 'text',
  placeholder,
  onChange = noop,
  onBlur = noop,
  onFocus = noop,
  error,
  value
}) => {
  const IconComponent = iconsByType[icon!] || Empty;

  return (
    <>
      <label className={styles.label}>
        <input
          type={type}
          className={classnames(styles.input, {
            [styles.inputWithIcon]: !!icon
          })}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
        />
        <IconComponent className={styles.icon} />
      </label>
      {error && <span className={styles.error}>{error}</span>}
    </>
  );
};

export default Input;
