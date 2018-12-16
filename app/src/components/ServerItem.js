import React from 'react';

const ServerItem = ({name, distance}) => {
  return (
    <div className="row justify-content-between">
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