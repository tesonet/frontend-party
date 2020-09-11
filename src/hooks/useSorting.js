import { useState, useMemo } from 'react';

const useSorting = (items) => {
  const [sortConfig, setSortConfig] = useState({});

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const sortData = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, sortData, sortConfig };
};

export default useSorting;
