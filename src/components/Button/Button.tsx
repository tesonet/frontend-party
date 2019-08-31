import React from 'react';
import { IProps } from './Button.interface';

const Button: React.FC<IProps> = props => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button
      onClick={handleSubmit}
      className={'bg-brand-main hover:bg-brand-hover text-white font-bold py-2 px-4 rounded'}
    >
      {props.text}
    </button>
  );
};

export default Button;
