import * as React from 'react';

interface IProps {
  label: string;
  isVisible: boolean;
}

const ErrorLabel: React.SFC<IProps> = ({ isVisible, label }) => {
  if (isVisible) {
    return <div className="alert alert-danger">{label}</div>;
  }
  return null;
};

export default ErrorLabel;
