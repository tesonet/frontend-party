import React, { useState } from 'react';

import { IProps } from './Input.interface';

const Input: React.FC<IProps> = props => {
  const [value, setInput] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <div className={'md:flex md:items-center mb-6'}>
      <input
        className={
          'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 focus:text-input-active leading-tight focus:outline-none focus:bg-white focus:border-branc-main'
        }
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Input;
