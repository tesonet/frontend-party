import React from 'react';
import { useSelector } from 'react-redux';
import './List.scss';
import sort from '../../modules/sort';

const data = [];

const ListView = () => {
  const state = useSelector(state => state.sort);
  let list = [];

  switch (state) {
    case 'SORT_NAME': list = sort.string(data, 'name'); break;
    case 'SORT_DISTANCE': list = sort.number(data, 'distance'); break;
  }

  const items = list.map((item, index) => {
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