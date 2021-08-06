import sortServers from '../sortServers';
import {
  NAME,
  initialSortConfig,
  DESCENDING,
  ASCENDING, DISTANCE,
} from '../../config/constants';

import {
  unsortedServers,
  sortedServersByNameDescending,
  sortedServersByNameAscending,
  sortedServersByDistanceDescending,
  sortedServersByDistanceAscending,
} from '../../__mocks__/servers';

describe('sortServers', () => {
  it.each([
    ['should sort servers by name in descending order', NAME, DESCENDING, sortedServersByNameDescending],
    ['should sort servers by name in ascending order', NAME, ASCENDING, sortedServersByNameAscending],
    ['should sort servers by distance in descending order', DISTANCE, DESCENDING, sortedServersByDistanceDescending],
    ['should sort servers by distance in descending order', DISTANCE, ASCENDING, sortedServersByDistanceAscending],
  ])('%s', (description, fieldName, direction, expectedServers) => {
    const sortConfig = {
      ...initialSortConfig,
      [fieldName]: direction,
    };
    const sortedServers = sortServers(sortConfig, fieldName, unsortedServers);

    expect(sortedServers).toStrictEqual(expectedServers);
  });
});
