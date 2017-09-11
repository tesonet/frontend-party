/**
 * Sort by distance thenby name
 */
export const getSortedServers = (state) => {
  const compare = (a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  };

  const copy = obj => JSON.parse(JSON.stringify(obj));

  return copy(state.servers.list) // copy to prevent sort from mutating state
    .sort((a, b) => {
      const distanceComparison = compare(a.distance, b.distance);
      const nameComparison = compare(a.name, b.name);

      return distanceComparison === 0 ? nameComparison : distanceComparison;
    });
};
