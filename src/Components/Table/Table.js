import React from "react";

export const Table = ({ headings, items }) => (
  <div className="table">
    <div className="table__header">
      <div className="table__row">
        {headings &&
          headings.map((heading) => (
            <div className="table__cell">{heading}</div>
          ))}
      </div>
    </div>
    <div className="table__body">
      {items &&
        items.map((item, index) => (
          <div className="table__row" key={`${item.name}-${index}`}>
            <div className="table__cell">{item.name}</div>
            <div className="table__cell">{item.distance} km</div>
          </div>
        ))}
    </div>
  </div>
);
