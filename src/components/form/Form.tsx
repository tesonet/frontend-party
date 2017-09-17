import * as React from 'react';

interface IFormProps {
  onSubmit: (event: React.SyntheticEvent<any>) => any;
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
}

export default (props: IFormProps) => (
  <form onSubmit={props.onSubmit}>
    {props.children}
  </form>
);
