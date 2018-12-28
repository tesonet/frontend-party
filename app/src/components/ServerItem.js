import React from 'react';
import PropTypes from 'prop-types';
import '../sass/serveritems.scss';

const ServerItem = ({name, distance}) => {
  return (
    <div className='row justify-content-between server-item-container'>
      <div className='col-6 col-sm-4'>
        {name}
      </div>
      <div className='col-6 col-sm-4 text-right'>
        {distance}
      </div>
    </div>
  );
}

ServerItem.propTypes = {
  name: PropTypes.string,
  distance: PropTypes.string,
}

export default ServerItem;