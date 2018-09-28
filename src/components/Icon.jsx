import React from 'react';

export default ({icon, title, className}) => {
  const classes = ['fas', icon];
  if (className !== '') {
    classes.push(className);
  }
  return <i className={classes.join(' ')} title={title} aria-hidden />;
};
