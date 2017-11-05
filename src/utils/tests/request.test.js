import { serialize } from '../request';

describe('# Request utility', () => {
  describe('serialize', () => {
    it('should contain an serialized object', () => {
      const expectedString = 'username=test&password=test';
      expect(serialize({
        username: 'test',
        password: 'test',
      })).toBe(expectedString);
    });
  });
});
