import { act, renderHook } from '@testing-library/react-hooks';

import useSortServers from '../useSortServers';

import {
  ASCENDING,
  DESCENDING,
  DISTANCE,
  initialSortConfig,
  NAME,
} from '../../config/constants';
import {
  sortedServersByDistanceAscending,
  sortedServersByDistanceDescending,
  sortedServersByNameAscending,
  sortedServersByNameDescending,
  unsortedServers,
} from '../../__mocks__/servers';

describe('useSortServers', () => {
  it.each([
    [
      'should sort name in descending order if was not sorted before',
      NAME,
      DESCENDING,
      initialSortConfig,
      sortedServersByNameDescending,
    ],
    [
      'should sort name in ascending order if last direction was descending',
      NAME,
      ASCENDING,
      { ...initialSortConfig, [NAME]: DESCENDING },
      sortedServersByNameAscending,
    ],
    [
      'should sort name in descending order if last direction was ascending',
      NAME,
      DESCENDING,
      { ...initialSortConfig, [NAME]: ASCENDING },
      sortedServersByNameDescending,
    ],
    [
      'should sort distance in descending order if was not sorted before',
      DISTANCE,
      DESCENDING,
      initialSortConfig,
      sortedServersByDistanceDescending,
    ],
    [
      'should sort distance in ascending order if last direction was descending',
      DISTANCE,
      ASCENDING,
      { ...initialSortConfig, [DISTANCE]: DESCENDING },
      sortedServersByDistanceAscending,
    ],
    [
      'should sort distance in descending order if last direction was ascending',
      DISTANCE,
      DESCENDING,
      { ...initialSortConfig, [DISTANCE]: ASCENDING },
      sortedServersByDistanceDescending,
    ],
  ])('%s',
    (description, fieldName, expectedDirection, initialConfig, expectedServers) => {
      const setServers = jest.fn();
      const { result } = renderHook(() => useSortServers(
        unsortedServers,
        setServers,
        initialConfig,
      ));

      act(() => {
        result.current.handleSortAction(fieldName);
      });

      const expectedSortConfig = {
        ...initialSortConfig,
        [fieldName]: expectedDirection,
      };

      expect(result.current.sortConfig).toStrictEqual(expectedSortConfig);
      expect(setServers).toBeCalledWith(expectedServers);
    });
});
