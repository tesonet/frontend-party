import React from 'react';
import { IProps } from './Branding.interface';

const Branding: React.FC<IProps> = props => {
  return (
    <div className={`text-6xl font-extrabold ${props.textColor}`}>
      testio<span className={'text-brand-main'}>.</span>
    </div>
  );
};

export default Branding;
