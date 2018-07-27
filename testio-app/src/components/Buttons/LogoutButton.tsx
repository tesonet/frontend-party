import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

interface IProps {
  label: string;
  onClick: () => void;
}

const LogoutButton: React.SFC<IProps> = ({ label, onClick }) => (
  <div className="logout-btn fz14" onClick={onClick}>
    <FontAwesomeIcon
      className="rotateY-180"
      icon={'sign-out-alt'}
      size={'lg'}
    />
    <span className="p-l-10 text-capitalize">{label}</span>
  </div>
);

export default LogoutButton;
