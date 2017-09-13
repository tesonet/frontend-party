import * as React from 'react';
import classnames from 'classnames';
import './style.scss';

export const Icon = ({ name, flipped }) => {
  const className = classnames({
    [`fa fa-${name}`]: true,
    'icon': true,
    'icon--flipped': flipped
  })

  return (
    <i className={className} />
  );
}
