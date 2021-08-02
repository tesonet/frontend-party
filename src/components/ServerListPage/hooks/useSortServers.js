import { useState } from 'react';

import {
  ASCENDING,
  DESCENDING,
  initialSortConfig,
} from '../config/constants';
import { sortServers } from '../utils';

const useSortServers = (servers, setServers) => {
  const [sortConfig, setSortConfig] = useState(initialSortConfig);

  const handleSortAction = (fieldName) => {
    const oldSortDirection = sortConfig[fieldName];
    const newSortDirection = [ASCENDING, null].includes(oldSortDirection) ? DESCENDING : ASCENDING;
    const newSortConfig = {
      ...initialSortConfig,
      [fieldName]: newSortDirection,
    };
    const sortedServers = sortServers(newSortConfig, fieldName, servers);

    setServers(sortedServers);
    setSortConfig(newSortConfig);
  };

  return {
    sortConfig,
    handleSortAction,
  };
};

export default useSortServers;
