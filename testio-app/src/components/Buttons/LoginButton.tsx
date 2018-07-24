import * as React from 'react';

interface IProps {
  label: string;
  onClick: () => void;
}

const Button: React.SFC<IProps> = ({ label, onClick }) => {
  return (
    <button className="btn w-100 fz16 lh30 primary-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
