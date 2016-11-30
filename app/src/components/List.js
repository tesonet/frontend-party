import React, { PropTypes } from 'react';
import './List.scss';

const List = ({ data }) => (
  <div className="list">
    <div className="list-header">
      <div>Server</div>
      <div>Distance</div>
    </div>
    {data.map(({ name, distance }, i) => (
      <div key={i} className="list-item">
        <div>{name}</div>
        <div>{distance} km</div>
      </div>
    ))}
  </div>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
  })),
};

export default List;
