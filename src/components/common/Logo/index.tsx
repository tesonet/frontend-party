import * as React from 'react';
import { ILogoProps } from '../../../interfaces';
// @ts-ignore
import * as style from './index.scss';
import classnames from 'classnames';

class Logo extends React.Component<ILogoProps> {
  public render() {
    const { light, className } = this.props;
    const classes: string = classnames(style.logo, {
      [`${style['logo--light']}`]: !!light,
      [`${className}`]: !!className
    });

    return (
      <div className={classes}></div>
    );
  }
}

export default Logo;
