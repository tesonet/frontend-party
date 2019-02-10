import * as React from 'react';
import { ILogoProps } from '../../../interfaces';
import './index.scss';

class Logo extends React.Component<ILogoProps> {
  public render() {
    const { light, className } = this.props;
    return (
      <div className={`logo ${light ? 'logo--light' : ''} ${className ? className : ''}`}></div>
    );
  }
}

export default Logo;
