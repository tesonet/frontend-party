import React from 'react';
import './List.scss';

const data = [];

const ListView = () => {
  const items = data.map((item, index) => {
    return (
      <li className="item" key={index}>
        <span>{item.name}</span>
        <span>{item.distance}</span>
      </li>
    )
  });

  return (
    <div className="List">
      <ul>{items}</ul>
    </div>
  )
};

export default ListView;