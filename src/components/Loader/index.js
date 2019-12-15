import React from 'react';

import './style.scss';

function Loader() {
  return (
    <div className="loader">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
