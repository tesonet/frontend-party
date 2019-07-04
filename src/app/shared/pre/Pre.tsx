import React from 'react';

export const Pre: React.FC<any> = (props: any) => (
  <pre>{JSON.stringify(props, undefined, 2)}</pre>
);
