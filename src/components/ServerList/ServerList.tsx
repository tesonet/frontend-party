import React from 'react';
import SimpleBar from 'simplebar-react';

import './ServerList.scss';

const ServerList: React.SFC = () => {
  return (
    <div className="servers">
      <div className="servers__nav">
        <img src="/static/images/dark-logo.svg" />
        <button>Logout</button>
      </div>

      <div className="servers__header">
        <div>SERVER</div>
        <div>DISTANCE</div>
      </div>

      <SimpleBar className="servers__list">
        <ul>
          {[...Array(50)].map((x, i) =>
            <li key={i} className="servers__list-item">{`Server #${i + 1}`}</li>
          )}
        </ul>
      </SimpleBar>
    </div>
  );
}

export default ServerList;