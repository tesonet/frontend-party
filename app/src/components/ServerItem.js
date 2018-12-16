import React from 'react';

const alignRight = {
  textAlign: 'right'
}

const ServerItem = ({name, distance}) => {
  return (
    <div className="row justify-content-between">
      <div className="col-8">
        {name}
      </div>
      <div className="col-4" style={alignRight}>
        {distance}
      </div>
    </div>
  );
}

export default ServerItem;