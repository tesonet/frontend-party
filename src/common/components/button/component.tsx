import * as classnames from 'classnames';
import { noop } from 'common/utils/noop';
import * as React from 'react';
import * as styles from './styles.scss';

export enum Type {
  Opaque = 'opaque',
  Ghost = 'ghost'
}

interface IProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
  type?: Type;
  disabled?: boolean;
}

const Button: React.SFC<IProps> = ({
  children,
  onClick = noop,
  type = Type.Opaque,
  disabled = false
}) => (
  <button
    onClick={onClick}
    className={classnames(styles.button, {
      [styles.opaque]: type === Type.Opaque,
      [styles.ghost]: type === Type.Ghost,
      [styles.disabled]: disabled
    })}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
