import React from 'react';
import SortableHeadRow from '../SortableHeadRow';

const TableHead = ({ handleSortAction, sortConfig }) => (
  <thead>
    <tr className="text-gray-300 bg-tesonet-purple-900 font-bold">
      <SortableHeadRow
        name="Servers"
        handleSortAction={() => handleSortAction('name')}
        sortDirection={sortConfig.name}
      />
      <SortableHeadRow
        name="Distance"
        handleSortAction={() => handleSortAction('distance')}
        sortDirection={sortConfig.distance}
      />
    </tr>
  </thead>
);

export default TableHead;
