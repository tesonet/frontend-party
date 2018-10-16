import * as React from 'react';

import * as Styles from './logo.scss';

type LogoType = 'primary' | 'secondary';

interface Props {
  type: LogoType;
  className?: string;
}

const Logo = ({ type, className = '' }: Props) => (
  <div className={`${Styles.logo} ${className}`}>
    <span className={Styles[`name-${type}`]}>testio</span>
    <span className={Styles[`dot-${type}`]}>.</span>
  </div>
);

export default Logo;
