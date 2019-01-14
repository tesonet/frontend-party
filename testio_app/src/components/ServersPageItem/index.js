import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ServerItem = ({name, distance}) => {
  return (
    <div className='row justify-content-between container'>
      <div className='col-6 col-sm-4'>
        {name}
      </div>
      <div className='col-6 col-sm-4 text-right'>
        {distance} km
      </div>
    </div>
  );
}

ServerItem.propTypes = {
  name: PropTypes.string,
  distance: PropTypes.number,
}

export default ServerItem;