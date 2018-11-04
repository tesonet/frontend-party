import React from "react";

const ListItems = ({ list }) => {  
  return list.map((item, index) =>
    <div className="list-item row no-gutters" key={"item"+index}>
      <div className="col-6">{item.name}</div>
      <div className="col-6 text-right">{item.distance} km</div>
    </div>
  )
};

const ListProp = ({ col1, col2, list }) => (
  <div>
    <div className="list-header row no-gutters">
      <div className="col-6">{col1}</div>
      <div className="col-6 text-right">{col2}</div>
    </div>
    <div className="list-content">
      <ListItems list={list} />
    </div>
  </div>
);

export default ListProp;