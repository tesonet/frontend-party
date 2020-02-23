import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

const TextField = ({
  onChange,
  value,
  label,
  icon,
  type = 'text',
  required
}) => {
  return (
    <div
      className={cx(styles['text-field'], {
        [styles['with-icon']]: !!icon
      })}
    >
      {icon && <div className={styles['icon']}>{icon}</div>}
      <input
        type={type}
        onChange={e => onChange(e.target.value)}
        value={value}
        placeholder={label}
        required={required}
      />
    </div>
  );
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.oneOf(['text', 'password']),
  required: PropTypes.bool
};

export default TextField;
