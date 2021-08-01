import { useState } from 'react';

import { ASCENDING, DESCENDING } from '../config/constatns';

const useSortDirection = () => {
  const [sortDirection, setSortDirection] = useState(null);

  const handleSortAction = (oldSortDirection) => {
    const newSortDirection = [ASCENDING, null].includes(oldSortDirection) ? DESCENDING : ASCENDING;
    setSortDirection(newSortDirection);
  };

  return {
    sortDirection,
    handleSortAction,
  };
};

export default useSortDirection;
