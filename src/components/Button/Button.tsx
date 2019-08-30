import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IProps } from './Button.interface';

const Button: React.FC<IProps & RouteComponentProps> = props => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.history.push('/server');
  };
  return (
    <button
      onClick={handleSubmit}
      className={'bg-brand-main hover:bg-brand-hover text-white font-bold py-2 px-4 rounded'}
    >
      {props.text}
    </button>
  );
};

export default withRouter(Button);
