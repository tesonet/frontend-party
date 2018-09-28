import React from 'react';

export default ({children}) => (
  <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text">
        {children[0]}
      </span>
    </div>
    {children[1]}
  </div>
)
