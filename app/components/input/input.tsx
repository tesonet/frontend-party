import * as React from 'react';

import * as Styles from './input.scss';

interface Props {
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  placeholder?: string;
  type?: string;
}

const Input = ({
  value,
  onChange,
  icon,
  placeholder = '',
  type = 'text',
}: Props) => {
  return (
    <div className={Styles.container}>
      <input
        className={`${Styles.input} ${icon ? Styles.withIcon : ''}`}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
      />
      {icon && (
        <div className={Styles.icon} data-test-id="input-icon">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
