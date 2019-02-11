import * as React from 'react';
import { IIconProps } from '../../../interfaces';
import classnames from 'classnames';
import './index.scss';

class Icon extends React.Component<IIconProps> {
  public render() {
    const { type, className } = this.props;
    const classes: string = classnames('icon', `icon--${type}`, {
      [`${className}`]: !!className
    });

    return (
      <div className={classes}></div>
    );
  }
}

export default Icon;
