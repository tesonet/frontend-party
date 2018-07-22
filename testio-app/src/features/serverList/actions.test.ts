import { buildServerList } from './actions';
import { IAPIResponse } from './types';

const testAPIData: IAPIResponse[] = [
  { name: 'Latvia #56', distance: 451 },
  { name: 'Lithuania #56', distance: 1713 },
  { name: 'Latvia #81', distance: 504 }
];

describe('list actions ', () => {
  describe('#buildAds', () => {
    it('should build countries list from api data', () => {
      const result = testAPIData.map(buildServerList);
      expect(result).toMatchSnapshot();
    });
  });
});
