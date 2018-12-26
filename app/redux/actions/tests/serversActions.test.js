import {
  CLEAR_SERVERS,
  RECEIVE_SERVERS,
  REJECT_SERVERS,
  REQUEST_SERVERS,
  SORT_SERVERS
} from 'app/utils/constants';
import {
  clearServers,
  receiveServers,
  rejectServers,
  requestServers,
  sortServers
} from 'app/redux/actions/serversActions';


describe('Servers Actions', () => {
  const sampleServersList = [
    {
      name: 'server1',
      distance: 1,
    },
    {
      name: 'server2',
      distance: 2,
    },
  ];

  describe('requestServers', () => {
    it('should return the correct type and loading boolean', () => {
      const expectedResult = {
        type: REQUEST_SERVERS,
        loading: true,
      };

      expect(requestServers())
        .toEqual(expectedResult);
    });
  });

  describe('receiveServers', () => {
    it('should return the correct type, loading boolean and response data', () => {
      const data = sampleServersList;

      const expectedResult = {
        type: RECEIVE_SERVERS,
        loading: false,
        data,
      };

      expect(receiveServers(data))
        .toEqual(expectedResult);
    });
  });

  describe('rejectServers', () => {
    it('should return the correct type and loading boolean', () => {
      const error = 'sample-error';

      const expectedResult = {
        type: REJECT_SERVERS,
        loading: false,
      };

      expect(rejectServers(error))
        .toEqual(expectedResult);
    });
  });

  describe('clearServers', () => {
    it('should return the correct type and an empty array as data', () => {
      const data = [];

      const expectedResult = {
        type: CLEAR_SERVERS,
        data,
      };

      expect(clearServers())
        .toEqual(expectedResult);
    });
  });

  describe('sortServers', () => {
    it('should return the correct type and data', () => {
      const data = sampleServersList;

      const expectedResult = {
        type: SORT_SERVERS,
        data,
      };

      expect(sortServers(data))
        .toEqual(expectedResult);
    });
  });
});
