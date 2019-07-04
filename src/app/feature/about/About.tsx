import React from 'react';

export const About: React.FC = (props) => (
  <div>
    <h1>About</h1>
    <br />
    <pre>{JSON.stringify(props, undefined, 2)}</pre>
  </div>
);
