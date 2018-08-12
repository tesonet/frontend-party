import ExitIcon from 'common/assets/icons/exit.svg';
import Button, { Type } from 'common/components/button/component';
import * as React from 'react';
import { noop } from '../../utils/noop';

interface IProps {
  onClick: () => any;
}

const LogOutButton: React.SFC<IProps> = ({ onClick = noop }) => (
  <Button type={Type.Ghost} onClick={onClick}>
    <ExitIcon />
    <span style={{ paddingLeft: '.5em' }}>Log out</span>
  </Button>
);

export default LogOutButton;
