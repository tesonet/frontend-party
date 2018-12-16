import React from 'react';
import '../sass/serveritems.scss';

const ServerItem = ({name, distance}) => {
  return (
    <div className="row justify-content-between server-item-container">
      <div className="col-8">
        {name}
      </div>
      <div className="col-4 text-right">
        {distance}
      </div>
    </div>
  );
}

export default ServerItem;