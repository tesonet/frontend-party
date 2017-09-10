import * as React from 'react';

export const Icon = ({name}) => {
  return (
    <i className={`fa fa-${name}`}></i>
  );
}