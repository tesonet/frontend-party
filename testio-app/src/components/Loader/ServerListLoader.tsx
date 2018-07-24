import * as React from 'react';
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
    <div className="servers-loader d-flex justify-content-center align-items-center flex-wrap">
      <Loader {...rest} />
    </div>
  );
};

export default ServerListLoader;
