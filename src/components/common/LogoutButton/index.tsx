import * as React from 'react';
import logout from '../../../utils/logout';
// @ts-ignore
import * as style from './index.scss';
import classnames from 'classnames';

// tslint:disable-next-line
const logoutIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M3027,54l-4,4,4,4V59h6V57h-6V54Zm11,12h-9a0.945,0.945,0,0,1-1-1V62h2v2h7V52h-7v2h-2V51a0.945,0.945,0,0,1,1-1h9a0.945,0.945,0,0,1,1,1V65A0.945,0.945,0,0,1,3038,66Z" transform="translate(-3023 -50)"/></svg>);

class LogoutButton extends React.Component<React.HTMLProps<HTMLElement>> {
  public render() {
    const { children, className } = this.props;
    const classes: string = classnames(style['logout-button'], {
      [`${className}`]: !!className
    });

    return (
      <button
        type="button"
        className={classes}
        onClick={logout}
      >{logoutIcon}{children}</button>
    );
  }
}

export default LogoutButton;
