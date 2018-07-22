import * as React from 'react';

interface IProps {
  label: string;
  onClick: () => void;
}

const Button: React.SFC<IProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;
