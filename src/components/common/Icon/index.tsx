import * as React from 'react';
import { IIconProps } from '../../../interfaces';
// @ts-ignore
import * as style from './index.scss';
import classnames from 'classnames';

class Icon extends React.Component<IIconProps> {
  public render() {
    const { type, className } = this.props;

    const classes: string = classnames(style.icon, style[`icon--${type}`], {
      [`${className}`]: !!className
    });

    return (
      <div className={classes}></div>
    );
  }
}

export default Icon;
