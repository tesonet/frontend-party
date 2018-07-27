import * as React from 'react';
import 'scss/loader.scss';
import Loader, { LOADER_COLOR, LOADER_SIZE } from './Loader';

interface IProps {
  size: LOADER_SIZE;
  color: LOADER_COLOR;
  isVisible: boolean;
}

const ServerListLoader: React.SFC<IProps> = ({ isVisible, ...rest }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="position-absolute w-100 login-loader">
      <div className="position-absolute login-loader-spinner">
        <Loader {...rest} />
      </div>
    </div>
  );
};

export default ServerListLoader;
