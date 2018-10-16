import * as React from 'react';

import * as Styles from './button.scss';

type ButtonType = 'primary' | 'secondary';

interface Props {
  onClick: () => void;
  type: ButtonType;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, type, children, className = '' }: Props) => {
  return (
    <button
      className={`${Styles.button} ${Styles[type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
