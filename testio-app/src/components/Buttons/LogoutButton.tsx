import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

interface IProps {
  label: string;
  onClick: () => void;
}

const Button: React.SFC<IProps> = ({ label, onClick }) => (
  <div className="logout-btn fz14" onClick={onClick}>
    <FontAwesomeIcon icon={'sign-out-alt'} size={'lg'} />
    <span className="p-l-10">{label}</span>
  </div>
);

export default Button;
