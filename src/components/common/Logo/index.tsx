import * as React from 'react';
import { ILogoProps } from '../../../interfaces';
import classnames from 'classnames';
import './index.scss';

class Logo extends React.Component<ILogoProps> {
  public render() {
    const { light, className } = this.props;
    const classes: string = classnames('logo', {
      'logo--light': !!light,
      [`${className}`]: !!className
    });

    return (
      <div className={classes}></div>
    );
  }
}

export default Logo;
