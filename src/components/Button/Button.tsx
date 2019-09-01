import React from 'react';
import { IProps } from './Button.interface';

const Button: React.FC<IProps> = props => {
  const { classes = '', text } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button onClick={handleSubmit} className={`hover:bg-brand-hover px-4 p-2 ${classes}`}>
      {text}
    </button>
  );
};

export default Button;
